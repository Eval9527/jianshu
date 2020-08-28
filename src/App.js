import React from 'react';
import Header from "./common/header";
import store from "./store";
import {Provider} from 'react-redux'
import {Globalstyle} from "./style";
import {GlobalIconfont} from './statics/iconfont/iconfont'

function App() {
  return (
      <Provider store={store}>
        <Globalstyle/>
        <GlobalIconfont/>
        <Header/>
      </Provider>
  );
}

export default App;
