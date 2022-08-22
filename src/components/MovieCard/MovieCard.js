import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import apiConfig from '@/api/apiConfig';
import { category as cate } from '@/api/movieApi';
import { Button } from '@/components';

import styles from './MovieCard.module.scss';

const cx = classNames.bind(styles);

function MovieCard({ item, category }) {
  const link = `/${cate[category]}/${item.id}`;

  const bgUrl = apiConfig.width500Image(item.poster_path || item.backdrop_path);

  return (
    <Link to={link}>
      <div className={cx('movie-card')} style={{ backgroundImage: `url(${bgUrl})` }}>
        <Button className={cx('movie-card__btn')}>
          <FontAwesomeIcon icon={faPlay} />
        </Button>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
}

MovieCard.propTypes = {
  item: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
};

export default MovieCard;
