
import './App.css';
import Nav from './componentes/Nav';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouters from './routes/AppRouters';

function App() {
  return (
        <div>
        <Router>
          <Nav />
          <AppRouters />
        </Router>
        </ div>
        

  );
};

export default App;
