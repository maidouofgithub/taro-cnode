import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

export default class List extends Component {

  config = {
    navigationBarTitleText: 'component list'
  }

  state = {
    components:[
      {name:'基础组件',icon:'',list:[{name:'icon 图标',url:''},{name:'Button 按钮',url:''},{name:'Fab 浮动按钮',url:''}]},
      {name:'基础组件',icon:'',list:[{name:'icon 图标',url:''},{name:'Button 按钮',url:''},{name:'Fab 浮动按钮',url:''}]},
    ]
  }


  render() {
    var {components}=this.state;
    return (
      <View className='component-list'>
        {components.map(a => { return <Text>{a.name}</Text> })}
      </View>
    );
  }
}
