import PropTypes from 'prop-types';

import apiConfig from '@/api/apiConfig';

import './Banner.scss';

function Banner({ item }) {
  return (
    <div
      className={'banner'}
      style={{
        backgroundImage: `url(${apiConfig.originalImage(
          item.backdrop_path || item.poster_path,
        )})`,
      }}
    ></div>
  );
}

Banner.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Banner;
