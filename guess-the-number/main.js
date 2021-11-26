
const mysteryNumber = Math.floor(Math.random() * 100) + 1

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
    document.body.style.backgroundColor = 'red'
    response.innerHTML = 'Trop petit !'
  }
  if (value > mysteryNumber) {
    document.body.style.backgroundColor = 'blue'
    response.innerHTML = 'Trop grand !'
  }
  if (value === mysteryNumber) {
    document.body.style.backgroundColor = 'white'
    response.innerHTML = 'Bravo !!!'
  }
}
