// pages/home/home.js
import { Theme } from '../../model/theme'
import { Banner } from '../../model/banner'
import { Category } from '../../model/category'
import { Activity } from '../../model/activity'
Page({

  /**
   * 页面的初始数据
   */
  // 学到3-8
  data: {
     themeA: null,
     bannerB: null,
     grid: [],
     ActivityD: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    this.initAllData()
  },

  async initAllData() {
    const themeA = await Theme.getHomeLocationA()
    const bannerB = await Banner.getHomeLocationB()
    const grid = await Category.getHomeLocationC()
    const activityD = await Activity.getHomeLocationD()
    this.setData({
      themeA: themeA[0],
      bannerB: bannerB,
      grid: grid,
      activityD: activityD
    })
  }
})