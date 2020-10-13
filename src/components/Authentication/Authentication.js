import React, {createContext} from 'react';

import { CURRENT_USER } from '../../constants/applicationConstants'

import {getInitAuthData} from '../../utils/help';

import { authUrl, signOutUrl } from '../../config/url';
import request from '../../utils/request';

const initialAuthData = getInitAuthData();

const AuthenticationCtx = createContext({...initialAuthData });

export class AuthenticationManger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialAuthData
    };
  }


  authenticate = async (email, password) => {
    const resp = await request(authUrl, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      })
    });
    
    

    if(resp.status === 200) {
      const currentUser = {
        isAuthenticated: true,
        token: 'blabla...',
        permissions: ['admin'],
        currentUser: {
          email,
          password
        }
      }
      localStorage.setItem(CURRENT_USER,JSON.stringify(currentUser));
      this.setState({...currentUser});
    }

    return resp;

  };

  logout = async () => {
    try {
      const currentUserStr = localStorage.getItem(CURRENT_USER);
     if(currentUserStr) {
      const currentUserData  = JSON.parse(currentUserStr);
      const resp = await request(signOutUrl, {
        method: 'POST',
        body: JSON.stringify(currentUserData.currentUser)
      })
      localStorage.removeItem(CURRENT_USER);
     }

     return true;
      
    } catch (error) {
      return false;
    }

  }


  render = () => (
    <AuthenticationCtx.Provider value={{ ...this.state, authenticate: this.authenticate, logout : this.logout}}>
      {this.props.children}
    </AuthenticationCtx.Provider>
  );

}


export const Auth = ({ children }) => (
  <AuthenticationCtx.Consumer>
    {({ isAuthenticated, authenticate, token, permissions = [], logout }) => {
      return children({ isAuthenticated, authenticate, token, permissions, logout });
    }}
  </AuthenticationCtx.Consumer>
);


export const Guard = ({ allowed = [], children }) => (
  <Auth>
    {({ permissions }) => {
      if (permissions.some(permission => allowed.includes(permission))) {
        return children;
      }
    }}
  </Auth>
);


export const withAuth = Component => props => (
  <Auth>
    {({ isAuthenticated, authenticate, token, permissions = [], logout }) => (
      <Component
        {...props}
        isAuthenticated={isAuthenticated}
        authenticate={authenticate}
        token={token}
        permissions={permissions}
        logout={logout}
      />
    )}
  </Auth>
);