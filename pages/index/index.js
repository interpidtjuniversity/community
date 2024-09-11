import CustomPage from '../base/CustomPage'
var call = require('../base/API')

CustomPage({
    data: {
        canIUseGetUserProfile: true,
        isAgree: false,
        formData: {
          phoneNumber: "",
          verifyCode: "",
          loginCode: ""
        },
        rules: [{
            name: 'verifyCode',
            rules: {required: true, message: '验证码必填'},
        }],
        hasUserInfo: true,      // 初始化为 false
        userInfo:{
          avatarUrl:null,
          nickName:null
        }
    },
    onShow() {

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
              console.log(this.data.formData);
              call.APILoginByPhoneNumber(this.data.formData, 
                (data) => {
                  console.log("从服务器接收到数据:" + data);
                }
              )
            }
        })
    }
});