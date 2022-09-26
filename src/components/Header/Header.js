import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { images } from '@/constants';

import './Header.scss';

const headerNav = [
  {
    display: 'Home',
    path: '/',
  },
  {
    display: 'Movie',
    path: '/movie',
  },
  {
    display: 'TV Series',
    path: '/tv',
  },
];

function Header({ className }) {
  let location = useLocation();

  const headerRef = useRef(null);

  const activeIndex = headerNav.findIndex((e) => e.path === location.pathname);

  useEffect(() => {
    const shrinkHeader = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop) {
        headerRef.current.classList.add('shrink');
      } else {
        headerRef.current.classList.remove('shrink');
      }
    };
    window.addEventListener('scroll', shrinkHeader);

    return () => {
      window.removeEventListener('scroll', shrinkHeader);
    };
  }, []);

  return (
    <header ref={headerRef} className="header">
      <div className={`header-wrapper ${className}`}>
        <div className="header__logo">
          <img src={images.logo} alt="header-logo" />
          <Link to="/">DBMovie</Link>
        </div>
        <nav>
          <ul className="header-navigation">
            {headerNav.map((e, i) => {
              const active = i === activeIndex ? 'active' : '';

              return (
                <li className={`header-navigation__item ${active}`} key={i}>
                  <Link to={e.path}>{e.display}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
