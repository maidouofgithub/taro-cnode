import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';

import { AtNavBar } from 'taro-ui';

import './menu.scss';

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.setState({title:props.title,leftText:props.leftText});
  }

  state = {
    title: '首页',
    leftText: '<返回'
  }

  render() {
    let {title,leftText} = this.state;
    return (
      <View className='topic-list-menu'>
        <AtNavBar
          color='#000'
          title={title}
          leftText={leftText}
          rightFirstIconType='user'
        />

      </View>

    );
  }
}
