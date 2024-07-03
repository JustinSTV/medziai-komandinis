import CardModal from "./modules/cardModal.js";

//?? aprašytas modalas

fetch("trees.json")
  .then((res) => res.json())
  .then((data) => {
    const mainSec = document.querySelector("#mainSec");

    data.forEach((element) => {
      console.log(element);

      const oneCard = document.createElement("div");
      oneCard.classList.add("card");

      const cardName = document.createElement("h1");
      cardName.textContent = element.name;

      const cardModalBtn = document.createElement("button");
      cardModalBtn.textContent = "More Info";

      cardModalBtn.addEventListener("click", () => {
        const modal = new CardModal(element);
        document.body.append(modal);
        modal.showModal();
      });

      oneCard.append(cardName, cardModalBtn);
      mainSec.append(oneCard);
    });
  });

// garso grojimas

function enableSound() {
  const audio = document.getElementById("background-audio");
  audio
    .play()
    .then(() => {
      console.log("Playback started");
    })
    .catch((error) => {
      console.log("Playback prevented:", error);
    });
  document.getElementById("sound-prompt").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("background-audio");
  audio.play().catch((error) => {
    console.log("Autoplay was prevented:", error);
    document.getElementById("sound-prompt").style.display = "block";
  });

  document
    .getElementById("enable-sound-btn")
    .addEventListener("click", enableSound);
});
