// Size of a single snowflake
const flakeSize = 8;

window.addEventListener("DOMContentLoaded", function() {
   let canvas = document.querySelector("canvas");

   drawGround(canvas);
   drawSnowText(canvas);
   drawSnowman(canvas);
   drawSnowflakes(canvas);
});

/* Draws the ground image */
function drawGround(canvas) {
   let context = canvas.getContext("2d");

   // Background with clouds and gradient
   context.createLinearGradient(0, 0, 0, canvas.height);
   context.addColorStop(0, #bbb, );
   context.addColorStop(1, #fff, );
   context.fillStyle = CanvasGradient;
   context.fillRect(0, 0, canvas.width, canvas.height);

   // Ground with grass
   context.fillStyle = "brown";
   context.fillRect(0, canvas.height - 80, canvas.width, canvas.height);
}

/* Draws the snowflakes */
function drawSnowflakes(canvas) {
   for (let c = 0; c < 100; c++) {
      let x = Math.floor(Math.random() * canvas.width);
      let y = Math.floor(Math.random() * canvas.height);
      drawSingleFlake(canvas, x, y);
   }
}

/* Draws the Snow text */
function drawSnowText(canvas) {
   let context = canvas.getContext("2d");
   context.font = "80px Verdana";
   context.textAlign = "center";
   context.textBaseline = "top";
   context.fillStyle = "blue";
   context.fillText("SNOW", canvas.width / 2, 10);
}

/* Draws the snowman body parts */
function drawSnowman(canvas) {
   let bottom = canvas.getContext("2d");
   bottom.beginPath();
   bottom.arc(150, 200, 50, 0, Math.PI * 2, true);
   bottom.fillStyle = "white";
   bottom.fill();

   let middle = canvas.getContext("2d");
   middle.beginPath();
   middle.arc(150, 120, 40, 0, Math.PI * 2, true);
   middle.fillStyle = "white";
   middle.fill();

   let top = canvas.getContext("2d");
   top.beginPath();
   top.arc(150, 60, 25, 0, Math.PI * 2, true);
   top.fillStyle = "white";
   top.fill();
}

/* Draws each snowflake */
function drawSingleFlake(canvas, x, y) {
   let flake = canvas.getContext("2d");
   flake.beginPath();
   flake.moveTo(x,y);
   flake.lineTo(x + flakeSize / 2, y + flakeSize / 2);
   flake.lineTo(x, y + flakeSize);
   flake.lineTo(x - flakeSize / 2, y + flakeSize / 2);
   flake.fillStyle = "#eee";
   flake.fill();
}