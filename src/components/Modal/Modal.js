import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from 'Modal.module.scss';

const cx = classNames.bind(styles);

function Modal({ id, active, children }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  return (
    <div id={id} className={cx('modal', { active: isActive })}>
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
