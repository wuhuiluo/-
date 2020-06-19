// pages/home/home.js
import { Theme } from '../../model/theme'
import { Banner } from '../../model/banner'
import { Category } from '../../model/category'
import { Activity } from '../../model/activity'
import { SpuPaging } from '../../model/spu_paging'
Page({

  /**
   * 页面的初始数据
   */
  data: {
     themeA: null,
     themeE: null,
     themeF: null,
     themeH: null,
     bannerB: null,
     bannerG: null,
     grid: [],
     ActivityD: null,
     spuPaging: null,
     loadingType: 'loading'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    this.initAllData()
    this.initBottomSpuList()
  },
  
  async initBottomSpuList() {
    const paging = await SpuPaging.getLatestPaging()
    this.data.spuPaging = paging
    const data = await paging.getMoreData()
    if(!data) {
      return
    }
    wx.lin.renderWaterFlow(data.items)
    // console.log(data)
  },
  
  async onReachBottom() {
      const data = await this.data.spuPaging.getMoreData() 
      if(!data) {
        return 
      }
      wx.lin.renderWaterFlow(data.items)
      if(!data.moreData) {
        this.setData({
          loadingType: 'end'
        })
      }
  },

  async initAllData() {
    const theme = new Theme()
    await theme.getThemes()
    const themeA = await theme.getHomeLocationA()
    const themeE = await theme.getHomeLocationE()
    const themeF = await theme.getHomeLocationF()
    const themeH = await theme.getHomeLocationH()
    // console.log(themeF)
    let themeESpu = []
    if(themeE.online) {
       const data = await Theme.getHomeLocationESpu()
       if(data) {
          themeESpu = data.spu_list.slice(0,8)
       }
    }
    // console.log(themeESpu)
    const bannerB = await Banner.getHomeLocationB()
    const bannerG = await Banner.getHomeLocationG()
    // console.log(bannerG)
    const grid = await Category.getHomeLocationC()
    const activityD = await Activity.getHomeLocationD()
    this.setData({
      themeA: themeA,
      themeE: themeE,
      themeF: themeF,
      themeESpu,
      bannerB: bannerB,
      bannerG: bannerG,
      grid: grid,
      activityD: activityD,
      themeH: themeH
    })
    // console.log(this.data.themeE)
  }
})
