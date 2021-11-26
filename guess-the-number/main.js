
const mysteryNumber = 50

const input = document.querySelector('input')

input.onchange = () => {
  const value = parseInt(input.value)
  
  if (isNaN(value) === true) {
    alert(value)
    alert('Saisie invalide, merci de saisir un nombre.')
    return
  }

  if (value < mysteryNumber) {
    document.body.style.backgroundColor = 'red'
  }
  if (value > mysteryNumber) {
    document.body.style.backgroundColor = 'blue'
  }
}
