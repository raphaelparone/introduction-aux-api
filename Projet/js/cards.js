$(document).ready(function () {
  // Utilisation de la fonction ajax de jQuery pour GET
  $.ajax({
    url: "https://hp-api.lainocs.fr/characters",
    type: "GET",
    success: function (response) {
      // Succès : tri des personnages et sélection des 10 premiers
      const characters = response.sort(() => Math.random() - 0.5).slice(0, 10);

      characters.forEach(function (character) {
        // Carte HTML pour chaque personnage
        const card = `
                    <div class="card">
                        <img src="${character.image}" alt="${character.name}">
                        <h2>${character.name}</h2>
                        <p>Eyes: ${character.eyes}</p>
                        <p>Hairs: ${character.hairs}</p>
                        <p>Birthday: ${new Date(
                          character.birthday
                        ).toLocaleDateString()}</p>
                        <p>Blood: ${character.blood}</p>
                        <p>Wand: ${character.wand}</p>
                        <p>Patronus: ${character.patronus || "None"}</p>
                        <p>House: ${character.house}</p>
                        <p>Role: ${character.role}</p>
                        <p>Actor: ${character.actor}</p>
                    </div>
                `;
        // Ajout de la carte générée au conteneur d'affichage des cartes
        $("#cards-container").append(card);
      });
    },
    error: function (xhr, status, error) {
      // Gestion des erreurs
      console.error("Error:", error);
    },
  });
});
