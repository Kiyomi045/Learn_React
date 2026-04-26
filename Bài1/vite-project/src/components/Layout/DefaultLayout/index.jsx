import Header from '~/components/Layout/component/Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </>
  );
}

export default DefaultLayout;
