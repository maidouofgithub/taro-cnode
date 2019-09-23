const MENU_STATE = {
  cataData: [
    { key: '全部', value: 'all' },
    { key: '精华', value: 'good' },
    { key: '分享', value: 'share' },
    { key: '问答', value: 'ask' },
    { key: '招聘', value: 'job' },
    { key: '测试', value: 'dev' }
  ],
  currentCata: { key: 'all', value: '全部' },
  showDrawer: false
}

export default function menu(preState = MENU_STATE, action) {
  switch (action.type) {
    case 'ShowDrawer':
      {
        return {...preState,showDrawer:true};
      }
      case 'HideDrawer':{
        return {...preState,showDrawer:false};
      }
      case 'ChangeCata':{
        return {...preState,currentCata:action.currentCata};
      }
    default: {
      return {...preState};
    }
  }
}
