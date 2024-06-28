//Example for textToPoints; June 2024. 

let lettersToPoints; //Declaring a variable to store all the points. 

function setup() {
  createCanvas(500, 500);
  lettersToPoints = convertLetterToPoints("hello person", 10, height / 2, 3, 85);
}

function draw() {
  background(255);
  for (let i = 0; i < lettersToPoints.length; i++) {
    stroke (0);  
    strokeWeight (0.3) 
    fill (150); 
    square(lettersToPoints[i].x, lettersToPoints[i].y+sin(i*frameCount*0.0001)*5, 3);
  }
}