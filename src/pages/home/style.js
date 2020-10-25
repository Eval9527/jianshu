import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  height: 300px;
`

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img {
    width: 100%;
    height: 240px;
  }
`

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
`

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  margin-bottom: 10px;
  padding-right: 10px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  &:first-child {
    border-top: 1px solid #dcdcdc;
  }
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`

export const WriterWrapper = styled.div`
  width: 278px;
  border-radius: 3px;
  .title {
    span {
      font-size: 14px;
      color: #969696;
    }
  }
`

export const WriterItem = styled.div`
  display: flex;
  height: 48px;
  margin-top: 20px;
  img {
    width: 48px;
    height: 48px;
    border: 1px solid #ddd;
    border-radius: 50%;
  }
  .info {
    margin-left: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .name {
      color: #333;
      font-size: 14px;
    }
    .desc {
      color: #969696;
      font-size: 12px;
    }
  }
`
