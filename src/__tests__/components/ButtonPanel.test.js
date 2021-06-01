import ButtonPanel from '../../components/ButtonPanel';
import {render} from '@testing-library/react'
import React from 'react'

it('should render the correct buttons for the calculator',()=>{
    const {getByTestId} = render(<ButtonPanel/>)
    expect(getByTestId('button-panel')).toHaveTextContent('4')
    expect(getByTestId('button-panel')).toHaveTextContent('%')
    expect(getByTestId('button-panel')).toHaveTextContent('8')
    expect(getByTestId('button-panel')).toHaveTextContent('-')
})