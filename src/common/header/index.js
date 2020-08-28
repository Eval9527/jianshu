import React, {Component} from "react";
import { actionCreators } from './store'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
} from "./style";

class Header extends Component {

  render() {
    const { focused, handleInputFocus, handleInputBlur } = this.props

    const getListArea = (show) => {
      if (show) {
        return (
            <SearchInfo>
              <SearchInfoTitle>
                热门搜索
                <SearchInfoSwitch>换一换</SearchInfoSwitch>
              </SearchInfoTitle>
              <SearchInfoList>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
              </SearchInfoList>
            </SearchInfo>
        )
      }
      return null
    }


    return (
        <HeaderWrapper>
          <Logo/>
          <Nav>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载App</NavItem>
            <NavItem className='right'>登陆</NavItem>
            <NavItem className='right'>
              <i className="iconfont">&#xe636;</i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition
                  in={focused}
                  timeout={200}
                  className='slide'
              >
                <NavSearch
                    className={focused ? 'focused' : ''}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                />
              </CSSTransition>
              <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe623;</i>
              {getListArea(focused)}
            </SearchWrapper>

          </Nav>
          <Addition>
            <Button className='writing'>
              <i className="iconfont">&#xe708;</i>写文章
            </Button>
            <Button className='reg'>注册</Button>
          </Addition>
        </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus())
    },

    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
