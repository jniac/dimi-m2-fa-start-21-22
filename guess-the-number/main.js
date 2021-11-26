
const mysteryNumber = Math.floor(Math.random() * 100) + 1
let blurRadius = 0

const increaseBlur = () => {
  blurRadius = blurRadius + 1.5
  document.body.style.filter = `blur(${blurRadius}px)`
}

const input = document.querySelector('input')
const response = document.querySelector('#response')

input.onchange = () => {
  const value = parseInt(input.value)

  if (isNaN(value) === true) {
    alert(value)
    alert('Saisie invalide, merci de saisir un nombre.')
    return
  }

  if (value < mysteryNumber) {
    response.innerHTML = `Trop petit ! (${value})`
    increaseBlur()
  }
  if (value > mysteryNumber) {
    response.innerHTML = `Trop grand ! (${value})`
    increaseBlur()
  }
  if (value === mysteryNumber) {
    document.body.style.color = 'white'
    document.body.style.backgroundColor = '#e8a81b'
    document.body.style.filter = ''
    response.innerHTML = 'Bravo !!!'
  }
}
