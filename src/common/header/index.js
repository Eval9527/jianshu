import React, {Component} from "react";
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
} from "./style";

class Header extends Component {
  render() {
    const { focused, handleInputFocus, handleInputBlur } = this.props
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
    focused: state.header.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = {
        type: 'search_focus'
      }
      dispatch(action)
    },

    handleInputBlur() {
      const action = {
        type: 'search_blur'
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
