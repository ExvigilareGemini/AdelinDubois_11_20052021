import Homepage from './Homepage';
import APropos from './APropos';
import Logement from './Logement';
import Navigation from './Navigation';
import Error404 from './Error404';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/APropos" component={APropos} />
          <Route path="/" component={Error404} />
        </Switch>
    </div>
  );
}

export default App;
