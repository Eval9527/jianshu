import React, { Component } from "react";
import { connect } from 'react-redux'
import Topic from "./component/Topic";
import List from "./component/List";
import Recommend from "./component/Recommend";
import Writer from "./component/Writer";
import { actionCreators } from './store'

import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from "./style";

class Home extends Component {
   render() {
     return (
       <HomeWrapper>
         <HomeLeft>
           <img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
           <Topic />
           <List />
         </HomeLeft>
         <HomeRight>
           <Recommend />
           <Writer />
         </HomeRight>
       </HomeWrapper>
     )
   }
   componentDidMount() {
    this.props.changeHomeData()
   }
}

const mapDispatch = dispatch => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo()
    dispatch(action)
  }
})

export default connect(null, mapDispatch)(Home)