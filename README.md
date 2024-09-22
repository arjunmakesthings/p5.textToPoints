# Examples of Use
John Mayer's words, inputted as text and outputted as x & y coordinates to make drawing transformations easier.

<img width="795" alt="Screenshot 2024-04-04 at 5 25 35 PM" src="https://github.com/arjunmakesthings/textToPoints/assets/82059571/78abb7ed-0d07-4132-8528-2784ef7455ad">


# How To Use
**Step 1: Download the [textToPoints.js](https://github.com/arjunmakesthings/p5.textToPoints/blob/main/textToPoints.js) file, add it to your program folder and include it in the HTML file.**

```
<script src="/textToPoints.js"></script>
```

Alternatively, you can fetch it directly from GitHub via this URL: 

```
<script src="https://cdn.jsdelivr.net/gh/arjunmakesthings/p5.textToPoints/textToPoints.js"></script>
```

---

**Step 2: Declare an empty array in your sketch.js file.**

```
var lettersToPoints = []; 
```

---

**Step 3: Run the script by adding whatever parameters you want. The default are (optional paramters are marked with []).**

```
lettersToPoints = convertLetterToPoints(string, xPos, yPos, [maxWidth], [maxHeight], [gridSize], [fontSize], [font], [horAlignment], [verAlignment])
```

---

The parameters are: 

- string: the text you want to transform.
- xPos: initial x-position of your text.
- yPos: initial y-position of your text.
- maxWidth: maximum width of text area, default is Infinity.
- maxHeight: maximum height of text area, default is Infinity. 
- gridSize: how far apart should the points be; smaller value = more points, less spaced out & vice-versa (default is 3).
- fontSize: font size, default is 24.
- font: the font you want to use, default is Arial.
- horAlignment: horizontal alignment type, accepts all p5.textAlign modes, default is LEFT.
- verAlignment: bertical alignment type, accepts all p5.textAlign modes, default is TOP.


For example (with values): 

`lettersToPoints = convertLetterToPoints("hello person", 10, height / 2, 3, 85);`

---

**Step 4: Now this array stores x & y coordinates. You can run your drawing transformations like this:** 

```
  for (let i = 0; i < lettersToPoints.length; i++) {
    stroke (0);  
    strokeWeight (0.3) 
    fill (150); 
    square(lettersToPoints[i].x, lettersToPoints[i].y+sin(i*frameCount*0.0001)*5, 3);
  }
  ```

The program above produces this: 

https://github.com/arjunmakesthings/textToPoints/assets/82059571/99d6aaca-dca2-48a5-962c-227aabf136ea

---
