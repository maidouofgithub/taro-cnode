import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import { ACCESS_TOKEN } from '../../constants/token';

import './index.scss';

export default class TaroUIDemo extends Component {

  config = {
    navigationBarTitleText: 'TaroUIDemo'
  }

  state = {}

  componentWillMount() { }
  componentDidMount() { }
  componentWillReceiveProps(nextProps, nextContext) { }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }
  componentDidCatchError() { }
  componentDidNotFound() { }



  render() {
    let token = ACCESS_TOKEN;
    return (
      <View className='taro-index'>
        <View className='token-moudle'>
          token:
          <Text className='token'>{token}</Text>
        </View>



      </View>
    );
  }
}
