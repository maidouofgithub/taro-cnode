import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

export default class Clock extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    timerID: 0,
    date: new Date()
  }

  componentDidMount() {
    // this.timerID = setInterval(
    //   () => this.tick(),
    //   1000
    // );
  }

  componentWillUnmount() {
    // clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }


  componentWillReceiveProps(nextProps, nextContext) { }

  componentDidShow() { }
  componentDidHide() { }
  componentDidCatchError() { }
  componentDidNotFound() { }



  render() {
    let { date } = this.state;
    return (
      <View>
        <Text>Hello,Clock</Text>
        <View><Text>now is {date.toLocaleTimeString()}</Text></View>
      </View>
    );
  }
}
