// Sounds and animation start on playStory click
// Sounds and animation start on playStory click
document.querySelector("#playStory").addEventListener("click", function () {
  const bcgAudioForest = document.querySelector("#bcgAudioForest");
  const bcgAudioWalking = document.querySelector("#bcgAudioWalking");
  const guyElement = document.querySelector("#guy");
  const squirrelElement = document.querySelector("#squirrel");
  const pineConeElement = document.querySelector("#pineCone");

  // Forest bird chirping start immediately
  bcgAudioForest.play().then(() => {
    // Guy's steps sound starts after a delay
    setTimeout(() => {
      bcgAudioWalking.volume = 1.0; // Set the volume to maximum
      bcgAudioWalking.currentTime = 30; // Start from 30 seconds
      bcgAudioWalking.play().then(() => {
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

  // Start the squirrel's animation when the guy's animation ends
  guyElement.addEventListener("animationend", () => {
    squirrelElement.style.animation = "growSquirrel 2s forwards";
  });

  // Start the pineCone animation when the squirrel's animation ends
  squirrelElement.addEventListener("animationend", () => {
    pineConeElement.style.animation = "throwPineCone 2s forwards";
  });

  // Start the guy's crash animation at 90% of the pineCone's animation duration
  pineConeElement.addEventListener("animationstart", () => {
    setTimeout(() => {
      guyElement.style.animation = "crashGuy 2s forwards";
      console.log("Guy's crash animation started");
    }, 0.7 * 2000); // 70% of 2 seconds (2000ms)
  });
});
