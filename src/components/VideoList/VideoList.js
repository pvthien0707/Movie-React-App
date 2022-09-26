import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import movieApi from '@/api/movieApi';
import Video from './Video';

import './VideoList.scss';

function VideoList({ id }) {
  const { category } = useParams();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const response = await movieApi.getVideos(category, id);

      setVideos(response.results.slice(0, 5));
    };

    getVideos();
  }, [category, id]);

  return (
    <div className="video-list">
      {videos.map((video, index) => (
        <Video key={index} item={video} />
      ))}
    </div>
  );
}

VideoList.propTypes = {
  id: PropTypes.string.isRequired,
};

export default VideoList;
