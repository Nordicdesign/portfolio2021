import './styles/styles.scss'

const scrollCn = (quantity) => {
  let scrollTop = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0)
  let size = 1 - ((scrollTop / quantity) || 0)
  if(size <= .2) size = .2
  document.querySelector('h1').setAttribute('style', `transform: scale(${size})` )
}

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('scroll', () => scrollCn(650))
})
