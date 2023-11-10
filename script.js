function pegartexto() {
  const campotexto = document.querySelector('.nome');
  const valorDigitado = campotexto.value;
  const textoReproduzido = document.getElementById('textoReproduzido');
  const flashElement = document.getElementById('flash');

  if (valorDigitado.trim() === '') {
      // Se o campo de texto estiver vazio, exiba a mensagem de erro
      textoReproduzido.textContent = "Favor, insira seu nome para prosseguir";
      
  } else {
      // Se um nome foi inserido, exiba a mensagem de saudação
      textoReproduzido.textContent = "Olá " + valorDigitado + ", é um prazer ter você aqui";
      
      // Chame a função triggerFlash() somente no 'else'
      triggerFlash();
  }
}

// Função triggerFlash não precisa ser modificada
function triggerFlash() {
  const flashElement = document.getElementById('flash');
  flashElement.style.display = 'block';

  setTimeout(() => {
      flashElement.style.display = 'none';
  }, 300); // Define a duração do flash em milissegundos (0.3 segundos no exemplo)
}
