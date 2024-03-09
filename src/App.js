
import {
  BrowserRouter as Router,
  routes,
  Route,
}from 'react-router-dom';

import Home from './pages/pages/Home';
import POS from './pages/pages/POS';
import Analytics from './pages/pages/Analytics';
function App() {
  return (
    <Router>
      <routes>
        <Route path="/" element={<Home/>} />
        <Route path="/POS" element={<POS/>} />
        <Route path="/Analytics" element={<Analytics/>} />
      </routes>
    </Router>
  );
}

export default App;
