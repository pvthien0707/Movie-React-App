import { Header, Footer } from '@/components';

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;
