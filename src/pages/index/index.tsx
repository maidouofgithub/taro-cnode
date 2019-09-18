import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtGrid } from "taro-ui";

import Menu from '../../components/cnode/menu';

import './index.scss'


export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  state = {
    gridData: [
      {
        image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
        value: 'CNode'
      },
      {
        image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
        value: 'Taro-UI'
      },
    ]
  }

  componentWillMount() {
    console.log('第一次渲染之前执行 且只执行一次');
  }

  componentDidMount() {
    console.log('第一次渲染之后执行 且只执行一次');
  }

  componentWillUnmount() {
    console.log('第一次卸载时执行 且只执行一次');
  }

  componentDidShow() {
    //reactjs 中不存在
    //taro中扩展，支持小程序和H5
    console.log('页面展示时触发');


  }

  componentDidHide() {
    console.log('页面隐藏时触发');
  }

  componentWillUpdate() {
    console.log('state 数据将要更新');
  }

  componentDidUpdate() {
    console.log('state 数据更新过后');
  }

  shouldComponentUpdate(nextProps, nextState) {
    //检查此次setState是否需要进行render调用
    //一般多次setState调用后，提升render性能
    //demo

  }

  test() {
    console.log('父组件传递事件到子组件');
  }

  gridClickHandle(item, index) {
    console.log(index);
    console.log(item);
    switch (item.value) {
      case 'CNode': {
        Taro.navigateTo({ url: '/pages/cnode/index' });
        break;
      }
      case 'Taro-UI': {
        Taro.navigateTo({ url: '/pages/taro-ui/index' });
        break;
      }
      default: {
        Taro.navigateTo({ url: '/pages/cnode/index' });
      }
    }
  }

  render() {
    let { gridData } = this.state;
    return (
      <View className='index'>

        <Menu title='测试' leftText='返回'> </Menu>

        <View className='moudle'>

          <AtGrid
          mode='square'
          hasBorder={true}
          data={gridData}
          onClick={this.gridClickHandle.bind(this)} />

        </View>
      </View>
    )
  }
}
