//var host = "http://127.0.0.1:8080"
var host = "https://hekouquxx.com"

export function post(_url, postData, doSuccess) {
  wx.request({
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
  })
} 

export function get(url, doSuccess, doFail) {
  wx.request({
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
  })
}