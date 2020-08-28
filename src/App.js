import React from 'react';
import Header from "./common/header";

import {Globalstyle} from "./style";
import {GlobalIconfont} from './statics/iconfont/iconfont'

function App() {
  return (
      <React.Fragment>
        <Globalstyle/>
        <GlobalIconfont/>
        <Header/>
      </React.Fragment>
  );
}

export default App;
