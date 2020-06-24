const { FenceGroup } = require("../models/fence-group")

// components/realm/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    spu: Object
  },

  observers: {
    'spu': function(spu) {
       if(!spu) {
         return 
       }
       const fenceGroup = new FenceGroup(spu)
       fenceGroup.initFences1()
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