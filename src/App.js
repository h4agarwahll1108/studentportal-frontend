import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import SignUpComponent from './components/SignUpComponent';
import LoginComponent from './components/LoginComponent';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import FooterComponent from './components/FooterComponent';
import  HeaderComponent  from './components/HeaderComponent';

const App = () => {
  const [, setToken] = useState(localStorage.getItem('token'));

  return (
      <Router>
      <HeaderComponent />
        <Switch>
          <Route path="/signup">
            <SignUpComponent />
          </Route>
          <Route path="/login">
            <LoginComponent setToken={setToken} />
          </Route>
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/" component={Home} />
          <Redirect to="/login" />  
        </Switch>
        <FooterComponent />
      </Router> 
  );
};

export default App;
