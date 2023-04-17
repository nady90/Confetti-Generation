import confetti from "canvas-confetti";

/**
 * UI Buttons
 */
const launchConfettiButton =
  document.getElementsByClassName("launch-confetti")[0];
const contentButton = document.getElementsByClassName("content-confetti")[0];

// A function that gets the coordinates of the right corner of the button
const getButtonCoords = (button) => {
  const coords = button.getBoundingClientRect();
  console.log(coords);
  const coordsPercentage = {
    x: coords.x / window.innerWidth,
    y: coords.y / window.innerHeight,
  };

  return {
    x: coordsPercentage.x + coords.width / window.innerWidth,
    y: coordsPercentage.y,
  };
};

// A function that adds the confetti to the button when it is clicked
const addConfettiToButton = (button) => {
  button.addEventListener("click", () => {
    const coords = getButtonCoords(button);
    confetti({
      particleCount: 100,
      angle: 55,

      startVelocity: 15,
      spread: 30,
      origin: {
        x: coords.x,
        y: coords.y,
      },
      scalar: 1,
    });
  });
};

// Calling the functions for each button
addConfettiToButton(launchConfettiButton);
addConfettiToButton(contentButton);
