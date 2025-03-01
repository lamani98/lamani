document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu");
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
            menu.style.display = 'flex';
        }, 3000);
      }
    }
  
    // Inicia a digitação da frase
    textElement.style.opacity = 1;
    typeLetter();
  });
  
// Aba de Projetos
let timer;

if (window.matchMedia("(max-width: 768px)").matches) {
  function checkVisibility() {
      const img_academia = document.getElementById("projetos-imagem-academia");
      const mensagem_academia = document.getElementById("projetos-mensagem-academia");
      const rect = img_academia.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
      
      if (isVisible) {
        if (!timer) {
          timer = setTimeout(() => {
            img_academia.style.opacity = "0.4";
            mensagem_academia.style.opacity = "1";
          }, 1500);
        }
      } else {
        clearTimeout(timer);
        timer = null;
        img_academia.style.opacity = "1";
        mensagem_academia.style.opacity = "0";
      }

      const img_residencial = document.getElementById("projetos-imagem-residencial");
      const mensagem_residencial = document.getElementById("projetos-mensagem-residencial");
      const rect_residencial = img_residencial.getBoundingClientRect();
      const isVisible_residencial = rect_residencial.top >= 0 && rect_residencial.bottom <= window.innerHeight;
      
      if (isVisible_residencial) {
        if (!timer) {
          timer = setTimeout(() => {
            img_residencial.style.opacity = "0.4";
            mensagem_residencial.style.opacity = "1";
          }, 1500);
        }
      } else {
        clearTimeout(timer);
        timer = null;
        img_residencial.style.opacity = "1";
        mensagem_residencial.style.opacity = "0";
      }

      const img_comercial = document.getElementById("projetos-imagem-comercial");
      const mensagem_comercial = document.getElementById("projetos-mensagem-comercial");
      const rect_comercial = img_comercial.getBoundingClientRect();
      const isVisible_comercial = rect_comercial.top >= 0 && rect_comercial.bottom <= window.innerHeight;
      
      if (isVisible_comercial) {
        if (!timer) {
          timer = setTimeout(() => {
            img_comercial.style.opacity = "0.4";
            mensagem_comercial.style.opacity = "1";
          }, 1500);
        }
      } else {
        clearTimeout(timer);
        timer = null;
        img_comercial.style.opacity = "1";
        mensagem_comercial.style.opacity = "0";
      }
  }

  window.addEventListener("scroll", checkVisibility);
  window.addEventListener("load", checkVisibility);
}