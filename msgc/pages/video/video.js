$(function () {
  // 请求到指定页数数据，并展示到页面上
  function getData(page) {
    Req.get(`video?page=${page}`, data => {
      console.log(data)
      $('#main>.list').html(
        data.data.map(item => {
          return `
          <div class="list-item">
          <div>
            <img src="./assets/img/video/${item.pic}" alt="" />
            <div>
              <span>${item.views}次播放</span>
              <span>${item.duration}</span>
            </div>
          </div>
          <div>
            <span>${item.title}</span>
          </div>
          `
        })
      )

      const { page, pageCount } = data
      let pager = ''
      // 最小页数1
      let start = Math.max(page - 2, 1)
      // 最大页数：最多不能超出总页数
      let end = Math.min(start + 4, pageCount)
      // 根据最大页数，反算出起始页数
      start=Math.max(end - 4,1)
      for (let i = start; i <= end; i++) {
        // 序号i和当前页相同，则添加激活样式
        pager += `<button class="page ${
          page == i ? 'active' : ''
        }">${i}</button>`
      }
      $('.pager').html(`
      <button class="prev ${page==1?'hide':''}">上一页</button>
      ${pager}
      <button class="next ${page==pageCount?'hide':''}">下一页</button>
      `)
    })
  }

  // 初始化时，触发一次函数，获取第一页数据
  getData(1)

  // 页数是请求后，动态添加的，适合用委托模式绑定事件
  $('.pager').on('click', 'button.page', function () {
    const page = $(this).text()
    console.log('page', page)

    //传入点击的页数按钮上的页数，获取对应的数据
    getData(page)
  })

  // 下一页
  $('.pager').on('click','button.next',function(){
    // 找到当前激活的页数
    const page = $('.pager>.active').text()
    getData(page - -1) //不用+ 规避字符串拼接
  })

  // 上一页
  $('.page').on('click','button.prev',function(){
    const page =$('pager>.active').text()
    getData(page - 1)
  })
})
