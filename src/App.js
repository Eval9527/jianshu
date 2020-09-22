import React from 'react';
import Header from "./common/header";
import {BrowserRouter , Route} from "react-router-dom";
import {Globalstyle} from "./style";
import {GlobalIconfont} from './statics/iconfont/iconfont'

function App() {
  return (
      <React.Fragment>
        <Globalstyle/>
        <GlobalIconfont/>
        <Header/>
        <BrowserRouter>
          <Route path='/' exact render={() => <div>Home</div>}></Route>
          <Route path='/detail' exact render={() => <div>detail</div>}></Route>
        </BrowserRouter>
      </React.Fragment>
  );
}

export default App;
