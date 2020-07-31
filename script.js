const chilli = document.getElementById('splash-image')
const splash = document.getElementById('splash')
const page = document.getElementById('post-splash')
const members = Array.from(document.getElementsByClassName('member'))
const logo = document.getElementById('homepage')


function splashOut () {
  splash.style.display = 'none'
  page.setAttribute('id', 'post-splash-visible')
  logo.setAttribute('xlink:href', '#')
}

function reveal (event) {
  let member = event.target
  let front = member.getElementsByClassName('front')[0]
  let back = member.getElementsByClassName('back')[0]
  front.className = 'back'
  back.className = 'front'
}

function homePage () {
  window.location.href = 'about.html'
}

if (chilli) {
  chilli.addEventListener('click', splashOut)
}

members.forEach(portrait => portrait.addEventListener('mouseenter', reveal))
members.forEach(portrait => portrait.addEventListener('mouseleave', reveal))

logo.addEventListener('click', homePage)