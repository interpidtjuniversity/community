import CustomPage from '../base/CustomPage'
var call = require('../base/API.js')
var store = require('../store.js')

CustomPage({
    data: {
        canIUseGetUserProfile: true,
        isAgree: false,
        formData: {
          phoneNumber: "18817412292",
          verifyCode: "679489",
          loginCode: ""
        },
        rules: [{
            name: 'verifyCode',
            rules: {required: true, message: '验证码必填'},
        }],
        hasUserInfo: false,      // 初始化为 false
        userInfo:{
          avatarUrl:null,
          nickName:null
        }
    },
    onShow() {
      store.clearToken();
    },
    tapProfileButtom(e) {
      wx.getUserProfile({
        desc: '获取头像昵称手机号', 
        success: (res) => {
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        },
        fail: (err) => {
          console.log(err);
        }
      })
      // 获取登陆code
      wx.login({
        success: (res) => {
          this.setData({
            formData:{
              loginCode: res.code
            }
          })
        },
      })

    },

    getVerifyCode(e) {
      call.APIGetVerifyCode(
      {"phoneNumber" : this.data.formData.phoneNumber},
      (res) => {
        console.log(res);
      }
      )
    },

    formInputChange(e) {
        const {field} = e.currentTarget.dataset
        this.setData({
          [`formData.${field}`]: e.detail.value
        })
    },
    bindAgreeChange: function (e) {
        this.setData({
            isAgree: !!e.detail.value.length
        });
    },
    submitForm() {
        this.selectComponent('#form').validate((valid, errors) => {
            if (!valid) {
                const firstError = Object.keys(errors)
                if (firstError.length) {
                    this.setData({
                        error: errors[firstError[0]].message
                    })

                }
            } else {
              wx.switchTab({
                url: '/pages/my/my',
              })

              // call.APILoginByPhoneNumber(this.data.formData, 
              //   (data) => {
              //     if (null !== data["token"]){
              //       store.setToken(data["token"]);
              //       // switchTab
              //       console.log("跳转!")
              //       wx.switchTab({
              //         url: '/pages/my/my',
              //       })
              //     } else {
              //       // 登陆接口没有返回token, 登陆失败
              //       // wx.login, 刷新 js_code(loginCode)
              //       wx.login({
              //         success: (res) => {
              //           this.setData({
              //             formData:{
              //               loginCode: res.code
              //             }
              //           })
              //         },
              //       })
              //     }
              //   }
              // )


            }
        })
    }
});