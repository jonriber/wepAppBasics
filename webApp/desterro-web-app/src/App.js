//importing Bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';

//material-ui
import {MuiThemeProvider} from '@material-ui/core/styles/index';
import {AppBar, Toolbar} from "@material-ui/core";
import {createMuiTheme} from '@material-ui/core/styles';
// import Link from '@material-ui/core/Link';
import green from '@material-ui/core/colors/lightGreen';

import React from 'react';

// react router
import {
  BrowserRouter as 
  Router,
  Route,
  Switch,
  // Link
} from 'react-router-dom';

//importing pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/About';
import AthletesListPage from './pages/AthletesListPage';
import AthleteDetailPage from './pages/AthleteDetail';
import NotFoundPage from './pages/NotFoundPage'

// import NavBar from './NavBar';
import FadeMenu from './components/FadeMenu';
//import Css
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

function App() {
  
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position='static'>
            <Toolbar>
              <FadeMenu/>
            </Toolbar>
          </AppBar>
              <Router>
            <div className="App">
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
        </React.Fragment>
      </MuiThemeProvider>
    );
};

export default App;
