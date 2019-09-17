import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';
import { AtList, AtListItem } from "taro-ui";

export default class TaroUIDemo extends Component {

   config = {
       navigationBarTitleText: 'TaroUIDemo'
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
        <AtList>
                <AtListItem title='标题文字' onClick={this.handleClick} />
                <AtListItem title='标题文字' arrow='right' />
                <AtListItem title='标题文字' extraText='详细信息' />
                <AtListItem title='禁用状态' disabled extraText='详细信息' />
            </AtList>
      </View>
    );
  }
} 