// ----- Tema Claro/Escuro -----
const toggleThemeBtn = document.getElementById("toggle-theme");

window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleThemeBtn.textContent = "☀️ Tema Claro";
  } else {
    toggleThemeBtn.textContent = "🌙 Tema Escuro";
  }
});

toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleThemeBtn.textContent = "☀️ Tema Claro";
  } else {
    localStorage.setItem("theme", "light");
    toggleThemeBtn.textContent = "🌙 Tema Escuro";
  }
});

// ----- Validação do Formulário -----
function validarFormulario(event) {
  event.preventDefault(); 

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (nome === "" || email === "" || mensagem === "") {
    alert("⚠️ Preencha todos os campos!");
    return false;
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    alert("⚠️ Digite um e-mail válido!");
    return false;
  }

  alert("✅ Mensagem enviada com sucesso!");
  document.getElementById("contato-form").reset();
}

// ----- Scroll suave -----
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute("href"));
    if(destino){
      destino.scrollIntoView({ behavior: "smooth" });
    }
  });
});
