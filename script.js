const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passowrdConfirmation = document.getElementById("password-confirmation");

// Impedir que a página recarrege enquanto faz o submit e impede que perca os dados no input
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passowrdConfirmation.value;
  // Validar usuario
  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(username);
  }
  // Validar email
  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }
  // Validar senha
  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  }
  if (passwordValue.length < 7) {
    setErrorFor(password, "A senha precisa ter no minimo 7 caracteres.");
  } else {
    setSuccessFor(password);
  }
  // Validar confirmação de senha
  if (passwordConfirmationValue === "") {
    setErrorFor(passowrdConfirmation, "A confirmação de senha é obrigatória.");
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passowrdConfirmation, "As senhas não conferem.");
  } else {
    setSuccessFor(passowrdConfirmation);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formcontrol) => {
    return formcontrol.className === "form-control success";
  });
  if (formIsValid) {
    console.log("O formulário está válido!");
    form.submit();
  } else {
    console.log("O formulário não está válido!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;

  const small = formControl.querySelector("small");

  // Adicionar a mensagem de erro!!
  small.innerText = message;

  // Adicionar a classe de error
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  // Adicionar a classe de sucesso!!
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
