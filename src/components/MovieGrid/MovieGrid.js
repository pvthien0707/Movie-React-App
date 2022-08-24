import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import movieApi, { category as cate, movieType, tvType } from '@/api/movieApi';
import { MovieCard, Button } from '@/components';

import styles from './MovieGrid.module.scss';

const cx = classNames.bind(styles);

function MovieGrid({ category }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const { keyword } = useParams();

  useEffect(() => {
    const getList = async () => {
      let response = null;

      if (keyword === undefined) {
        const params = {};

        switch (category) {
          case cate.movie:
            response = await movieApi.getMovieList(movieType.upcoming, { params });
            break;
          default:
            response = await movieApi.getTvList(tvType.popular, { params });
        }
      } else {
        const params = { query: keyword };

        response = await movieApi.search(category, { params });
      }

      setMovies(response.results);
      setTotalPage(response.total_pages);
    };

    getList();
  }, [category, keyword]);

  const handleLoadMore = async () => {
    let response = null;

    if (keyword === undefined) {
      const params = { page: page + 1 };

      switch (category) {
        case cate.movie:
          response = await movieApi.getMovieList(movieType.upcoming, { params });
          break;
        default:
          response = await movieApi.getTvList(tvType.popular, { params });
      }
    } else {
      const params = { page: page + 1, query: keyword };

      response = await movieApi.search(category, { params });
    }

    setMovies([...movies, ...response.results]);
    setPage(page + 1);
  };

  return (
    <>
      <div className={cx('movie-grid')}>
        {movies.map((movie, index) => (
          <MovieCard key={index} item={movie} category={category} />
        ))}
      </div>

      {page < totalPage ? (
        <div className={cx('movie-grid-more')}>
          <Button outline small onClick={handleLoadMore}>
            Load more
          </Button>
        </div>
      ) : null}
    </>
  );
}

MovieGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default MovieGrid;
