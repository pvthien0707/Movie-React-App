import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import movieApi from '@/api/movieApi';
import apiConfig from '@/api/apiConfig';

import './Cast.scss';

function Cast({ id }) {
  const { category } = useParams();

  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getCredits = async () => {
      const response = await movieApi.getCredits(category, id);
      setCasts(response.cast.slice(0, 5));
    };
    getCredits();
  }, [category, id]);

  return (
    <div className="cast">
      <div className="cast__header">
        <h2>Casts</h2>
      </div>
      <div className="cast-list">
        {casts.map((cast, index) => (
          <div key={index} className="cast-item">
            <div
              className="cast-item__img"
              style={{
                backgroundImage: `url(${apiConfig.width500Image(
                  cast.profile_path,
                )})`,
              }}
            ></div>

            <p className="cast-item__name">{cast.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

Cast.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Cast;
