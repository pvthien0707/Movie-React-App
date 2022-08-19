import { useRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import './Modal.scss';

function ModalContent({ children, onClose }) {
  const modalContentRef = useRef(null);

  const closeModal = () => {
    modalContentRef.current.parentNode.classList.remove('active');

    if (onClose) onClose();
  };

  return (
    <div ref={modalContentRef} className={'modal-content'}>
      {children}
      <div className={'modal-content__close'} onClick={closeModal}>
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
