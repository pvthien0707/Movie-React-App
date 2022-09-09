import { Home, Catalog, Detail } from '@/pages';

const publicRoutes = [
  {
    path: '/Movie-React-App',
    component: Home,
  },
  {
    path: '/:category/search/:keyword',
    component: Catalog,
  },
  {
    path: '/:category',
    component: Catalog,
  },
  {
    path: '/:category/:id',
    component: Detail,
  },
];

export { publicRoutes };
