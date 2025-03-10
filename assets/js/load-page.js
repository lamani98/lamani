document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu");
    const textElement = document.getElementById("load-page-text");
    const phrase = "STUDIO ACAL";
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
            menu.style.display = 'flex';
        }, 2000);
      }
    }
  
    // Inicia a digitação da frase
    textElement.style.opacity = 1;
    typeLetter();
  });