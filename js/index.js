(function () {
  const floor = document.querySelector('.floor')
  const littleNav = document.querySelectorAll('.littlenav')
  const youqu = document.querySelector('.youququ')
  const guess = document.querySelector('.guess')

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
})()