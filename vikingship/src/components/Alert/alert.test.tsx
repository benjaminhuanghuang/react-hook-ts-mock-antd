import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Alert, { AlertProps, AlertType } from './alert'


const defaultProps = {
  onClick: jest.fn()
}

const testProps: AlertProps = {
  type: 'success',
  title: '_test_title',
  description: '_test_description',
  onClose: jest.fn(),
  closable: true
}

const disabledProps: AlertProps = {
  type: 'success',
  title: '_test_title',
  description: '_test_description',
  onClose: jest.fn(),
  closable: false
}


describe('test Alert component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Alert {...testProps} >Nice</Alert>)
    
  })
  
})