import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import apiConfig from '@/api/apiConfig';
import movieApi, { category } from '@/api/movieApi';

import { Button, TrailerModal } from '@/components';

import styles from './HeroSlide.module.scss';
const cx = classNames.bind(styles);

function HeroSlide({ item, isActive, className }) {
  let navigate = useNavigate();

  const slideItem = item;

  const backgroundPath = apiConfig.originalImage(
    slideItem.backdrop_path ? slideItem.backdrop_path : slideItem.poster_path,
  );

  const handleActiveModal = async () => {
    const modal = document.querySelector(`#modal_${slideItem.id}`);

    const videos = await movieApi.getVideos(category.movie, slideItem.id);

    if (videos.results.length > 0) {
      const videoSrc = `https://www.youtube.com/embed/${videos.results[0].key}`;
      modal
        .querySelector('.modal-content > iframe')
        .setAttribute('src', videoSrc);
    } else {
      modal.querySelector('.modal-content').innerHTML = 'No trailer';
    }

    modal.classList.toggle('active');
  };

  return (
    <div
      className={cx('hero-slide', { active: isActive })}
      style={{ backgroundImage: `url(${backgroundPath})` }}
    >
      <div className={cx('hero-slide-content', { [className]: className })}>
        <div className={cx('hero-slide-content-info')}>
          <h2 className={cx('hero-slide-content-info__title')}>
            {slideItem.title}
          </h2>
          <p className={cx('hero-slide-content-info__overview')}>
            {slideItem.overview}
          </p>
          <div className={cx('hero-slide-content-info__btns')}>
            <Button onClick={() => navigate(`/movie/${slideItem.id}`)}>
              Watch now
            </Button>
            <Button outline onClick={handleActiveModal}>
              Watch trailer
            </Button>
          </div>
        </div>
        <div className={cx('hero-slide-content__poster')}>
          <img src={apiConfig.width500Image(slideItem.poster_path)} alt="" />
        </div>
      </div>

      <TrailerModal item={item} />
    </div>
  );
}

HeroSlide.propTypes = {
  item: PropTypes.object,
  isActive: PropTypes.bool,
  className: PropTypes.string,
};

export default HeroSlide;
