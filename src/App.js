import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import RoutesWrap from './infra/portal/Routes';


function App() {
  return (
    <Router>
      <RoutesWrap/>
    </Router>
  );
}

export default App;
