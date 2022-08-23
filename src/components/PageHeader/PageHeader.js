import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import bg from '@/assets/images/background.jpg';

import styles from './PageHeader.module.scss';

const cx = classNames.bind(styles);

function PageHeader({ children }) {
  return (
    <header className={cx('page-header')} style={{ backgroundImage: `url(${bg})` }}>
      <h2>{children}</h2>
    </header>
  );
}

PageHeader.propTypes = {
  children: PropTypes.node,
};

export default PageHeader;
