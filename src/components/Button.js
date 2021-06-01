import PropTypes from 'prop-types';

function Button({ name, handleClick }) {
  return (
    <button type="button" data-testid="button" className="button" onClick={() => handleClick(name)}>{name}</button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
