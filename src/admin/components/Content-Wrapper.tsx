import { Outlet } from 'react-router-dom';

const ContentWrapper = () => {
  return (
    <>
    <div className="content-wrapper">
          <section className="content">
            {/* Render child components here */}
            <Outlet />
          </section>
    </div>
    </>
  );
};

export default ContentWrapper;
