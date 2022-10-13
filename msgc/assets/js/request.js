// request.js
// 存放网络请求相关的代码


// 专门封装发请求的函数

class Req {
  static baseURL = 'https://serverms.xin88.top/'

  //仿造$.get(地址，回调函数)
  // Req.get('video?page=1',data={})
  static get(url,callback){
    $.get(Req.baseURL+url,callback)
  }
}