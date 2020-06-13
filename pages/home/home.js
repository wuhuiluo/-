// pages/home/home.js
import { Theme } from '../../model/theme'
import { Banner } from '../../model/banner'
import { Category } from '../../model/category'
import { Activity } from '../../model/activity'
Page({

  /**
   * 页面的初始数据
   */
  data: {
     themeA: null,
     themeE: null,
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
    const theme = new Theme()
    await theme.getThemes()
    const themeA = await theme.getHomeLocationA()
    const themeE = await theme.getHomeLocationE()
    let themeESpu = []
    if(themeE.online) {
       const data = await Theme.getHomeLocationESpu()
       if(data) {
          themeESpu = data.spu_list.slice(0,8)
       }
    }
    console.log(themeESpu)
    const bannerB = await Banner.getHomeLocationB()
    const grid = await Category.getHomeLocationC()
    const activityD = await Activity.getHomeLocationD()
    this.setData({
      themeA: themeA,
      themeE: themeE,
      themeESpu,
      bannerB: bannerB,
      grid: grid,
      activityD: activityD
    })
    console.log(this.data.themeE)
  }
})
