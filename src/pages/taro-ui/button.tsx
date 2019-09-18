import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';

import BaseMoule from '../../components/taro/moudle';

export default class TaroButton extends Component {

   config = {
       navigationBarTitleText: 'TaroUI-Button'
  }

  state={}

  componentWillMount () {}
  componentDidMount () {} 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  render() {
    return (
      <View>
        <BaseMoule title='Button'></BaseMoule>
      </View>
    );
  }
} 