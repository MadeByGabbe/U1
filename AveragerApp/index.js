"use strict";

// Program the complete Averager App here.
// Don't forget to include your CSS-file in the folder

// Include the link to your Github Repository here:
// Link:



// GLOBAL VARIABLES
// None allowed




// FUNCTION DECLARATIONS (in alphabetical order)
  
function adder( _array ) {
    let sum = 0;
    for ( let i = 0; i < _array.length; i++ ) { 
      sum = sum + _array[i];
    }
    return sum;
}

function averg(_array) {
    let average = adder(_array) / _array.length;
    average = roundString(average, 1)
    console.log(average);
    return average
}


function createNumberDiv() {
    let div = document.createElement("div");
    div.innerHTML = Math.floor(Math.random() * 100);

    div.addEventListener("click", function(){

        div.classList.toggle("selected");
        updateResults("selected");

    })

    return div;
}

function gridMaker(gridContainer,R, C) {

    gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;

    gridContainer.innerHTML = "";

    for (let r = 0; r < R; r++) {

      for (let c = 0; c < C; c++) {
            gridContainer.appendChild( createNumberDiv() );
    }
    }
}

function getArrayOfSelectedNumbers (className) {


    let arrayElements = Array.from(document.querySelectorAll("." + className));
    let arrayNumbers = [];
  
    for (let i = 0; i < arrayElements.length; i++) {
      let numberAsString = arrayElements[i].innerHTML;
      let number = parseInt(numberAsString);
      arrayNumbers.push(number);
    }
    console.log(arrayNumbers);
    return arrayNumbers;
  
}

function roundString(numberWithManyDecimals, decimals) {
    // From: https://stackoverflow.com/a/12698296/2027283
    let rounded = Math.pow(10, decimals);
    return (Math.round(numberWithManyDecimals * rounded) / rounded).toFixed(decimals);

}

function updateResults(className) {

    let SelectedNumbers = getArrayOfSelectedNumbers(className)

    document.querySelector("#results > div:nth-child(1) > span").innerHTML = " " + SelectedNumbers.join(", ")
    document.querySelector("#results > div:nth-child(2) > span").innerHTML = " " + SelectedNumbers.length
    document.querySelector("#results > div:nth-child(3) > span").innerHTML = " " + adder(SelectedNumbers)
    document.querySelector("#results > div:nth-child(4) > span").innerHTML = " " + averg(SelectedNumbers)
    

}
// EVENTLISTENERS FOR EXISTING HTML-ELEMENTS

document.querySelector("button").addEventListener("click", function () {

    let rows = Number.parseInt(document.getElementById("inputRows").value);
    let cols = Number.parseInt(document.getElementById("inputCols").value);

    gridMaker(document.querySelector("#grid"), rows, cols);
    


})


// DIRECT CODE
// Initialise the page directly, no need to wait for user to click first time.
    
gridMaker(
    document.querySelector("#grid"),
    Number.parseInt(document.getElementById("inputRows").value),
    Number.parseInt(document.getElementById("inputCols").value));