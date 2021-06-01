import renderer from 'react-test-renderer'
import Quote from '../../components/Quote'
import React from 'react'


it('matches the Quote snapshot',()=>{
   const tree= renderer.create(<Quote/>).toJSON()
   expect(tree).toMatchSnapshot()
})