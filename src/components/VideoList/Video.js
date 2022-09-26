import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

import './VideoList.scss';

function Video({ item }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + 'px';
    iframeRef.current.setAttribute('height', height);
  }, []);

  return (
    <div className="video">
      <div className="video__title">
        <h2>{item.name}</h2>
      </div>
      <iframe
        ref={iframeRef}
        width="100%"
        src={`https://www.youtube.com/embed/${item.key}`}
        title="video"
      ></iframe>
    </div>
  );
}

Video.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Video;
