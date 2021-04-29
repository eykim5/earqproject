
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route} from "react-router-dom";
import Splash from './components/splash';
import { HashRouter } from "react-router-dom";
function App() {
  return(
    <HashRouter>
      <Route path ='/' component={Splash}/>

    </HashRouter>
  );

}

export default App;