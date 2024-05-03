import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { PublicRoutes } from './routing/publicRoutes';

function App() {
  return (
  
        <Router>
          <PublicRoutes />
        </Router>

  );
}

export default App;
