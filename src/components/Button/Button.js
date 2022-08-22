import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';
const cx = classNames.bind(styles);

function Button({ outline, small, className, children, onClick }) {
  return (
    <button
      className={cx('btn', {
        outline,
        small,
        [className]: className,
      })}
      onClick={onClick ? () => onClick() : null}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  outline: PropTypes.bool,
  small: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
