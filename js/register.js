const send = document.querySelector('.sendCode')
const submit = document.querySelector('[type=submit]')
const form = document.querySelector('.register_area form')
const inputs = document.querySelectorAll('input')
const tips = document.querySelectorAll('.register_area span')
const formHtml = document.createElement('form')
const register_area = document.querySelector('.register_area')

let users = localStorage.getItem('users') || []
if (users == []) {
  localStorage.setItem('users', JSON.stringify(users))
}

// sendCode.addEventListener('click', sendCode)


let reg = 0
inputs[0].addEventListener('change', telephoneNumber)

inputs[2].addEventListener('change', password)

inputs[3].addEventListener('change', rePassword)

console.log(submit);

//submit后判断是否表单完整

form.addEventListener('submit', function (e) {
  e.preventDefault()
  telephoneNumber()
  password()
  rePassword()

  //存入本地数据

  if (telephoneNumber() && password() && rePassword()) {
    const obj = {
      userName: `${inputs[0].value}`,
      password: `${inputs[3].value}`
    }
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(users))
    }
    users = JSON.parse(localStorage.getItem('users'))
    localStorage.removeItem('users')
    // console.log(users);

    users.push(obj)

    // console.log(users);
    localStorage.setItem('users', JSON.stringify(users))
    form.reset()
    if (confirm('您需要跳转到主页吗？')) {
      location.href = './index.html'
    }
  }
})

//验证码发送按钮时间限制

send.addEventListener('click', sendCode)


//判断再次输入密码

function rePassword() {
  if (inputs[3].value === inputs[2].value && inputs[3].value !== '') {
    tips[2].innerHTML = '再次输入密码正确'
    tips[2].style.color = 'green'
    return true
  } else {
    tips[2].innerHTML = '密码不一致，请重新输入'
    return false
  }
}

//判断密码是否符合规范

function password() {
  reg = /^[0-9a-zA-Z_-]{6,16}/
  if (reg.test(inputs[2].value)) {
    tips[1].innerHTML = '您的密码符合规范'
    tips[1].style.color = 'green'
    return true
  } else {
    tips[1].innerHTML = '您的密码不符合规范'
    return false
  }
}

//判断手机号码是否符合规范

function telephoneNumber() {
  reg = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
  if (reg.test(inputs[0].value)) {
    tips[0].innerHTML = '您的输入正确'
    tips[0].style.color = 'green'
    return true
  } else {
    tips[0].innerHTML = '手机号码格式不正确，请重新输入'
    return false
  }
}

function sendCode() {
  // console.log(111);

  let time = 6
  let timeID = 0
  send.disabled = true
  timeID = setInterval(function () {
    // console.log(time);
    time--
    send.innerHTML = `${time}后可重新发送`
    if (time === 0) {
      send.disabled = false
      clearInterval(timeID)
      send.innerHTML = `发送短信验证码`
    }
  }, 1000)
}

console.log(register_area);

