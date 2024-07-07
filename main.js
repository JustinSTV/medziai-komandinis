// Sounds and animation start on playStory click
// Sounds and animation start on playStory click
document.querySelector("#playStory").addEventListener("click", function () {
  const bcgAudioForest = document.querySelector("#bcgAudioForest");
  const bcgAudioWalking = document.querySelector("#bcgAudioWalking");
  const guyElement = document.querySelector("#guy");

  // Forest bird chirping start immediately
  bcgAudioForest.play().then(() => {
    console.log("Bird chirping sound started");
    // Guy's steps sound starts after a delay
    setTimeout(() => {
      bcgAudioWalking.volume = 1.0; // Set the volume to maximum
      bcgAudioWalking.currentTime = 30; // Start from 30 seconds
      bcgAudioWalking.play().then(() => {
        console.log("Guy's walking sound started");
        // Stop the walking sound after 5 seconds
        setTimeout(() => {
          bcgAudioWalking.pause();
          console.log("Guy's walking sound stopped");

          // Start the guy's animation after the walking sound stops
          guyElement.style.animation = "growGuy 3s forwards";
        }, 5000);
      });
    }, 5000);
  });
});
