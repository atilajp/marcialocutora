
// Navegação simples e acessível. Mantém o projeto sem dependências externas.
document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("[data-current-year]");
  if (year) year.textContent = new Date().getFullYear();
});
