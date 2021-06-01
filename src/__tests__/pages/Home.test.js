import renderer from 'react-test-renderer'
import Home from '../../components/Home'
import React from 'react'


it('matches the Home snapshot',()=>{
   const tree= renderer.create(<Home/>).toJSON()
   expect(tree).toMatchSnapshot()
})
