document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu");
    const textElement = document.getElementById("load-page-text");
    const phrase = "PÁGINA EM CONSTRUÇÃO";
    let currentIndex = 0;
  
    // Função para adicionar letra por letra
    function typeLetter() {
      if (currentIndex < phrase.length) {
        textElement.innerHTML += phrase.charAt(currentIndex);
        currentIndex++;
        setTimeout(typeLetter, 400);  // Aguarda 200ms antes de adicionar a próxima letra
      } else {
        setTimeout(() => {
          window.location.href = "../index.html";
        }, 2000);
      }
    }
  
    // Inicia a digitação da frase
    textElement.style.opacity = 1;
    typeLetter();
  });
  
