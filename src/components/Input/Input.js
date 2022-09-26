import PropTypes from 'prop-types';

import './Input.scss';

function Input({ type = 'text', value, placeholder, onChange }) {
  return (
    <input
      className="input"
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange ? (e) => onChange(e) : null}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Input;
