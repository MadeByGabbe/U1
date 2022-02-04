"use strict";


/*

We will now add lines to gridMaker() so that it also fills the grid with "numberDivs".

You must solve this in two different ways:
1) Use nested for-loops to do this. Use one for loop for the columns and one for the rows.
2) Use only one for-loop. How many times must it iterate?


VIDEO:  Record a video where you explain the two different ways (see above) of creating the right
        amount of numberDivs. The video should be called loopExplainer

*/

// function gridMaker(gridContainer,R, C) {

//         gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`;
//         gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;
        
//         for (let i = 0; i < R; i++) {

//                 let row = document.createElement("div");
//                 gridContainer.appendChild(row);

//                 for (let i = 0; i < C; i++) {

//                         let columns = document.createElement("div");
//                         gridContainer.appendChild(columns);
        
        
//                 }


//         }



    
//     }

function gridMaker(gridContainer,R, C) {

        gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;
        
        for (let i = 0; i < R * C; i++) {

                let rowcols = document.createElement("div");
                gridContainer.appendChild(rowcols);


        }

    }

document.querySelector("button").addEventListener("click", function () {

        let rows = Number.parseInt(document.getElementById("inputRows").value);
        let cols = Number.parseInt(document.getElementById("inputCols").value);
    
        gridMaker( document.querySelector("#grid"), rows, cols);
})