# Dark-Light Mode Component Explanation

## Overview
This document provides an explanation of the dark-light mode component implemented in JavaScript. The component allows users to toggle between dark and light themes for the webpage.

## JavaScript Code Breakdown
The JavaScript file (`index.js`) contains the following code:

```javascript
$( ".inner-switch" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
      $( "body" ).removeClass( "dark" );
      $( ".inner-switch" ).text( "OFF" );
    } else {
      $( "body" ).addClass( "dark" );
      $( ".inner-switch" ).text( "ON" );
    }
});
```

### Explanation of the Code
- **Event Listener**: The code sets up a click event listener on the element with the class `inner-switch`.
- **Toggle Class**: When the switch is clicked, it checks if the body has the class `dark`.
  - If it does, the class is removed, switching to light mode, and the text of the switch is updated to "OFF".
  - If it does not, the class `dark` is added, switching to dark mode, and the text of the switch is updated to "ON".

## Conclusion
This dark-light mode component provides a simple and effective way to toggle between themes using jQuery. The functionality enhances user experience by allowing users to choose their preferred viewing mode.
