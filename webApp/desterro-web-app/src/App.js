import React from 'react';
import {
  BrowserRouter as 
  Router,
  Route,
  Switch,
} from 'react-router-dom';

//importing pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/About';
import AthletesListPage from './pages/AthletesListPage';
import AthleteDetailPage from './pages/AthleteDetail';
import NotFoundPage from './pages/NotFoundPage'
import NavBar from './NavBar';

//import Css
import './App.css';

//importing Bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
    return (
      <Router>
        <div className="App">
          <NavBar/>
            <div id="page-body">
              <Switch>
                <Route path = '/' component = {HomePage} exact/>
                <Route path ='/about' component = {AboutPage} />
                <Route path ='/athletes' component = {AthletesListPage} />
                <Route path ='/athlete-detail/:name' component = {AthleteDetailPage} />
                <Route component={NotFoundPage}/> 
              </Switch>
              
            </div>
          </div>  
      </Router>
      
    );
};

export default App;
