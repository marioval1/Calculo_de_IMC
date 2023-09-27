import{ Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calculateIMC, notANumber } from './utils.js'

// variables

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


// 3 maneiras de criar e atribuir função a um evento para evitar que o submit faça o envio. 

//1
/*
form.onsubmit = function(){}
*/

//2
/*
form. onsubmit = () => {}
*/

//3
/*
form.onsubmit = handleSubmit
function handleSubmit(){}
*/

//neste caso vamos utilizar a forma 1

form.onsubmit = function(event){
  event.preventDefault()
  
  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotAtNumber = notANumber(weight) || notANumber(height)//AQUI criamos a constante dentro do form.submit para utilizar a função que criamos por fora para validar os valores dos inputs.

  if(weightOrHeightIsNotAtNumber){
    AlertError.open()
    return;
  }
  
  AlertError.close()

  const result = calculateIMC(weight, height)  
  displayResultMessage(result)
}

function displayResultMessage(result){
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  //modalWrapper.classList.add('open')
  Modal.open()
}

//O evento 'oninput' sempre vai verificar se no meu input (neste caso 'inputWeight' ) esta sendo alterada alguma coisa, então quando oninput verifica que alguma coisa foi alterada ele dispara o evento selecionado.
inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()
