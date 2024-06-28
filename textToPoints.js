//Text To Points Script; June, 2024.

function convertLetterToPoints(string, xPos, yPos, gridSize = 3, fontSize = 24, font = "Arial", horAlignment = "LEFT", verAlignment = "TOP") {
  let points = []; //Define an array to store all the points. 

  push(); //Use push & pop to avoid transformations in the main sketch. 

  //Create a white background and fill text with black to identify what pixels contain the text and what pixels are blank. 
  background(255);
  fill(0);

  // Text Declarations
  textAlign(horAlignment, verAlignment);
  textFont(font);
  textSize(fontSize);
  //textLeading(tSize / 1.2); //Optional but can uncomment for adjusting leading in multi-line texts. 
  text(string, xPos, yPos);

  //Load pixels and store x & y coordinates of black pixels in the points array. 
  loadPixels();
  for (let y = 0; y < height; y += gridSize) {
    for (let x = 0; x < width; x += gridSize) {
      let px = get(x, y);
      let r = px[0];
      if (r < 200) {
        points.push(createVector(x, y));
      }
    }
  }
  pop();

  return points; // Return an array of points
}
