import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import logo from '@/assets/images/logo.png';
import bg from '@/assets/images/footer-bg.jpg';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer({ className }) {
  return (
    <footer className={cx('footer')} style={{ backgroundImage: `url(${bg})` }}>
      <div className={cx('footer-content', { [className]: className })}>
        <div className={cx('footer-content__logo')}>
          <img src={logo} alt="header-logo" />
          <Link to="/">DBMovie</Link>
        </div>
        <div className={cx('footer-content-menu')}>
          <div className={cx('footer-content-menu__column')}>
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About us</Link>
          </div>
          <div className={cx('footer-content-menu__column')}>
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Pravacy policy</Link>
          </div>
          <div className={cx('footer-content-menu__column')}>
            <Link to="/">You must watch</Link>
            <Link to="/">Recent release</Link>
            <Link to="/">Top IMDB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
