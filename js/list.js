(function () {
  const listCard = document.querySelector('div.mainList ul')
  const data = [{
    href: '#',
    imgSrc: './upload/iphone.png',
    title: '商品列表采用flex弹性布局，能根据视口调整列表',
    nowPrice: '6088',
    pastPrice: '6988'
  },
  {
    href: '#',
    imgSrc: './upload/iphone.png',
    title: 'Javascript实现的对象调用，对象添加相应数据即可自动添加商品',
    nowPrice: '6088',
    pastPrice: '6988'
  },
  {
    href: '#',
    imgSrc: './upload/iphone.png',
    title: 'Apple苹果iPhone 6s Plus（A1699）32G 金色 移动联通电信4G手机',
    nowPrice: '6088',
    pastPrice: '6988'
  },
  {
    href: '#',
    imgSrc: './upload/iphone.png',
    title: 'Apple苹果iPhone 6s Plus（A1699）32G 金色 移动联通电信4G手机',
    nowPrice: '6088',
    pastPrice: '6988'
  },
  {
    href: '#',
    imgSrc: './upload/iphone.png',
    title: 'Apple苹果iPhone 6s Plus（A1699）32G 金色 移动联通电信4G手机',
    nowPrice: '6088',
    pastPrice: '6988'
  },
  {
    href: '#',
    imgSrc: './upload/iphone.png',
    title: 'Apple苹果iPhone 6s Plus（A1699）32G 金色 移动联通电信4G手机',
    nowPrice: '6088',
    pastPrice: '6988'
  },
  {
    href: '#',
    imgSrc: './upload/iphone.png',
    title: 'Apple苹果iPhone 6s Plus（A1699）32G 金色 移动联通电信4G手机',
    nowPrice: '6088',
    pastPrice: '6988'
  },
  {
    href: '#',
    imgSrc: './upload/iphone.png',
    title: 'Apple苹果iPhone 6s Plus（A1699）32G 金色 移动联通电信4G手机',
    nowPrice: '6088',
    pastPrice: '6988'
  },
  {
    href: '#',
    imgSrc: './upload/iphone.png',
    title: 'Apple苹果iPhone 6s Plus（A1699）32G 金色 移动联通电信4G手机',
    nowPrice: '6088',
    pastPrice: '6988'
  },
  {
    href: '#',
    imgSrc: './upload/iphone.png',
    title: 'Apple苹果iPhone 6s Plus（A1699）32G 金色 移动联通电信4G手机',
    nowPrice: '6088',
    pastPrice: '6988'
  },
  {
    href: '#',
    imgSrc: './upload/iphone.png',
    title: 'Apple苹果iPhone 6s Plus（A1699）32G 金色 移动联通电信4G手机',
    nowPrice: '6088',
    pastPrice: '6988'
  }
  ]

  for (let i = 0; i < data.length; i++) {
    const li = document.createElement('li')
    listCard.appendChild(li)
    li.innerHTML = `
                <a href=${data[i].href}>
                    <div class="mainList_top">
                        <img src=${data[i].imgSrc} alt="">
                        <p>${data[i].title}</p>
                        <br>
                        <span class="icon">￥</span>
                        <span class="nowPrice">${data[i].nowPrice}</span>
                        <span class="pastPrice">￥${data[i].pastPrice}</span>
                        <div class="bar">
                            <div class="bar_in"></div>
                        </div>
                    </div>
                    <div class="mainList_down">
                        <button>立即抢购</button>
                    </div>
                </a>`
  }
})()