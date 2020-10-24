import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, cleanup } from '../../utils/test-utils'

import '@testing-library/jest-dom/extend-expect'
import SignUp from './SignUp'
import { registUrl } from '../../config/url';

import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'


const spy = jest.fn();

const server = setupServer(
  rest.post(registUrl, (req, res, ctx) => {
    return res(ctx.status(401))
  })
)

beforeAll(() => server.listen())

afterEach(() => {
    server.resetHandlers();
    cleanup();
})

afterAll(() => server.close())

test('should pass the validation and submit the form',  async() => {
    const signUpSetUp = () => {
        const history = createMemoryHistory()
        const ui = (
            <Router history={history}>
                <SignUp authenticated={spy} isAuthenticated={false} />
            </Router>
        )
        const utils = render(ui);

        const email = utils.getByLabelText('Email');
        const name = utils.getByLabelText('Name');
        const password = utils.getByLabelText('Password');
        const passwordConfirm = utils.getByLabelText('Password Confirmation');
        const submit = utils.getByTestId('submit-button')
        return {
            email,
            name,
            password,
            passwordConfirm,
            submit,
            ...utils,
        }
    }

    const { email,name,password,passwordConfirm, submit } = signUpSetUp()
    fireEvent.change(email, { target: { value: '23@qq.com' } })
    expect(email.value).toBe('23@qq.com')
    fireEvent.change(name, { target: { value: 'qq' } })
    expect(name.value).toBe('qq')
    fireEvent.change(password, { target: { value: 'Pp1234' } })
    expect(password.value).toBe('Pp1234')
    fireEvent.change(passwordConfirm, { target: { value: 'Pp1234' } })
    expect(passwordConfirm.value).toBe('Pp1234')
    fireEvent.change(passwordConfirm, { target: { value: 'Pp1234' } })
    expect(passwordConfirm.value).toBe('Pp1234')
    fireEvent.click(submit) 
   
    expect(spy).toBeCalledTimes(0);
})




