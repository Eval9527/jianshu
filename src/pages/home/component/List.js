import React, { Component } from "react";
import { connect } from 'react-redux'
import { ListItem, ListInfo, LoadMore } from "../style";
import {actionCreators} from "../store";

class List extends Component {
  render() {
    const {list, page, getMoreList} = this.props

    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <ListItem key={index}>
                <img className="pic" src={item.get("imgUrl")} alt=""/>
                <ListInfo>
                  <h3 className="title">{item.get("title")}</h3>
                  <p className="desc">{item.get("desc")}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
        <LoadMore onClick={() => getMoreList(page)}>更多内容</LoadMore>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage']),
  }
}

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page))
  }
})

export default connect(mapStateToProps, mapDispatch)(List)