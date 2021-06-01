import Button from '../../components/Button';
import {render} from '@testing-library/react'
import React from 'react'

it('renders a button correctly',()=>{
    const {getByTestId} = render(<Button name="4"/>)
    expect(getByTestId('button')).toHaveTextContent('4')
})