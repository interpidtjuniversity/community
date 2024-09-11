var call = require("./Request.js");

const APILoginByPhoneNumber = function(body, doSuccess) {
  console.log("请求")
  return call.post(
    '/login/login',
    body,
    doSuccess
  )
}

const APIGetVerifyCode = function() {

}

module.exports = {
  APILoginByPhoneNumber,
  APIGetVerifyCode
}