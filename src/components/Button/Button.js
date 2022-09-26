import PropTypes from 'prop-types';

import './Button.scss';

function Button({ outline, small, className, children, onClick }) {
  return (
    <button
      className={`btn ${outline ? 'btn--outline' : ''} ${
        small ? 'btn--small' : ''
      } ${className}`}
      onClick={onClick ? () => onClick() : null}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  outline: PropTypes.bool,
  small: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
