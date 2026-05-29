// ================================
// BOTÃO DE MODO ESCURO
// ================================
const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {
  darkModeBtn.addEventListener("click", () => {
    // Adiciona ou remove a classe dark-mode
    document.body.classList.toggle("dark-mode");
  });
}

// ================================
// MENSAGEM DINÂMICA
// ================================
const mensagemBtn = document.getElementById("mensagemBtn");
const mensagem = document.getElementById("mensagem");

if (mensagemBtn && mensagem) {
  mensagemBtn.addEventListener("click", () => {
    mensagem.textContent =
      "🌱 O futuro sustentável começa com atitudes conscientes no presente!";
    mensagem.style.marginTop = "20px";
    mensagem.style.fontWeight = "bold";
  });
}

// ================================
// VALIDAÇÃO DO FORMULÁRIO
// ================================
const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultadoFormulario");

if (formulario && resultado) {
  formulario.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede recarregar a página

    // Pegando valores dos inputs
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();

    // Validação simples
    if (nome === "" || email === "") {
      resultado.textContent = "⚠️ Preencha todos os campos!";
      resultado.style.color = "red";
    } else {
      resultado.textContent = `✅ Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
      resultado.style.color = "green";

      // Limpa formulário
      formulario.reset();
    }
  });
}

// ================================
// ANIMAÇÃO DOS CARDS AO ROLAR
// ================================
const cards = document.querySelectorAll(".card");

const animarCards = () => {
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 50) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
};

// Inicializa animação
cards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "0.6s";
});

// Evento scroll
window.addEventListener("scroll", animarCards);