const emailInput = document.querySelector('#emailInput')
const emailCheck = document.querySelector('#emailCheck')
const emailResult = document.querySelector('.emailResult')

const regExp = /\w+@gmail\.com/gi

emailCheck.onclick = () => {
    if (regExp.test(emailInput.value)){
        emailResult.innerHTML = 'OK'
        emailResult.style.color = 'green'
        emailInput.value = ''
    }else {
        emailResult.innerHTML = 'Not OK'
        emailResult.style.color = 'red'
        emailInput.value = ''
    }
}

const smallBlock = document.querySelector('.small-block')


const move = (position) => {
  smallBlock.style.left = `${position}px`
  if (position < 450) {
    move(position + 1)
  }
}

move(0)