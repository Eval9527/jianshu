import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: "社会热点",
    imgUrl: "https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
  }, {
    id: 2,
    title: "手绘",
    imgUrl: "https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
  }],
  articleList: [{
    id: 1,
    title: "做抖音心得",
    desc: "第一次拿稿费，是今年的三月。 那个时候，距离我在简书上写文章，至少也有一年了。 现在有一年半，大概也有二三十万字的废话。 哪怕是十月初注册了自己...",
    imgUrl: "https://upload-images.jianshu.io/upload_images/17251666-4c1462a94312c6c7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
  }, {
    id: 2,
    title: "做抖音心得",
    desc: "第一次拿稿费，是今年的三月。 那个时候，距离我在简书上写文章，至少也有一年了。 现在有一年半，大概也有二三十万字的废话。 哪怕是十月初注册了自己...",
    imgUrl: "https://upload-images.jianshu.io/upload_images/17251666-4c1462a94312c6c7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
  }]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
