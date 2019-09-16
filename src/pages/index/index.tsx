import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

// import Clock from '../../components/clock';
import PropsDemo from '../../components/base/props';

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
    name: 'bob',
    text: 'test',
    title: '父页面传值',
    obj: undefined
  }

  componentWillMount() {
    console.log('第一次渲染之前执行 且只执行一次');
    console.log(`更新数据前${this.state.name}`);
  }

  componentDidMount() {
    console.log('第一次渲染之后执行 且只执行一次');
    this.setState({ name: '张三', text: '李四',obj:{key:[{name:'自立'}]}},()=> {
      console.log(`更新数据后,${this.state.name}`);
    });
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
    if (this.state.name == "张三") {
      return false;
    }
    else {
      return true;
    }
  }

  test(){
    console.log('父组件传递事件到子组件');
  }

  render() {
    let { name, text,title,obj } = this.state;
    return (
      <View className='index'>
        <Text>{name}</Text>
        <View><Text>{text}</Text></View>
        {/* <Clock /> */}
        <PropsDemo title={title} obj={obj} ontest={this.test.bind(this)}></PropsDemo>
      </View>
    )
  }
}
