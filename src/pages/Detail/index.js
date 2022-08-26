import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import movieApi from '@/api/movieApi';
import { Banner, MovieContent, VideoList, MovieList } from '@/components';

function Detail() {
  const { category, id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await movieApi.getDetail(category, id, { params: {} });
      setItem(response);
      window.scrollTo(0, 0);
    };

    getDetail();
  }, [category, id]);

  return (
    <>
      {item && (
        <>
          <Banner item={item} />

          <MovieContent item={item} className="container" />

          <div className="container">
            <div className="section">
              <VideoList id={id} />
            </div>
            <div className="section">
              <div className="section__header">
                <h2>Similar</h2>
              </div>
              <MovieList category={category} type="similar" id={id} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Detail;
