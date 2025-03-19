(function () {
  const floor = document.querySelector('.floor')
  const littleNav = document.querySelectorAll('.littlenav')
  const youqu = document.querySelector('.youququ')
  const guess = document.querySelector('.guess')
  const account = document.querySelector('.shortcutleft')

  floor.addEventListener('click', floorTo)

  function floorTo(e) {
    // console.log(e.target);
    e.preventDefault()
    if (e.target.tagName === 'A') {
      if (e.target.dataset.id === '0') document.documentElement.scrollTop = 0
      if (e.target.dataset.id === '1') document.documentElement.scrollTop = guess.offsetTop
      if (e.target.dataset.id === '2') document.documentElement.scrollTop = youqu.offsetTop
      if (e.target.dataset.id === '3') document.documentElement.scrollTop = littleNav[0].offsetTop
      if (e.target.dataset.id === '4') document.documentElement.scrollTop = littleNav[1].offsetTop
      if (e.target.dataset.id === '5') document.documentElement.scrollTop = littleNav[2].offsetTop
    }
  }

  window.addEventListener('scroll', function () {
    floor.style.opacity = document.documentElement.scrollTop >= 200 ? 1 : 0
  })

  function render() {
    if (JSON.parse(localStorage.getItem('users')) !== null) {
      let users = JSON.parse(localStorage.getItem('users'))
      console.log(users);

      account.innerHTML = `品优购欢迎您！用户 <h4 style='display:inline-block'>${users[users.length - 1].userName}</h4>
      <a href="#" data-id='1'>退出登录</a>`
    } else {
      account.innerHTML = `品优购欢迎您！请登录 <span><a href="register.html" data-id='0'>免费注册</a></span>`
    }
  }

  account.addEventListener('click', function (e) {
    if (e.target.dataset.id === '1') {
      if (confirm('您确定要退出登录吗？')) {
        localStorage.removeItem('users')
        render()
      }
    }
  })

  render()


})()


