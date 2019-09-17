import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import {getDate,setDate} from '../../utils/util'; 

export default class NavigateDemo extends Component {

  config= {
    navigationBarTitleText:'跳转测试页面'
  }

  state= {
    name:'',
    title: ''
  }

  componentWillMount() {
    let { name, title } = this.$router.params;
    this.setState({name:name,title:title},()=>{
      console.log(`${name},${title}`);
      getDate();
      setDate();
    }); 
  }

  render() {
    let { name, title } = this.state;
    return (
      <View>
        <View> <Text>跳转测试页</Text></View>

        <View> 
          <Text>获取跳转参数</Text>
          <Text> {name},{title}</Text>
        </View>


      </View>
    );
  }
}
