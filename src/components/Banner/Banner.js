import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import apiConfig from '@/api/apiConfig';

import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

function Banner({ item }) {
  return (
    <div
      className={cx('banner')}
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
