import { useParams } from 'react-router-dom';

import { PageHeader, MovieGrid } from '@/components';

import { category as cate } from '@/api/movieApi';

function Catalog() {
  const { category } = useParams();

  return (
    <>
      <PageHeader>{category === cate.movie ? 'Movies' : 'TV Series'}</PageHeader>

      <div className="container">
        <section className="section">
          <MovieGrid category={category} />
        </section>
      </div>
    </>
  );
}

export default Catalog;
