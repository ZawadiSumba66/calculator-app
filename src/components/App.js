import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const calc = calculate(buttonName);
    this.setState = ({
      total: calc.total,
      next: calc.next,
      operation: calc.operation,
    });
  }

  render() {
    const { next, total, operation } = this.state;
    return (
      <>
        <Display next={next} total={total} operation={operation} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
