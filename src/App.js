import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Notfound from './components/Notfound/Notfound';
import Login from './components/Login/Login'
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Services from './components/Services/Services';
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        
        <Switch>
          <Route path exact="/">
          <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
