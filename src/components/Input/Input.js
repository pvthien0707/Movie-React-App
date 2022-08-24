import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({ type = 'text', value, placeholder, onChange }) {
  return (
    <input
      className={cx('input')}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange ? (e) => onChange(e) : null}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
