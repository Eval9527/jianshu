import React, { PureComponent } from "react";
import { connect } from 'react-redux'
import { WriterWrapper, WriterItem } from '../style'

class Writer extends PureComponent {
  render() {
    return (
      <WriterWrapper>
        <div className="title">
          <span>推荐作者</span>
        </div>
        {
          this.props.list.map((item) => {
            return (
              <WriterItem key={item.get("id")}>
                <img src={item.get("imgUrl")} alt=""/>
                <div className="info">
                  <span className="name">{item.get("name")}</span>
                  <span className="desc">写了{item.get("wordsNum")}字 · {item.get("likeNum")}喜欢</span>
                </div>
              </WriterItem>
            )
          })
        }
      </WriterWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'writerList'])
  }
}

export default connect(mapStateToProps, null)(Writer)