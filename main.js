import confetti from "canvas-confetti";

const myCanvas = document.getElementById("canvas-1");
const launchConfettiButton =
  document.getElementsByClassName("launch-confetti")[0];
// const myConfetti = confetti.create(myCanvas, { resize: true });

// launchConfettiButton.addEventListener("click", () => {
//   myConfetti({
//     particleCount: 100,
//     angle: 45,
//     startVelocity: 20,
//     origin: {
//       x: 0.05,
//       y: 0.7,
//     },
//     scalar: 1,
//   });
// });

// (function fullPageConfetti() {
//   // confetti({
//   //   particleCount: 400,
//   //   angle: 45,
//   //   startVelocity: 20,
//   //   origin: {
//   //     x: 0.5,
//   //     y: 0.5,
//   //   },
//   // });
//   confetti({
//     particleCount: 200,
//     spread: 35,
//     angle: 45,
//     scalar: 0.8,
//     startVelocity: 20,
//     gravity: 0.5,
//     origin: {
//       x: 0.05619654312188168,
//       y: 0.7192982456140351,
//     },
//   });
// })();

const getButtonCoords = (button) => {
  const coords = button.getBoundingClientRect();
  console.log(coords);
  const coordsPercentage = {
    x: coords.x / window.innerWidth,
    y: coords.y / window.innerHeight,
  };

  console.log(coordsPercentage);

  return {
    x: coordsPercentage.x + coords.width / window.innerWidth,
    y: coordsPercentage.y,
  };
};

// console.log("coords that will be used", getButtonCoords(launchConfettiButton));

const addConfettiToButton = (button) => {
  button.addEventListener("click", () => {
    const coords = getButtonCoords(button);
    console.log(button.getBoundingClientRect());
    console.log("Button clicked");
    confetti({
      particleCount: 100,
      angle: 45,
      startVelocity: 15,
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
