import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';

const Layout = () => {
  return (
    <>
      <Navbar />  {/* Common Navbar */}
      <main>
        <Outlet /> {/* This is where your routed components will be rendered */}
      </main>
      <Footer />  {/* Common Footer */}
    </>
  );
};

export default Layout;
