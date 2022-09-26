import PropTypes from 'prop-types';
import { useRef } from 'react';

import { Modal, ModalContent } from '@/components';

function TrailerModal(prop) {
  const item = prop.item;
  const iframeRef = useRef(null);

  const onClose = () => iframeRef.current.setAttribute('src', '');

  return (
    <Modal id={`modal_${item.id}`} active={false}>
      <ModalContent onClose={onClose}>
        <iframe
          ref={iframeRef}
          title="Trailer"
          width="100%"
          height="500px"
        ></iframe>
      </ModalContent>
    </Modal>
  );
}

TrailerModal.propTypes = {
  item: PropTypes.object.isRequired,
};

export default TrailerModal;
