const send = document.querySelector('.sendCode')
const submit = document.querySelector('[type=submit]')
const form = document.querySelector('.register_area form')
const inputs = document.querySelectorAll('input')
const tips = document.querySelectorAll('.register_area span')
// const formHtml = document.createElement('form')
// const register_area = document.querySelector('.register_area')

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
    users = JSON.parse(localStorage.getItem('users'))
    localStorage.removeItem('users')
    // console.log(users);

    users.push(obj)

    // console.log(users);
    localStorage.setItem('users', JSON.stringify(users))
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
  let time = 6
  send.style.disabled = true
  setInterval(function () {
    time--
    send.value = `${time}后可重新发送`
    if (time = 0) {
      send.style.disabled = false
    }
  }, 1000)
}

// register_area.innerHTML = `<form action="submit">
//                 <ul>
//                     <div>
//                         <li>
//                             <label for="">手机号：</label>
//                             <input type="text" name="" id="" autocomplete="off" placeholder="请输入您的手机号码">
//                             <span></span>
//                         </li>
//                         <li style="position: relative;">
//                             <label for="">短信验证码：</label>
//                             <input type="text" name="" id="" autocomplete="off">
//                             <button class="sendCode" type="button">发送短信验证码</button>
//                         </li>
//                         <li>
//                             <label for="">登陆密码：</label>
//                             <input type="text" name="" id="" autocomplete="off" placeholder="请输入6-16位密码">
//                             <span></span>
//                         </li>
//                         <li class="safe">
//                             <div style="display: inline-block;">安全程度</ style="display: inline-block;">
//                                 <em style="background-color: #de1111;">弱</em>
//                                 <em style="background-color: #40b83f;">中</em>
//                                 <em style="background-color: #f79100;">强</em>
//                         </li>
//                         <li><label for="">确认密码：</label>
//                             <input type="text" name="" id="" autocomplete="off" placeholder="请再次输入密码">
//                             <span></span>
//                         </li>
//                         <li style="margin-left: 90px;">
//                             <input type="checkbox" name="checkbox" id="" style="width: 15px; height: 15px;">
//                             <div style="display: inline-block;">同意协议并注册</div>
//                             <a href="#" style="color: #cb323b;">《知果果用户协议》</a>
//                         </li>
//                     </div>
//                 </ul>
//                 <button type="submit">完成注册</button>
//             </form>`