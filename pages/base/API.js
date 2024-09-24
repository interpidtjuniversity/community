var call = require("./Request.js");

const APILoginByPhoneNumber = function(body, doSuccess) {
  console.log("请求APILoginByPhoneNumber")
  return call.post(
    '/login/login',
    body,
    doSuccess
  )
}

const APIGetVerifyCode = function(body, doSuccess) {
  console.log("请求APIGetVerifyCode")
  return call.post(
    '/login/verifyCode',
    body,
    doSuccess
  )
}

const APITestLogin = function(doSuccess, doFail) {
  console.log("APITestLogin")
  return call.get(
    '/custom/courseList',
    doSuccess,
    doFail
  )
}

module.exports = {
  APILoginByPhoneNumber,
  APIGetVerifyCode,
  APITestLogin
}