
const mysteryNumber = Math.floor(Math.random() * 100) + 1
let blurRadius = 0

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
    document.body.style.color = 'red'
    response.innerHTML = `Trop petit ! (${value})`
    blurRadius = blurRadius + 1
    document.body.style.filter = `blur(${blurRadius}px)`
  }
  if (value > mysteryNumber) {
    document.body.style.color = 'blue'
    response.innerHTML = `Trop grand ! (${value})`
    blurRadius = blurRadius + 1
    document.body.style.filter = `blur(${blurRadius}px)`
  }
  if (value === mysteryNumber) {
    document.body.style.color = 'white'
    document.body.style.backgroundColor = '#e8a81b'
    response.innerHTML = 'Bravo !!!'
  }
}
