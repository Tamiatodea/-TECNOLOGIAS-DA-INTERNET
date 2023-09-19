function RealizarOperacao(operador) {
  var numero1 = parseInt(document.getElementById('numero1').value);
  var numero2 = parseInt(document.getElementById('numero2').value);
  var operador = document.getElementById('operador').value;
  
  
  document.getElementById('expressao').value = numero1 + ' ' + operador + ' ' + numero2;
}


function ComputarResultado() {
  var numero1 = parseInt(document.getElementById('numero1').value);
  var numero2 = parseInt(document.getElementById('numero2').value);
  var operador = document.getElementById('expressao').value.split(' ')[1];
  

  var resultado;
  switch (operador) {
    case '+':
      resultado = numero1 + numero2;
      break;
    case '-':
      resultado = numero1 - numero2;
      break;
    case '*':
      resultado = numero1 * numero2;
      break;
    case '/':
      resultado = numero1 / numero2;
      break;
  }
  debugger;
  console.log(numero1);
  console.log(numero2);
  console.log(resultado);
  

  document.getElementById('resultado').value = resultado;
}
