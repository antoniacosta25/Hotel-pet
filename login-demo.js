// Login de demonstração: alternância de visibilidade e navegação ao painel.
const loginForm = document.querySelector("#login-form");
const loginFeedback = document.querySelector("#login-feedback");
const passwordInput = document.querySelector("#senha");
const passwordToggle = document.querySelector("#alternar-senha");

// Alterna entre o tipo password e text sem copiar nem salvar o conteúdo.
passwordToggle?.addEventListener("click", () => {
  const shouldReveal = passwordInput.type === "password";
  passwordInput.type = shouldReveal ? "text" : "password";
  passwordToggle.textContent = shouldReveal ? "Ocultar" : "Mostrar";
  passwordToggle.setAttribute("aria-label", shouldReveal ? "Ocultar senha" : "Revelar senha");
  passwordToggle.setAttribute("aria-pressed", String(shouldReveal));
  passwordInput.focus();
});

loginForm?.addEventListener("submit", (event) => {
  // Cancela o envio nativo para não expor campos na URL nem simular backend.
  event.preventDefault();

  if (passwordInput.value.length === 0) {
    loginFeedback.textContent = "Preencha a senha para continuar a demonstração.";
    passwordInput.focus();
    return;
  }

  // Limpa o campo antes de mudar de página; o valor não é guardado.
  passwordInput.value = "";
  window.location.href = "painel.html";
});

