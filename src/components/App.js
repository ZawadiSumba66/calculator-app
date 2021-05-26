import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      total : null,
      next :null,
      operation : null
    }
  }

  handleClick(buttonName){
    const data = {total,next,operation}
    calculate(data,buttonName)
    this.setState=({
      total, next, operation
    })
  }
  render(){
  return (
    <>
      <Display next={next} total={total} />
      <ButtonPanel clickHandler={this.handleClick}/>
    </>
  );
  }
}

export default App;
