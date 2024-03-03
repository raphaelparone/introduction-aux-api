let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche le comportement par défaut de soumission du formulaire

  // Sélection des éléments pour afficher les messages d'erreur
  let errorContainer = document.querySelector(".message-error");
  let errorList = document.querySelector(".message-error ul");

  // Réinitialisation des messages d'erreur et retrait de la classe "visible" pour cacher le conteneur d'erreurs
  errorList.innerHTML = "";
  errorContainer.classList.remove("visible");

  // Vérification de l'email
  let email = document.querySelector("#email");
  if (email.value === "") {
    // Affichage d'un message d'erreur si l'email est vide
    errorContainer.classList.add("visible");
    email.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Email must be valid";
    errorList.appendChild(err);
  } else {
    email.classList.add("success");
  }

  // Vérification du pseudo
  let pseudo = document.querySelector("#pseudo");
  if (pseudo.value.length < 6) {
    // Affichage d'un message d'erreur si le pseudo est trop court
    errorContainer.classList.add("visible");
    pseudo.classList.remove("success");

    let err = document.createElement("li");
    err.innerText =
      "Password needs to have at least one uppercase letter, one lowercase letter and one special number";
    errorList.appendChild(err);
  } else {
    pseudo.classList.add("success");
  }

  // Vérification du mot de passe
  let passCheck = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
  );
  let password = document.querySelector("#password");
  if (password.value.length < 10 || passCheck.test(password.value) === false) {
    // Affichage d'un message d'erreur si le mot de passe ne respecte pas les critères requis
    errorContainer.classList.add("visible");
    password.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Password needs to have ";
    errorList.appendChild(err);
  } else {
    password.classList.add("success");
  }

  // Vérification de la confirmation du mot de passe
  let passwordConfirm = document.querySelector("#password2");
  if (password.value !== "") {
    if (password.value !== passwordConfirm.value) {
      // Affichage d'un message d'erreur si la confirmation du mot de passe ne correspond pas au mot de passe
      errorContainer.classList.add("visible");
      passwordConfirm.classList.remove("success");

      let err = document.createElement("li");
      err.innerText = "Passwords need to be the same";
      errorList.appendChild(err);
    } else {
      passwordConfirm.classList.add("success");
    }
  }

  // Sélection du conteneur pour afficher le message de succès
  let successContainer = document.querySelector(".message-success");
  successContainer.classList.remove("visible");

  // Affichage du message de succès si tous les champs sont valides
  if (
    email.classList.contains("success") &&
    pseudo.classList.contains("success") &&
    password.classList.contains("success") &&
    passwordConfirm.classList.contains("success")
  ) {
    successContainer.classList.add("visible");
  }
});
