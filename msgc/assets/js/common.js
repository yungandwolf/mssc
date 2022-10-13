// common.js
// 存放一些共用的js方法

// 模仿jQuery，把一些常用的方法 封装到一个对象里
// JQ的函数名是$
// 随便去一个名字
class Q {
  // 静态方法： static,直接用Q.search触发
  static search(name) {
    // 考虑到URL中可能出现的中文编码问题，需要转码
    const search = decodeURI(location.search)

    const params = new URLSearchParams(search)
    return params.get(name)
    // return new URLSearchParams(location.search).get(name)
  }
}
