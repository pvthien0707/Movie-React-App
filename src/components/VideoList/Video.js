import { useEffect, useRef } from 'react';

import classNames from 'classnames/bind';

import styles from './VideoList.module.scss';

const cx = classNames.bind(styles);

function Video({ item }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + 'px';
    iframeRef.current.setAttribute('height', height);
  }, []);

  return (
    <div className={cx('video')}>
      <div className={cx('video__title')}>
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

export default Video;
