


```
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps } from './button'

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};

it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>)

    const element = wrapper.getByText('Nice') as HTMLButtonElement

    // does element exist, tagName, class, attribute
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    expect(element.disabled).toBeFalsy()

    // event fired
    const element = wrapper.getByText('Nice') as HTMLButtonElement;
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()  
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  })
```