import PropTypes from 'prop-types';

import apiConfig from '@/api/apiConfig';
import { Cast } from '@/components';

import './MovieContent.scss';
function MovieContent({ item, className }) {
  return (
    <div className={`movie-content ${className}`}>
      <div className="movie-content-poster">
        <div
          className="movie-content-poster__img"
          style={{
            backgroundImage: `url(${apiConfig.originalImage(
              item.poster_path || item.backdrop_path,
            )})`,
          }}
        ></div>
      </div>
      <div className="movie-content-info">
        <h2 className="movie-content-info__title">{item.title || item.name}</h2>

        <div className="movie-content-info-genres">
          {item.genres &&
            item.genres.slice(0, 5).map((genre, index) => (
              <span key={index} className="movie-content-info-genres__item">
                {genre.name}
              </span>
            ))}
        </div>

        <p className="movie-content-info__overview">{item.overview}</p>

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
