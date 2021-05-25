import PropTypes from 'prop-types';

function Display(props) {
  return (
    <div>
      <h1>{props.result}</h1>
    </div>
  );
}
Display.defaultProps = {
  result: 0,
};

Display.propTypes = { result: PropTypes.string.isRequired };

export default Display;
