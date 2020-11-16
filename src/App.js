import React from 'react';
import Header from "./common/header";
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'
import Write from './pages/write'
import {BrowserRouter , Route} from "react-router-dom";
import {Globalstyle} from "./style";
import {GlobalIconfont} from './statics/iconfont/iconfont'

function App() {
  return (
      <React.Fragment>
        <Globalstyle/>
        <GlobalIconfont/>
        <BrowserRouter>
          <Header/>
          <Route path='/' exact component={Home}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/write' exact component={Write}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
        </BrowserRouter>
      </React.Fragment>
  );
}

export default App;
