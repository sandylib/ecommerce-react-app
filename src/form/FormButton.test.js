import React from 'react';

import {
    render,
    fireEvent,
    cleanup
  } from '@testing-library/react';

import FormButton from './FormButton';



describe('UNIT TEST | Component', () => {

  const spy = jest.fn();

  afterEach(cleanup);

  it('should render correctly', () => {
   
    const inprogress = false;

     render(<FormButton  disabled={inprogress}></FormButton>);
  });

  it('should disabled', () => {
    const { getByText } = render(<FormButton  disabled={false}>Submit</FormButton>);
    const formButton = getByText(/Submit/i);
    expect(formButton).toBeInTheDocument();
  });
    
    
})
