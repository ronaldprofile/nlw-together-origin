// open and close menu mobile
const iconsToggle = document.querySelectorAll('.toggle')
const nav = document.querySelector('#header nav')

iconsToggle.forEach(element => {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
})

// links of menu mobile
const allLinks = document.querySelectorAll('#header nav ul li a')

allLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
})

// swiper js (section testimonials) slider
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,

  pagination: {
    el: '.swiper-pagination'
  },

  mouseWheel: true,
  keyboard: true,

  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// scroll reveal (animation on elements)
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .find-me,
  footer .brand, footer .social`,
  { interval: 100 }
)

// add shadow on header when scroll on
const header = document.querySelector('#header')
const headerHeight = header.offsetHeight

function addShadowOnHeaderWhenScroll() {
  window.scrollY >= headerHeight
    ? header.classList.add('scroll')
    : header.classList.remove('scroll')
}

// button back to top
const buttonBackToTop = document.querySelector('.back-to-top')

function BackToTop() {
  window.scrollY >= 600
    ? buttonBackToTop.classList.add('show')
    : buttonBackToTop.classList.remove('show')
}

// add active link of current section
const sections = document.querySelectorAll('main section[id]')

function addActiveLinkCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  sections.forEach(section => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    // checkpoints initial and extends
    const checkpointInitial = checkpoint >= sectionTop

    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointInitial && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + '] ')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + '] ')
        .classList.remove('active')
    }
  })
}

window.addEventListener('scroll', () => {
  addShadowOnHeaderWhenScroll()
  BackToTop()
  addActiveLinkCurrentSection()
})
