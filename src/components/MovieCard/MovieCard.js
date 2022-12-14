import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import apiConfig from '@/api/apiConfig';
import { category as cate } from '@/api/movieApi';
import { Button } from '@/components';

import './MovieCard.scss';

function MovieCard({ item, category }) {
  const link = `/${cate[category]}/${item.id}`;

  const bgUrl = apiConfig.width500Image(item.poster_path || item.backdrop_path);

  return (
    <Link to={link}>
      <div className="movie-card" style={{ backgroundImage: `url(${bgUrl})` }}>
        <Button className="movie-card__btn">
          <FontAwesomeIcon icon={faPlay} />
        </Button>
      </div>
      <h3 className="movie-card-title">{item.title || item.name}</h3>
    </Link>
  );
}

MovieCard.propTypes = {
  item: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
};

export default MovieCard;
