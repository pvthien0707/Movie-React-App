import PropTypes from 'prop-types';
import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Input, Button } from '@/components';
import { category as cate } from '@/api/movieApi';

import './MovieSearch.scss';

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
    <div className="movie-search">
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

MovieSearch.propTypes = {
  keyword: PropTypes.string,
  category: PropTypes.string.isRequired,
};

export default MovieSearch;
