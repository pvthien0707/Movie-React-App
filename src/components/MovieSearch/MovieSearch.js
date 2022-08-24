import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import { Input, Button } from '@/components';
import { category as cate } from '@/api/movieApi';

import styles from './MovieSearch.module.scss';

const cx = classNames.bind(styles);

function MovieSearch({ keyword, category }) {
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState(keyword ? keyword : '');

  const handleSearch = useCallback(() => {
    if (searchInput.trim().length > 0) {
      navigate(`/${cate[category]}/search/${searchInput}`);
    }

    setSearchInput('');
  }, [searchInput, category, navigate]);

  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();

      if (e.keyCode === 13) {
        handleSearch();
      }
    };

    document.addEventListener('keyup', enterEvent);

    return () => {
      document.removeEventListener('keyup', enterEvent);
    };
  }, [searchInput, handleSearch]);

  return (
    <div className={cx('movie-search')}>
      <Input
        value={searchInput}
        placeholder="Enter keyword"
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <Button small onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
}

export default MovieSearch;
