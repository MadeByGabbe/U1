"use strict";


/*

We will continue with our work from 4b.
We need to fix these two things:

First:
gridMaker must be called each time the user clicks on the button (See index.html).


Second:
We now need to make sure that when we call (anropar) gridMaker we must use
the values in #inputRows and #inputColumns as arguments.

*/

function gridMaker(gridContainer,R, C) {

    gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;

}


document.querySelector("button").addEventListener("click", function () {

    let rows = Number.parseInt(document.getElementById("inputRows").value);
    let cols = Number.parseInt(document.getElementById("inputCols").value);

    gridMaker( document.querySelector("#grid"), rows, cols);
})