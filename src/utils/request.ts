import Taro from '@tarojs/taro'
import apiList from '../constants/api';

export function getJson(url, data = {}) {
  return Taro.request({ url: url, data: data, method: 'GET' }).catch((message: any) => {
    console.log(`get request happend error,reson:${JSON.stringify(message)}`);
  });
}

export function postJson(url, data = {}) {
  return Taro.request({ url: url, data: data, method: 'POST' }).catch((message: any) => {
    console.log(`post request happend error,reson:${JSON.stringify(message)}`);
  });
}

// page Number 页数
// tab String 主题分类。目前有 ask share job good
// limit Number 每一页的主题数量
// mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
export async function getTopics(page: number = 1, tab: string = "ask", limit: number = 10, mdrender: boolean = false) {
  let ret = await getJson(apiList.getTopics, { page, tab, limit, mdrender }).catch(message => {
    console.log(`send request happend error,reson:${JSON.stringify(message)}`);
  });
  return ret;
}
