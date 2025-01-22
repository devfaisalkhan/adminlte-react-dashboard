import Sidebar from '../components/Sidebar';
import { Navbar } from '../components/Navbar';
import ControlSidebar from '../components/Control-Sidebar';
import Footer from '../components/Footer';
import ContentWrapper from '../components/Content-Wrapper';

const Layout = () => {
  return (
    <>
        <Navbar />
        <Sidebar />
        <ControlSidebar />
        <ContentWrapper />
        <Footer />
    </>
  );
};

export default Layout;
