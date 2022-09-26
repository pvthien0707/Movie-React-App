import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import './Modal.scss';
function Modal({ id, active, children }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  return (
    <div id={id} className={`modal ${isActive ? 'active' : ''}`}>
      {children}
    </div>
  );
}

Modal.propTypes = {
  id: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.node,
};

export default Modal;
