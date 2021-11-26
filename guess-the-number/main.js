
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
    document.body.style.color = 'red'
    response.innerHTML = `Trop petit ! (${value})`
  }
  if (value > mysteryNumber) {
    document.body.style.color = 'blue'
    response.innerHTML = `Trop grand ! (${value})`
  }
  if (value === mysteryNumber) {
    document.body.style.color = 'white'
    document.body.style.backgroundColor = '#e8a81b'
    response.innerHTML = 'Bravo !!!'
  }
}
