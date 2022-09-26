import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

import movieApi, { movieType } from '@/api/movieApi';

import { HeroSlide } from '@/components';

import 'swiper/css';
import './Hero.scss';

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
    <div className="hero">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 2500 }}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <HeroSlide
                className="container"
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
