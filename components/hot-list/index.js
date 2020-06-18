// components/hot-list/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     banner: Object
  },
  
  observers: {
     'banner': function(banner) {
        if(!banner) {
          return 
        }
        if(banner.items.length === 0) {
          return 
        }
        const Left = banner.items.find(item => item.name === 'left')
        const RightTop = banner.items.find(item => item.name === 'right-top')
        const RightBottom = banner.items.find(item => item.name === 'right-bottom')
        this.setData({
           Left,
           RightTop,
           RightBottom
        })
    }
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
