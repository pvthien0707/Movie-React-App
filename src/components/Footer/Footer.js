import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { images } from '@/constants';

import './Footer.scss';

function Footer({ className }) {
  return (
    <footer className="footer" style={{ backgroundImage: `url(${images.bg})` }}>
      <div className={`footer-content ${className}`}>
        <div className="footer-content__logo">
          <img src={images.logo} alt="header-logo" />
          <Link to="/">DBMovie</Link>
        </div>
        <div className="footer-content-menu">
          <div className="footer-content-menu__column">
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About us</Link>
          </div>
          <div className="footer-content-menu__column">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Pravacy policy</Link>
          </div>
          <div className="footer-content-menu__column">
            <Link to="/">You must watch</Link>
            <Link to="/">Recent release</Link>
            <Link to="/">Top IMDB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
