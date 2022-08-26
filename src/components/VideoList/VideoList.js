import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import movieApi from '@/api/movieApi';
import Video from './Video';

import classNames from 'classnames/bind';

import styles from './VideoList.module.scss';

const cx = classNames.bind(styles);

function VideoList({ id }) {
  const { category } = useParams();

  const [videos, setVideos] = useState([]);

  console.log('category: ', category);

  useEffect(() => {
    const getVideos = async () => {
      const response = await movieApi.getVideos(category, id);

      setVideos(response.results.slice(0, 5));
    };

    getVideos();
  }, [category, id]);

  return (
    <div className={cx('video-list')}>
      {videos.map((video, index) => (
        <Video key={index} item={video} />
      ))}
    </div>
  );
}

export default VideoList;
