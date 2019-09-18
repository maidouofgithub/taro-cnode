const serviceUrl = 'https://cnodejs.org/api/v1';
const apiList = {
  //主题
  getTopics: `${serviceUrl}/topics`,//主题列表
  getTopic: `${serviceUrl}/topic/`,//主题详情 {id}
  //主题收藏
  postTopicCollectSave: `${serviceUrl}/topic_collect/collect`,//收藏主题 post {accesstoken ,topic_id }
  postTopicCollectCancel: `${serviceUrl}/topic_collect/de_collect`,//收藏主题 post {accesstoken ,topic_id }
  getTopicCollect: `${serviceUrl}/topic_collect/`,//获取用户所收藏的主题
  //用户
  getUserInfo: `${serviceUrl}/user/`,//用户详情，示例：/api/v1/user/alsotang
  accessTokenCheck: `${serviceUrl}/accesstoken`,//验证 accessToken 的正确性
  //消息通知
  getMessageCount: `${serviceUrl}/message/count`,//获取未读消息数
  getMessages: `${serviceUrl}/messages`,//获取已读和未读条数
  postMessageMarkAll: `${serviceUrl}/message/mark_all`,//标记全部已读
  postMessageMark: `${serviceUrl}/message/mark_one`,//标记单个消息为已读
}

export default apiList;
