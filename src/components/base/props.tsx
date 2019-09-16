import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';

export default class PropsDemo extends Component {

   config = {
       navigationBarTitleText: ''
  }

  state={
    title: 'Props测试',

  }

  componentWillMount () {}
  componentDidMount () {}
  componentWillReceiveProps (nextProps,nextContext) {
    //父页面触发子组件事件
    //任何属性变化都会触发，所以要判断值变化
    console.log(`props组件属性发生了变化：${nextProps.title}`);

  }
  componentWillUnmount () {}
  componentDidShow () {}
  componentDidHide () {}
  componentDidCatchError () {}
  componentDidNotFound () {}

  childTest(){
    this.props.ontest();
  }

  render() {
    let {title,obj} = this.props;
    return (
      <View>
        <Text>{title}</Text>
        {/* <View><Text>{obj.key[0].name}</Text></View> */}
        <View ><Button onClick={this.childTest.bind(this)}>调用父组件事件测试</Button></View>
      </View>
    );
  }
}
PropsDemo.defaultProps={
  obj:{key:[{name:'test'}]}
}
