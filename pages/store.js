const setToken = function(token) {
  wx.setStorageSync('token', token);
}

const getToken = function() {
  var token = wx.getStorageSync('token');
  return token;
}

const clearToken = function() {
  wx.clearStorageSync('token');
}

module.exports = {
  setToken,
  getToken,
  clearToken
}