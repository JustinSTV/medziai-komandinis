import CardModal from "./modules/CardModal.js";


// garso grojimas

document.querySelector("#playStory").addEventListener("click", function () {
   const audio = document.getElementById("background-audio");
   audio
      .play()
      .then(() => {
         console.log("Playback started");
      })
      .catch((error) => {
         console.log("Playback prevented:", error);
      });
});