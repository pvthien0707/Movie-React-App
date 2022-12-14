import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import movieApi, { category as cate } from '@/api/movieApi';
import { MovieCard } from '@/components';

import './MovieList.scss';
function MovieList({ category, type, id }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};

      if (type !== 'similar') {
        switch (category) {
          case cate.movie:
            response = await movieApi.getMovieList(type, { params });
            break;
          default:
            response = await movieApi.getTvList(type, { params });
        }
      } else {
        response = await movieApi.getSimilar(category, id);
      }
      setMovies(response.results);
    };

    getList();
  }, []);

  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
        {movies.map((movie, index) => (
          <SwiperSlide className="movie-list__slide" key={index}>
            <MovieCard item={movie} category={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
};

export default MovieList;
