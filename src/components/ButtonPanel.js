import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';

function ButtonPanel({ clickHandler }) {
  const renderButton = (i) => <Button name={i} handleClick={clickHandler} />;
  return (
    <div data-testid="button-panel">
      <div className="calculator-row">
        {renderButton('AC')}
        {renderButton('+/-')}
        {renderButton('%')}
        {renderButton('/')}
      </div>
      <div className="calculator-row">
        {renderButton('7')}
        {renderButton('8')}
        {renderButton('9')}
        {renderButton('X')}
      </div>
      <div className="calculator-row">
        {renderButton('4')}
        {renderButton('5')}
        {renderButton('6')}
        {renderButton('-')}
      </div>
      <div className="calculator-row">
        {renderButton('1')}
        {renderButton('2')}
        {renderButton('3')}
        {renderButton('+')}
      </div>
      <div className="calculator2-row">
        {renderButton('0')}
        {renderButton('.')}
        {renderButton('=')}
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
