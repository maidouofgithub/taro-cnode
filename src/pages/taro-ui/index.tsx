import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import { AtGrid } from "taro-ui"
import Nav from '../../components/taro/nav';

import { ACCESS_TOKEN } from '../../constants/token';

import './index.scss';

export default class TaroUIDemo extends Component {

  config = {
    navigationBarTitleText: 'TaroUI-Demo'
  }

  state = {
    token: '',
    gridList: [{
      image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
      value: '基础组件',
      url: '/pages/taro-ui/base/button'
    },
    {
      image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
      value: '视图组件'
    },
    {
      image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
      value: '表单组件'
    },
    {
      image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
      value: '操作反馈'
    },
    {
      image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
      value: '导航组件'
    },
    {
      image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
      value: '布局组件'
    },
    {
      image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
      value: '高阶组件'
    },
    {
      image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
      value: 'Canvas',
      url: ''
    }
    ]
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
    console.log(index);
    console.log(item);
    if(item&&item.url)
    {
      Taro.navigateTo({ url: item.url });
    }
  }

  render() {
    let { gridList,token } = this.state;
    return (
      <View className='taro-index'>

        <View className='nav'>
          <Nav title='taro-ui-首页'></Nav>
        </View>


        {/* TODO: 采用childen 渲染*/}

        <View className='components'>
          <AtGrid
            data={gridList}
            hasBorder={true}
            columnNum={3}
            onClick={this.gridClickHandle.bind(this)}
          />
        </View>

      </View>
    );
  }
}
