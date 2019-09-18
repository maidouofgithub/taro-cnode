import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import { AtButton, AtNavBar } from "taro-ui";

import '../../components/taro/moudle.scss';


export default class BaseMoule extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    title: '',
    homeRouter: '../',
  }

  componentWillMount() {
    let params = this.props;
    this.setState({ title: params.title });
  }
  componentDidMount() { }
  componentWillReceiveProps(nextProps, nextContext) { }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }
  componentDidCatchError() { }
  componentDidNotFound() { }


  render() {
    let { title } = this.state;
    return (

      <View className='base-moudle'>
        {/* <View className='title'>{title}</View> */}

        <AtNavBar
        // onClickRgIconSt={this.handleClick}
        // onClickRgIconNd={this.handleClick}
        // onClickLeftIcon={this.handleClick}
        color='#000'
        leftText='返回'
        title = {title}
        rightFirstIconType='bullet-list'
      >
        <View>Taro UI</View>
      </AtNavBar>

        <View className='button'>
          <AtButton type='primary' size='normal'>返回</AtButton>
        </View>
      </View>

    );
  }
}
