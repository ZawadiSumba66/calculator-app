import renderer from 'react-test-renderer'
import Calculator from '../../components/Calculator'
import React from 'react'


it('matches the Calculator snapshot',()=>{
   const tree= renderer.create(<Calculator/>).toJSON()
   expect(tree).toMatchSnapshot()
})