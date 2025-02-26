const textoOriginal = "ACAL ARQ";
const elementoTexto = document.getElementById("navbar-title");
let index = 0;
let removendo = false;

function animarTexto() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        if (!removendo) {
            if (index < textoOriginal.length) {
                elementoTexto.textContent += textoOriginal[index];
                index++;
                setTimeout(animarTexto, 400); // Tempo entre cada letra
            } else {
                setTimeout(() => {
                    removendo = true;
                    animarTexto();
                }, 2000); // Espera 1 segundo antes de começar a apagar
            }
        } else {
            if (index > 0) {
                elementoTexto.textContent = textoOriginal.substring(0, index - 1);
                index--;
                setTimeout(animarTexto, 400);
            } else {
                removendo = false;
                setTimeout(animarTexto, 1000); // Pequena pausa antes de reiniciar
            }
        }
    }
}

// Iniciar animação ao carregar a página
window.onload = animarTexto;