import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './admin/layout/Layout';
import Dashboard from './admin/pages/dashboard/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Child routes rendered in the Layout's <Outlet /> */}
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
    
  );
};

export default App;
