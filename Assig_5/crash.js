const car = document.getElementById('car');
const obstacle = document.getElementById('obstacle');

let carX = car.offsetLeft;
let carY = car.offsetTop;

obstacle.style.left = Math.random() * window.innerWidth + 'px';
obstacle.style.top = Math.random() * window.innerHeight + 'px';

function moveCar() {
  // Simulate car movement (replace with your controls)
  carX += 5;

  // Check for collision
  if (carX + car.offsetWidth > obstacle.offsetLeft && carX < obstacle.offsetLeft + obstacle.offsetWidth &&
      carY + car.offsetHeight > obstacle.offsetTop && carY < obstacle.offsetTop + obstacle.offsetHeight) {
    alert("Oh No! You Crashed!");
    // Optionally stop the animation or change visuals
  }

  car.style.left = carX + 'px';
  window.requestAnimationFrame(moveCar);
}

window.requestAnimationFrame(moveCar);
