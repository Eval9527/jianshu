import React, {Component} from "react";
import { actionCreators } from './store'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import { Link } from "react-router-dom";

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
    const { focused, list, page, totalPage, mouseIn, handleInputFocus, handleInputBlur, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
    const newList = list.toJS()
    const pageList = []

    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i ++) {
        pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }

    const getListArea = (show, list) => {
      if (show || mouseIn) {
        return (
            <SearchInfo
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
              <SearchInfoTitle>
                热门搜索
                <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                  <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe63f;</i>
                  换一换
                </SearchInfoSwitch>
              </SearchInfoTitle>
              <SearchInfoList>
                {pageList}
              </SearchInfoList>
            </SearchInfo>
        )
      }
      return null
    }


    return (
        <HeaderWrapper>
          <Link to='/'>
            <Logo/>
          </Link>
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
                    onFocus={() => handleInputFocus(list)}
                    onBlur={handleInputBlur}
                />
              </CSSTransition>
              <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe623;</i>
              {getListArea(focused, list)}
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
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      if (list.size === 0) {
        dispatch(actionCreators.getList())
      }
      dispatch(actionCreators.searchFocus())
    },

    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },

    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },

    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },

    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      originAngle = originAngle ? Number(originAngle) : 0

      spin.style.transform = `rotate(${originAngle+360}deg)`

      const newPage = page < totalPage ? page + 1 : 1
      dispatch(actionCreators.changePage(newPage))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
