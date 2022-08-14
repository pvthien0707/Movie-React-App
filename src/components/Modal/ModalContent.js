import { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from 'Modal.module.scss';

const cx = classNames.bind(styles);

function ModalContent({ children, onClose }) {
  const modalContentRef = useRef(null);

  const closeModal = () => {
    modalContentRef.current.classList.remove(cx('active'));

    if (onClose) onClose();
  };

  return (
    <div ref={modalContentRef} className={cx('modal-content')}>
      {children}
      <div className={cx('modal-content__close')}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </div>
  );
}

ModalContent.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
};

export default ModalContent;
