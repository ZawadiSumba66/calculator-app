import PropTypes from 'prop-types';

const Display = ({ total, operation, next }) => (
  <div>
    <h2>
      {total || '0'}
      {operation || ''}
      {next}
    </h2>
  </div>
);

Display.propTypes = {
  total: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};

export default Display;
