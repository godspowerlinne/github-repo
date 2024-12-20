# Card Component Explanation

## Overview
This document provides an explanation of the card component designed using HTML and CSS. The card consists of three individual cards that animate when interacted with.

## HTML Structure
The HTML file (`index.html`) contains the following structure:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Pure CSS Card Design</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="stylesheet" href="index.css" />
  </head>
  <body>
    <div class="card general">
      <div class="card one move">Dev</div>
      <div class="card three move">Hello</div>
      <div class="card two move">🔥</div>
    </div>
  </body>
</html>
```

### Explanation of HTML Elements
- **`<div class="card general">`**: This is the main container for the card component. It holds all individual cards and applies general styles.
- **`<div class="card one move">Dev</div>`**: This is the first card, labeled "Dev". It has specific styles applied to it.
- **`<div class="card three move">Hello</div>`**: This is the second card, labeled "Hello".
- **`<div class="card two move">🔥</div>`**: This is the third card, which displays a fire emoji.

## CSS Styles
The CSS file (`index.css`) provides the following styles:

```css
@import url('https://fonts.googleapis.com/css2?family=Concert+One&family=Emilys+Candy&family=Oswald&display=swap');

html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: 'Oswald', sans-serif;
  background-color: rgb(243, 243, 182);
}

.general {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.card {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 100px;
  height: 100px;
  font-size: 1.5em;
  margin: auto;
  border-radius: 10px;
}

.one {
  background: #540D6E;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
}

.two {
  background: #EE4266;
  position: absolute;
  right: 0;
  z-index: 2;
  transform: rotate(-10deg) translate(8px, 8px);
}

.three {
  background: #FFD23F;
  position: absolute;
  left: 0;
  z-index: 1;
  transform: rotate(10deg) translate(-5px, 7px);
}

.move {
  transition: all .5s cubic-bezier(.5, .40, .10, 1);
}
```

### Explanation of CSS Styles
- **Font Import**: The CSS imports fonts from Google Fonts for styling.
- **Body Styles**: Sets the width, height, and background color of the body.
- **General Class**: Centers the card vertically and adds a pointer cursor for interaction.
- **Card Styles**: Defines the layout, size, color, and transition effects for the cards.
- **Individual Card Styles**: Each card has a unique background color and position, with rotation applied to create a layered effect.

## Conclusion
This card component showcases a simple yet effective design using pure CSS for animations and layout. The interaction effects enhance the user experience by providing visual feedback.
