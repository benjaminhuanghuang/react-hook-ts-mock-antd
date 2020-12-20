import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import AutoComplete from './autoComplete';

const defaultProps: any = {
  onChange: jest.fn(),
  placeholder: 'test-input',
};


describe('test AutoComplete component', () => {
  it('should render the correct default AutoComplete', () => {
    const wrapper = render(<AutoComplete {...defaultProps} />);
    
    
  });
});
