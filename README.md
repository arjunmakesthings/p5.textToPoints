# Examples of Use
John Mayer's words, inputted as text and outputted as x & y coordinates to make drawing transformations easier.

<img width="795" alt="Screenshot 2024-04-04 at 5 25 35 PM" src="https://github.com/arjunmakesthings/textToPoints/assets/82059571/78abb7ed-0d07-4132-8528-2784ef7455ad">


# How To Use
**Step 1: Add the textToPoints.js file to your program's root folder and include it in the HTML file.**

```
<script src="textToPoints.js"></script>
```

---

**Step 2: Declare an array and run the function with your desired parameters.**

```
lettersToPoints = convertLetterToPoints (string, xPos, yPos, [gridSize], [fontSize], [font], [horAlignment], [verAlignment])
```

The parameters are: 

- string: the text you want to transform.
- gridSize: how far apart should the points be; smaller value = more points, less spaced out & vice-versa (default is 3).
- fontSize: font size, default is 24.
- font: the font you want to use, default is Arial.
- horAlignment: horizontal alignment type, accepts all p5.textAlign modes, default is LEFT.
- verAlignment: bertical alignment type, accepts all p5.textAlign modes, default is TOP.


For example: 

`lettersToPoints = convertLetterToPoints("hello person", 10, height / 2, 3, 85);`

---

**Step 3: Run through the declared array and draw. For example:** 

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



  

