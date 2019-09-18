import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';

import Menu from '../../components/cnode/menu';

export default class Index extends Component {

   config = {
       navigationBarTitleText: 'CNodeIndex'
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
        <Menu></Menu>
      </View>
    );
  }
}
