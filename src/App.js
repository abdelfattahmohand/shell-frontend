
import {
  BrowserRouter as Router,
  Routes,
  Route,
}from 'react-router-dom';

import Home from './pages/pages/home';
import POS from './pages/pages/POS';
import Analytics from './pages/pages/analytics';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/POS" element={<POS/>} />
        <Route path="/Analytics" element={<Analytics/>} />
      </Routes>
    </Router>
  );
}

export default App;
