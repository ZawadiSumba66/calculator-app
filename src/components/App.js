import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// import calculate from '../logic/calculate';

function App() {
  // const handleClick = (btnName) => {
  //   const data = { total, next, operation };
  //   const calc = calculate(data, btnName);
  // };
  return (
    <>
      <Display />
      <ButtonPanel />
    </>
  );
}

export default App;
