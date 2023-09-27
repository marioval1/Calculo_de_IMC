export function notANumber(value){//CRIAMOS uma função para validar os valores inseridos nos inputs.
  return isNaN(value) || value == ""
}

export function calculateIMC(weight, height){
  return (weight / ((height / 100) ** 2)).toFixed(2)
}