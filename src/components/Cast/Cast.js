import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import movieApi from '@/api/movieApi';
import apiConfig from '@/api/apiConfig';

import classNames from 'classnames/bind';

import styles from './Cast.module.scss';

const cx = classNames.bind(styles);

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
    <div className={cx('cast')}>
      <div className={cx('cast__header')}>
        <h2>Casts</h2>
      </div>
      <div className={cx('cast-list')}>
        {casts.map((cast, index) => (
          <div key={index} className={cx('cast-item')}>
            <div
              className={cx('cast-item__img')}
              style={{
                backgroundImage: `url(${apiConfig.width500Image(
                  cast.profile_path,
                )})`,
              }}
            ></div>

            <p className={cx('cast-item__name')}>{cast.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cast;
