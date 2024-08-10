p5.prototype.convertLetterToPoints = function(string, xPos, yPos, gridSize = 3, fontSize = 24, font = "Arial", horAlignment = "LEFT", verAlignment = "TOP") {
    let points = [];

    this.push();
    this.background(255);
    this.fill(0);

    this.textAlign(horAlignment, verAlignment);
    this.textFont(font);
    this.textSize(fontSize);
    this.text(string, xPos, yPos);

    this.loadPixels();
    for (let y = 0; y < this.height; y += gridSize) {
        for (let x = 0; x < this.width; x += gridSize) {
            let px = this.get(x, y);
            if (px[0] < 200) {
                points.push(this.createVector(x, y));
            }
        }
    }
    this.pop();

    return points;
};
