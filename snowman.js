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

   // Background with gradient
   let gradient = context.createLinearGradient(0, 0, 0, canvas.height);
   gradient.addColorStop(0, "#4f5c79");
   gradient.addColorStop(.75, "#869ac5");
   context.fillStyle = gradient;
   context.fillRect(0, 0, canvas.width, canvas.height);

   // Ground
   context.fillStyle = "brown";
   context.fillRect(0, canvas.height - 80, canvas.width, canvas.height);

   // Clouds
   let clouds = canvas.getContext("2d");
   clouds.fillStyle = "#d3d0d0";

      clouds.beginPath();
      clouds.arc(30, 0, 85, Math.PI, 0,  true);
      clouds.fill();

      clouds.beginPath();
      clouds.arc(150, 0, 45, Math.PI, 0,  true);
      clouds.fill();

      clouds.beginPath();
      clouds.arc(250, 0, 65, Math.PI, 0, true);
      clouds.fill();

   // Grass
   let grass = canvas.getContext("2d");
   grass.strokeStyle = "green";
   grass.lineWidth = 2;
   grass.beginPath();

      // Tuft 1
      grass.moveTo(80, 220);
      grass.lineTo(72, 204);
      grass.moveTo(80, 220);
      grass.lineTo(80, 198);
      grass.moveTo(80, 220);
      grass.lineTo(88, 204);

      // Tuft 2
      grass.moveTo(220, 220);
      grass.lineTo(212, 204);
      grass.moveTo(220, 220);
      grass.lineTo(220, 198);
      grass.moveTo(220, 220);
      grass.lineTo(228, 204);

      grass.stroke();
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

/* Draws the snowman */
function drawSnowman(canvas) {
   // Body
   let body = canvas.getContext("2d");
   body.fillStyle = "white";

      body.beginPath();
      body.arc(150, 200, 50, 0, Math.PI * 2, true);
      body.fill();

      body.beginPath();
      body.arc(150, 120, 40, 0, Math.PI * 2, true);
      body.fill();

      body.beginPath();
      body.arc(150, 60, 25, 0, Math.PI * 2, true);
      body.fill();

   // Face and Arms
   let faceArms = canvas.getContext("2d");
   faceArms.fillStyle = "black";

      // Eyes
      faceArms.fillRect(135, 52, 5, 5);
      faceArms.fillRect(155, 52, 5, 5);

      // Smile
      faceArms.fillRect(139, 64, 5, 5);
      faceArms.fillRect(144, 66, 5, 5);
      faceArms.fillRect(149, 66, 5, 5);
      faceArms.fillRect(154, 64, 5, 5);

      // Arms
      faceArms.strokeStyle = "brown";
      faceArms.lineWidth = 5;
      faceArms.beginPath();
      faceArms.moveTo(120, 118);
      faceArms.lineTo(70, 90);
      faceArms.moveTo(180, 118);
      faceArms.lineTo(230, 90);
      faceArms.stroke();
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