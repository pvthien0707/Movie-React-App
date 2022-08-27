import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import required modules
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';

import movieApi, { movieType } from '@/api/movieApi';

import { HeroSlide } from '@/components';

import styles from './Hero.module.scss';
const cx = classNames.bind(styles);

function Hero() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const params = { page: 1 };
        const response = await movieApi.getMovieList(movieType.popular, {
          params,
        });
        console.log('Get movie list successfully.');
        setMovies(response.results.slice(1, 4));
      } catch (error) {
        console.error('Fail to get movie list: ', error);
      }
    };

    getMovieList();
  }, []);

  return (
    <div className={cx('hero')}>
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        // autoplay={{ delay: 2500 }}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <HeroSlide
                className={'container'}
                item={movie}
                isActive={isActive ? isActive : false}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Hero;
