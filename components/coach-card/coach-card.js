Component({
  properties: {
    coach: { type: Object, value: {} },
    favorite: { type: Boolean, value: false }
  },
  methods: {
    openDetail() {
      wx.navigateTo({ url: `/pages/coach-detail/coach-detail?id=${this.data.coach.id}` })
    },
    toggleFavorite() {
      this.triggerEvent('favorite', { id: this.data.coach.id })
    }
  }
})
