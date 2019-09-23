import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { showDrawer } from '../../actions/menu';

@connect((store) => { return { ...store.menu } }, (dispatch) => { return { showDrawer } })

  import { AtNavBar } from 'taro-ui';

import './menu.scss';

export default class Menu extends Component {

  constructor(props) {
    super(props);
    let { title, leftText } = this.state;
    this.setState({ title: props.title || title, leftText: props.leftText || leftText });

  }

  state = {
    color: '#000',//链接文字与图标颜色，不包括标题
    fixed: false,//固定顶部
    title: '首页',//	标题文字
    border: true,//	是否显示下划线(v1.4.0 新增)
    leftIconType: 'chevron-left',//左边图标类型，图标类型请看AtIcon文档
    leftText: '',//左边文字
    rightFirstIconType: 'user', //从右到左，第一个图标类型
    rightSecondIconType: '',//从右到左第二个图标类型
    showleftIcon: false,
    onClickLeftIcon: function(){},
    onClickRgIconSt: function(){},
    onClickRgIconNd: function(){},
  }

  render() {
    let { onClickRgIconNd,onClickRgIconSt,onClickLeftIcon,showleftIcon, title, leftText, border, leftIconType, color, fixed, rightFirstIconType, rightSecondIconType } = this.state;
    let { currentCata } = this.props.currentCata;
    return (
      <View className='topic-list-menu'>
        <AtNavBar
          color={color}
          fixed={fixed}
          title={currentCata ? currentCata.value : ''}
          border={border}
          leftIconType={showleftIcon ? leftIconType : ''}
          leftText={leftText}
          rightFirstIconType={rightFirstIconType}
          rightSecondIconType={rightSecondIconType}
          onClickLeftIcon={onClickLeftIcon}
          onClickRgIconSt={onClickRgIconSt}
          onClickRgIconNd={onClickRgIconNd}
        />

      </View>

    );
  }
}
