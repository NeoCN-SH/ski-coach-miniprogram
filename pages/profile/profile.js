Page({
  data: {
    user: null,
    menus: [
      { icon: '📋', label: '我的预约', note: '查看课程与档期' },
      { icon: '💬', label: '咨询记录', note: '与教练的沟通' },
      { icon: '🎫', label: '优惠券', note: '0 张可用' },
      { icon: '🛡️', label: '平台保障', note: '服务规则' },
      { icon: '⚙️', label: '设置', note: '偏好与隐私' }
    ]
  },
  login() {
    this.setData({ user: { nickName: '滑雪爱好者', initials: 'SKI' } })
    wx.showToast({ title: '体验登录成功' })
  },
  menuTap(e) {
    wx.showToast({ title: `${e.currentTarget.dataset.label}待接入`, icon: 'none' })
  },
  applyCoach() {
    wx.showModal({
      title: '教练入驻',
      content: '正式版本将在此收集身份、教学资质、常驻雪场和服务价格。',
      showCancel: false
    })
  }
})
