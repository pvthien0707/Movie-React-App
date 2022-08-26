import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import apiConfig from '@/api/apiConfig';
import { Cast } from '@/components';

import styles from './MovieContent.module.scss';

const cx = classNames.bind(styles);

function MovieContent({ item, className }) {
  return (
    <div className={cx('movie-content', { [className]: className })}>
      <div className={cx('movie-content-poster')}>
        <div
          className={cx('movie-content-poster__img')}
          style={{
            backgroundImage: `url(${apiConfig.originalImage(
              item.poster_path || item.backdrop_path,
            )})`,
          }}
        ></div>
      </div>
      <div className={cx('movie-content-info')}>
        <h2 className={cx('movie-content-info__title')}>
          {item.title || item.name}
        </h2>

        <div className={cx('movie-content-info-genres')}>
          {item.genres &&
            item.genres.slice(0, 5).map((genre, index) => (
              <span
                key={index}
                className={cx('movie-content-info-genres__item')}
              >
                {genre.name}
              </span>
            ))}
        </div>

        <p className={cx('movie-content-info__overview')}>{item.overview}</p>

        <Cast id={item.id} />
      </div>
    </div>
  );
}

MovieContent.propTypes = {
  item: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default MovieContent;
