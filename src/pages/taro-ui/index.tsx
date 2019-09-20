import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import { AtGrid } from "taro-ui"
import Nav from '../../components/taro/nav';

import { ACCESS_TOKEN } from '../../constants/token';
import {Taro_UI} from '../../constants/taroui';

import './index.scss';

export default class TaroUIDemo extends Component {



  config = {
    navigationBarTitleText: 'Taro UI'
  }

  state = {
    token: '',
    components:[]
  }

  componentWillMount() {
    this.setState({token:ACCESS_TOKEN},()=>{
      console.info(this.state.token);
    });
  }
  componentDidMount() {

  }
  componentWillReceiveProps(nextProps, nextContext) { }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }
  componentDidCatchError() { }
  componentDidNotFound() { }

  gridClickHandle(item, index) {
    // console.log(index);
    // console.log(item);
    if(item&&item.type)
    {
      Taro.navigateTo({ url: '/pages/taro-ui/list?id='+item.type});
    }
  }

  render() {
    let {components, token } = this.state;
    return (
      <View className='taro-index'>

        <View className='nav'>
          <Nav title='Taro UI'></Nav>
        </View>

        <View className='components'>

        </View>

      </View>
    );
  }
}
