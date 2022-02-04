"use strict";

// Program the complete Averager App here.
// Don't forget to include your CSS-file in the folder

// Include the link to your Github Repository here:
// Link:



// GLOBAL VARIABLES
// None allowed




// FUNCTION DECLARATIONS (in alphabetical order)

function createNumberDiv() {
    let div = document.createElement("div");
    div.innerHTML = Math.floor(Math.random() * 99)
    div.addEventListener("click", function () {
        div.classList.toggle("selected")
    })

    console.log(div);
    return div;

}

console.log(createNumberDiv);

document.querySelector("body").appendChild(createNumberDiv());

function adder_three ( _array ) {
    let sum = 0;
    for ( let i = 0; i < _array.length; i++ ) { 
      sum = sum + _array[i];
    }
    return sum;
  }
  

function averg(_array) {
    let average = adder(_array) / _array.length;
    console.log(average);
    return average
}
  
function gridMaker(gridContainer,R, C) {

    gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;
    
    for (let i = 0; i < R * C; i++) {

            let rowcols = document.createElement("div");
            gridContainer.appendChild(rowcols);


    }

}






// EVENTLISTENERS FOR EXISTING HTML-ELEMENTS




// DIRECT CODE
// Initialise the page directly, no need to wait for user to click first time.

