$(function(){
  function getData(page){
    Req.get(`mall?page=${page}`,data=>{
      // console.log(data);
      $('.list').html(
        data.data.map(item=>{
          return `
          <div class="list-item">
          <img
            src="/assets/img/mall/${item.pic}"
            alt=""
          />
          <div>
            <a href="">${item.name}</a>
            <div>
              <span>￥${item.price}</span>
              <span>月售${item.sale_count}</span>
            </div>
          </div>
        </div>
          `
        })
      )
  
      const {page,pageCount} = data
    let pager = ''
    let start =Math.max(page-2,1) 
    let end=Math.min(start+4,pageCount)
     start=Math.max(end-4,1)


    for(let i =start;i<=end;i++){
      pager+=`<button class="page ${page==i?'active':''}">${i}</button>`
    }
    $('.pager').html(`<button class="prev ${page==1?'hide':''}">上一页</button>
    ${pager}
    <button class="next ${page==pageCount?'hide':''}">下一页</button>`)
  
    })
  }
  // 初始化
  getData(1)

  $('.pager').on('click','button.page',function(){
    const page = $(this).text()
    // console.log(page)
    getData(page)
  })

  // 下一页
  $('.pager').on('click','button.next',function(){
    const page = $('.pager>.active').text()
    getData(page - -1)
  })
 
    // 下一页
    $('.pager').on('click','button.prev',function(){
      const page = $('.pager>.active').text()
      getData(page -1)
    })


})

