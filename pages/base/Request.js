var host = "http://127.0.0.1:8080"

var store = require('../store.js')

export function post(_url, postData, doSuccess) {
  var req = {
    url: host + _url,
    header: {
      "content-type": "application/json;charset=UTF-8"
    },
    data: postData,
    method: "POST",
    success: function(res) {
      doSuccess(res.data);
    },
    fail: (err) => {
      console.log(err);
    }
  };
  if (undefined !== store.getToken() && null !== store.getToken() && "" !== store.getToken()) {
    req.header["Authorization"] = store.getToken();
  }
  wx.request(req);
} 

export function get(url, doSuccess, doFail) {
  var req = {
    url: host + url,
    header: {
      "content-type": "application/json;charset=UTF-8"
    },
    method: "GET",
    success: function(res) {
      doSuccess(res.data);
    },
    fail: function() {
      doFail();
    }
  };
  if (undefined !== store.getToken() && null !== store.getToken() && ""!== store.getToken()) {
    req.header["Authorization"] = store.getToken();
  }
  wx.request(req);
}