import { Header, Footer } from '@/components';

function MainLayout({ children }) {
  return (
    <div>
      <Header className="container" />
      <div>{children}</div>
      <Footer className="container" />
    </div>
  );
}

export default MainLayout;
