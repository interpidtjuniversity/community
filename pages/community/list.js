// pages/community/list.js
var call = require('../base/API.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    courses:[
      {
        "id":1,
        "avatar":"https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG",
        "nickname":"相思为谁祭",
        "content":["今天很开心!","今天不开心!"],
        "images":["../../images/avatar.PNG"],
        "location":"1号教学楼",
        "time":"1小时前",
        "like":{
          "count":3,
          "avatars":[
            "https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG",
            "https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG",
            "https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG"
          ]
        },
        "comment":{
          "count":2,
          "comments":[{
            "user":"cr7",
            "content":"没事的!"
          },{
            "user":"leo10",
            "content":"怎么了?"
          }
        ]
        }    
      },
      {
        "id":2,
        "avatar":"https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG",
        "nickname":"相思为谁祭",
        "content":["今天很开心!","今天不开心!"],
        "images":["../../images/avatar.PNG","../../images/avatar.PNG"],
        "location":"1号教学楼",
        "time":"1小时前",
        "like":{
          "count":3,
          "avatars":[
            "https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG",
            "https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG",
            "https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG"
          ]
        },
        "comment":{
          "count":2,
          "comments":[{
            "user":"cr7",
            "content":"没事的!"
          },{
            "user":"leo10",
            "content":"怎么了?"
          }
        ]
        }    
      },
      {
        "avatar":"https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG",
        "nickname":"相思为谁祭",
        "content":["今天很开心!","今天不开心!"],
        "images":["../../images/avatar.PNG","../../images/avatar.PNG","../../images/avatar.PNG"],
        "location":"1号教学楼",
        "time":"1小时前",
        "like":{
          "count":3,
          "avatars":[
            "https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG",
            "https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG",
            "https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG"
          ]
        },
        "comment":{
          "count":2,
          "comments":[{
            "user":"cr7",
            "content":"没事的!"
          },{
            "user":"leo10",
            "content":"怎么了?"
          }
        ]
        }    
      },
      {
        "avatar":"https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG",
        "nickname":"相思为谁祭",
        "content":["今天很开心!","今天不开心!"],
        "images":["../../images/avatar.PNG","../../images/avatar.PNG","../../images/avatar.PNG","../../images/avatar.PNG"],
        "location":"1号教学楼",
        "time":"1小时前",
        "like":{
          "count":3,
          "avatars":[
            "https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG",
            "https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG",
            "https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG"
          ]
        },
        "comment":{
          "count":2,
          "comments":[{
            "user":"cr7",
            "content":"没事的!"
          },{
            "user":"leo10",
            "content":"怎么了?"
          }
        ]
        }    
      },
      {
        "avatar":"https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG",
        "nickname":"相思为谁祭",
        "content":["今天很开心!","今天不开心!"],
        "images":["../../images/avatar.PNG","../../images/avatar.PNG","../../images/avatar.PNG","../../images/avatar.PNG","../../images/avatar.PNG"],
        "location":"1号教学楼",
        "time":"1小时前",
        "like":{
          "count":3,
          "avatars":[
            "https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG",
            "https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG",
            "https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG"
          ]
        },
        "comment":{
          "count":2,
          "comments":[{
            "user":"cr7",
            "content":"没事的!"
          },{
            "user":"leo10",
            "content":"怎么了?"
          }
        ]
        }    
      },
      {
        "avatar":"https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG",
        "nickname":"相思为谁祭",
        "content":["今天很开心!","今天不开心!"],
        "images":["../../images/avatar.PNG","../../images/avatar.PNG","../../images/avatar.PNG","../../images/avatar.PNG","../../images/avatar.PNG","../../images/avatar.PNG"],
        "location":"1号教学楼",
        "time":"1小时前",
        "like":{
          "count":3,
          "avatars":[
            "https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG",
            "https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG",
            "https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG"
          ]
        },
        "comment":{
          "count":2,
          "comments":[{
            "user":"cr7",
            "content":"没事的!"
          },{
            "user":"leo10",
            "content":"怎么了?"
          }
        ]
        }    
      },
      {
        "avatar":"https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG",
        "nickname":"相思为谁祭",
        "content":["今天很开心!","今天不开心!"],
        "images":["../../images/avatar.PNG","../../images/avatar.PNG","../../images/avatar.PNG","../../images/avatar.PNG","../../images/avatar.PNG","../../images/avatar.PNG","../../images/avatar.PNG"],
        "location":"1号教学楼",
        "time":"1小时前",
        "like":{
          "count":3,
          "avatars":[
            "https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG",
            "https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG",
            "https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG"
          ]
        },
        "comment":{
          "count":2,
          "comments":[{
            "user":"cr7",
            "content":"没事的!"
          },{
            "user":"leo10",
            "content":"怎么了?"
          }
        ]
        }    
      },
      {
        "avatar":"https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG",
        "nickname":"相思为谁祭",
        "content":["今天很开心!","今天不开心!"],
        "images":["../../images/avatar.PNG","../../images/avatar.PNG","../../images/avatar.PNG","../../images/avatar.PNG","../../images/avatar.PNG","../../images/avatar.PNG","../../images/avatar.PNG","../../images/avatar.PNG"],
        "location":"1号教学楼",
        "time":"1小时前",
        "like":{
          "count":3,
          "avatars":[
            "https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG",
            "https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG",
            "https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG"
          ]
        },
        "comment":{
          "count":2,
          "comments":[{
            "user":"cr7",
            "content":"没事的!"
          },{
            "user":"leo10",
            "content":"怎么了?"
          }
        ]
        }    
      },
      {
        "avatar":"https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG",
        "nickname":"相思为谁祭",
        "content":["今天很开心!","今天不开心!"],
        "images":["../../images/avatar.PNG","../../images/avatar.PNG","../../images/avatar.PNG","../../images/avatar.PNG","../../images/avatar.PNG","../../images/avatar.PNG","../../images/avatar.PNG","../../images/avatar.PNG","../../images/avatar.PNG"],
        "location":"1号教学楼",
        "time":"1小时前",
        "like":{
          "count":3,
          "avatars":[
            "https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG",
            "https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG",
            "https://3levelimage.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%A4%B4%E5%83%8F.JPG"
          ]
        },
        "comment":{
          "count":2,
          "comments":[{
            "user":"cr7",
            "content":"没事的!"
          },{
            "user":"leo10",
            "content":"怎么了?"
          }
        ]
        }    
      }
    ]
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

  },

  testLogin(e) {
    call.APITestLogin(
      (data) => {
        this.setData({
          recycleList: data
        });
      },
      () => {}
    );
  }
})