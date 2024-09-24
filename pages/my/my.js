// pages/my/my.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    rules:[],
    gradeArray:['一年级','二年级','三年级','四年级','五年级','六年级'],
    typeArray:['A类社团', 'B类社团','C类社团'],
    formData:{
      "studentName":'',
      "studentIDCard":'',
      "studentPhase":'',
      "studentGrade":''
    },


    bindPopup: false, // 信息绑定工具显示和隐藏
    isGrade: false,
    isPhase: false,
    gradeIndex:0,
    phaseIndex:0,

    tools: [
      { name: "学生绑定", icon: "../../images/wechat_avatar.PNG" }
      // 添加更多工具项
    ]
  },

  openBindPopup(e) {
    this.setData({
      bindPopup: true
    });
  },
  
  closeBindPopup(e) {
    this.setData({
      bindPopup: false
    });
  },

  phasePickerChange(e) {
    this.setData({
      'formData.studentPhase': this.data.typeArray[e.detail.value],
      isPhase: true,
      phaseIndex: e.detail.value
    })
  },

  gradePickerChange(e) {
    this.setData({
      'formData.studentGrade': this.data.gradeArray[e.detail.value],
      isGrade: true,
      gradeIndex:e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})