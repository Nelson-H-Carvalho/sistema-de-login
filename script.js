// Cadastro
const cadastroForm = document.getElementById("cadastroForm");

if (cadastroForm) {
  cadastroForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioExiste = usuarios.find(u => u.email === email);

    if (usuarioExiste) {
      alert("Usuário já cadastrado!");
      return;
    }

    usuarios.push({ nome, email, senha });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Cadastro realizado com sucesso!");
    window.location.href = "index.html";
  });
}

// Login
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const senha = document.getElementById("loginSenha").value;

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuario = usuarios.find(u => u.email === email && u.senha === senha);

    if (!usuario) {
      alert("Email ou senha inválidos!");
      return;
    }

    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
    window.location.href = "dashboard.html";
  });
}

// Dashboard
const userInfo = document.getElementById("userInfo");

if (userInfo) {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

  if (!usuario) {
    window.location.href = "index.html";
  } else {
    userInfo.innerText = `Olá, ${usuario.nome}`;
  }
}

// Logout
function logout() {
  localStorage.removeItem("usuarioLogado");
  window.location.href = "index.html";
}
