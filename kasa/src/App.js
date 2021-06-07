import Homepage from './pages/Homepage';
import APropos from './pages/APropos'
import Logement from './pages/Logement';
import Error404 from './pages/Error404';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css';
import {Route, Switch, Redirect} from 'react-router-dom';

function App() {

  return (
    <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/AdelinDubois_11_20052021/" exact >
            <Redirect to="/" />
          </Route>
          <Route path="/APropos" exact component={APropos} />
          <Route path="/Logement/:id" component={Logement}/>
          <Route path="*" component={Error404} />
        </Switch>
        <Footer />https://github.com/ExvigilareGemini/AdelinDubois_11_20052021.git
    </div>
  );
}

export default App;
