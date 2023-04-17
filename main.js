import confetti from "canvas-confetti";

const launchConfettiButton =
  document.getElementsByClassName("launch-confetti")[0];

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

addConfettiToButton(launchConfettiButton);

const contentButton = document.getElementsByClassName("content-confetti")[0];

addConfettiToButton(contentButton);
