const chilli = document.getElementById('splash-image')
const splash = document.getElementById('splash')
const page = document.getElementById('post-splash')
const members = Array.from(document.getElementsByClassName('member'))

// remove splash image

function splashOut () {
  splash.style.display = 'none'
  page.setAttribute('id', 'post-splash-visible')
}

// set cookies

if (/(^|;)\s*visited=/.test(document.cookie)) {
  console.log(document.cookie)
  if (chilli) {
    splashOut()
  }
} else {
  document.cookie = 'visited=true; max-age=150'
}

// switch between two divs

function reveal (event) {
  const member = event.target
  const front = member.getElementsByClassName('front')[0]
  const back = member.getElementsByClassName('back')[0]
  front.className = 'back'
  back.className = 'front'
}

if (chilli) {
  chilli.addEventListener('click', splashOut)
}

members.forEach(portrait => portrait.addEventListener('mouseenter', reveal))
members.forEach(portrait => portrait.addEventListener('mouseleave', reveal))
