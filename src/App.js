import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoutes } from '@/configs';
import { MainLayout } from '@/layouts';

import '@/scss/App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <MainLayout>
                    <Page />
                  </MainLayout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
