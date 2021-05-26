import Homepage from './pages/Homepage';
import APropos from './pages/APropos'
import Logement from './pages/Logement';
import Navigation from './components/Navigation';
import Error404 from './pages/Error404';
import {Route, Switch} from 'react-router-dom';

function App() {

  return (
    <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/APropos" component={APropos} />
          <Route path="/Logement/:id" component={Logement}/>
          <Route path="*" component={Error404} />
        </Switch>
    </div>
  );
}

export default App;
