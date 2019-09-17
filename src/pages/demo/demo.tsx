import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { AtButton } from 'taro-ui';

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

  navigate() {
    Taro.redirectTo({ url: '/pages/base/navigate' });
  }
 
  navigateWithParameter() {
    Taro.redirectTo({ url: '/pages/base/navigate?name=张三&title=test' });
  }

  goToTaroUI()
  {
    Taro.redirectTo({ url: '/pages/taro-ui/index' });
  }

  render() {
    let { name, text, title, obj } = this.state;
    return (
      <View>
        <View> 
           <Text>Demo</Text>
        </View>

        <View>
          <AtButton type='primary' size='small' loading circle='true' onClick={this.goToTaroUI.bind(this)}>taro-ui</AtButton>
        </View>

        <View className='Props'> 
          <PropsDemo title={title} obj={obj} ontest={this.test.bind(this)}></PropsDemo>
        </View>

        <View className='navigate'>
          <View>
            <Text>简单跳转测试</Text>
            <Button onClick={this.navigate.bind(this)}>简单跳转测试</Button>
          </View>
          <View>
            <Text>带参跳转测试</Text>
            <Button onClick={this.navigateWithParameter.bind(this)}>带参跳转测试</Button>
          </View>
        </View> 

      </View>
    );
  }
}
