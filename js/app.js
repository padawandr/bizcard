const email = document.querySelector('#email')
const tooltip = document.querySelector('.tooltip')

email.addEventListener('click', (e) => {
  e.preventDefault()
  navigator.clipboard.writeText(email.title)
    .then(show())
})

function show() {
  tooltip.classList.add('active')
  setTimeout(() => {
    tooltip.classList.remove('active')
  }, 3000)
}
