import { useParams } from 'react-router-dom';

import { PageHeader } from '@/components';

import { category as cate } from '@/api/movieApi';

function Catalog() {
  const { category } = useParams();

  return (
    <>
      <PageHeader>{category === cate.movie ? 'Movies' : 'TV Series'}</PageHeader>
    </>
  );
}

export default Catalog;
