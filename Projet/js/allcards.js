document.addEventListener("DOMContentLoaded", function () {
  // Récupération des éléments HTML
  const houseSelect = document.getElementById("houses");
  const cardsContainer = document.getElementById("cards-container");

  // Changement de sélection de maison
  houseSelect.addEventListener("change", function () {
    const selectedHouse = this.value;

    // Requête  pour récupérer les données des personnages
    fetch("https://hp-api.lainocs.fr/characters")
      .then((response) => response.json())
      .then((data) => {
        const filteredCharacters =
          selectedHouse === "all"
            ? data
            : data.filter((character) => character.house === selectedHouse);
        displayCharacters(filteredCharacters);
      })
      .catch((error) => console.error("Error fetching characters:", error)); // Gestion des erreurs
  });

  // Fonction pour afficher les personnages
  function displayCharacters(characters) {
    cardsContainer.innerHTML = "";

    // Cartes pour chaque personnage
    characters.forEach((character) => {
      const card = document.createElement("div");
      card.classList.add("card");

      // Image du personnage
      const image = document.createElement("img");
      image.src = character.image;
      image.alt = character.name;

      // Nom du personnage
      const name = document.createElement("h2");
      name.textContent = character.name;

      // Maison du personnage
      const house = document.createElement("p");
      house.textContent = `House: ${character.house}`;

      // Rôle du personnage
      const role = document.createElement("p");
      role.textContent = `Role: ${character.role}`;

      // Ajout des éléments à la carte
      card.appendChild(image);
      card.appendChild(name);
      card.appendChild(house);
      card.appendChild(role);

      // Ajout de la carte
      cardsContainer.appendChild(card);
    });
  }

  // Requête fetch initiale pour afficher tous les personnages au chargement de la page
  fetch("https://hp-api.lainocs.fr/characters")
    .then((response) => response.json())
    .then((data) => displayCharacters(data))
    .catch((error) => console.error("Error fetching characters:", error));
});
