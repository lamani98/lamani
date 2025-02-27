document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("load-page-text");
    const phrase = "ACAL ARQ";
    let currentIndex = 0;
  
    // Função para adicionar letra por letra
    function typeLetter() {
      if (currentIndex < phrase.length) {
        textElement.innerHTML += phrase.charAt(currentIndex);
        currentIndex++;
        setTimeout(typeLetter, 400);  // Aguarda 200ms antes de adicionar a próxima letra
      } else {
        setTimeout(() => {
            document.querySelector('.load-page').classList.add('load-page-hidden');
        }, 3000);
      }
    }
  
    // Inicia a digitação da frase
    textElement.style.opacity = 1;
    typeLetter();
  });
  