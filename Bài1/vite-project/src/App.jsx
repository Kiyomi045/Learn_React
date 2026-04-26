import { Fragment } from 'react';
import { Routes, Route } from 'react-router';
import { publicRoute } from '~/route';
import { DefaultLayout } from '~/components/Layout';

function App() {
  return (
    <>
      <Routes>
        {publicRoute.map((route, i) => {
          const Page = route.component;

          let Layout = DefaultLayout;

          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }

          return (
            <Route
              key={i}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            ></Route>
          );
        })}
      </Routes>
    </>
  );
}

export default App;
