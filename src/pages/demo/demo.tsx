import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import PropsDemo from '../../components/base/props';

export default class Demo extends Component {

  config = {
    navigationBarTitleText: 'Demo'
  }

  state = {
    name: 'bob',
    text: 'test',
    title: '父页面传值',
    obj: undefined
  }

  componentWillMount() { }
  componentDidMount() { }
  componentWillReceiveProps(nextProps, nextContext) { }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }
  componentDidCatchError() { }
  componentDidNotFound() { }

  test() {
    console.log('父组件传递事件到子组件');
  }

  clickHandle() {
    Taro.redirectTo({ url: '/pages/index/navigate' });
  }


  render() {
    let { name, text, title, obj } = this.state;
    return (
      <View>
        <View>  <Text>Demo</Text></View>
        <View className='Props'>

          <PropsDemo title={title} obj={obj} ontest={this.test.bind(this)}></PropsDemo>
        </View>

        <View className='navigate'>
          <View>
            <Text>跳转测试</Text>
            <Button onClick={this.clickHandle.bind(this)}>跳转navigateTo</Button>
          </View>
        </View>
      </View>
    );
  }
}
