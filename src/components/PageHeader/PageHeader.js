import PropTypes from 'prop-types';

import { images } from '@/constants';

import './PageHeader.scss';
function PageHeader({ children }) {
  return (
    <header
      className="page-header"
      style={{ backgroundImage: `url(${images.bg})` }}
    >
      <h2>{children}</h2>
    </header>
  );
}

PageHeader.propTypes = {
  children: PropTypes.node,
};

export default PageHeader;
