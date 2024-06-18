// Full Name : Rish Dhir
// Assignment 4: JQuery Validation and Slider UI Validation
// Copyright (c) 2024 by Rish Dhir. All rights reserved. May be freely copied or
// excerpted for educational purposes with credit to the author.
// Assingment Description: In assignment we were required to build upon our dynamic multiplacation table by adding in Jquery Valitation and Certain Widgets. In this assignment 
// I added a scrolling slider which adjusts the values of the values that are being entered into the webpage and 

// Links used for help:
// Class Notes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
// https://www.w3schools.com/tags/tag_span.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// https://www.w3schools.com/jsref/prop_node_innertext.asp
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText
// https://www.w3.org/MarkUp/html3/tablecells.html#:~:text=The%20TH%20and%20TD%20elements,used%20for%20table%20data%20cells.
// https://sitepoint.com/ways-jquery-alert/
// https://jqueryui.com/slider/
// https://www.w3schools.com/jquery/jquery_traversing_siblings.asp
// https://api.jquery.com/attr/
// Github IO: https://github.com/Rish-24/GUI-1.git

function StartTable() {
    document.getElementById('MinRowError').innerText = '';
    document.getElementById('MaxRowError').innerText = '';
    document.getElementById('MinColError').innerText = '';
    document.getElementById('MaxColError').innerText = '';
    document.getElementById('Table').innerHTML = ''; 

    var minRow = parseInt(document.getElementById("MinRow").value);
    var maxRow = parseInt(document.getElementById('MaxRow').value);
    var minCol = parseInt(document.getElementById('MinCol').value);
    var maxCol = parseInt(document.getElementById('MaxCol').value);

    console.log(minRow);
    console.log(maxRow);
    console.log(minCol);
    console.log(maxCol);

    var minRow = document.getElementById("MinRow").value;
    var maxRow = document.getElementById('MaxRow').value;
    var minCol = document.getElementById('MinCol').value;
    var maxCol = document.getElementById('MaxCol').value;

    var isValid = true;

    // if (isNaN(minRow) || minRow < -50 || minRow > 50) {
    //     document.getElementById('MinRowError').innerText = 'Invalid input! Please enter a number between -50 and 50.';
    //     isValid = false;
    // }
    // if (isNaN(maxRow) || maxRow < -50 || maxRow > 50) {
    //     document.getElementById('MaxRowError').innerText = 'Invalid input! Please enter a number between -50 and 50.';
    //     isValid = false;
    // }
    // if (isNaN(minCol) || minCol < -50 || minCol > 50) {
    //     document.getElementById('MinColError').innerText = 'Invalid input! Please enter a number between -50 and 50.';
    //     isValid = false;
    // }
    // if (isNaN(maxCol) || maxCol < -50 || maxCol > 50) {
    //     document.getElementById('MaxColError').innerText = 'Invalid input! Please enter a number between -50 and 50.';
    //     isValid = false;
    // }

    if (!isValid) {
        document.getElementById('MinRow').value = '';
        document.getElementById('MaxRow').value = '';
        document.getElementById('MinCol').value = '';
        document.getElementById('MaxCol').value = '';
        return;
    }

    minRow = parseInt(minRow);
    maxRow = parseInt(maxRow);
    minCol = parseInt(minCol);
    maxCol = parseInt(maxCol);

    var MultiTable = "<table>";
    MultiTable += "<tr><th></th>";

    for (var i = 0; i < maxRow - minRow + 1; i++) {
        MultiTable += "<th>";
        MultiTable += Number(minRow) + i;
        MultiTable += "</th>";
    }
    MultiTable += "</tr>";

    for (var i = 0; i < maxCol - minCol + 1; i++) {
        MultiTable += "<tr>";
        for (var j = 0; j <= maxRow - minRow + 1; j++) {
            MultiTable += "<td>";
            if (j != 0) {
                MultiTable += (minCol + i) * (minRow + j - 1);
            } else {
                MultiTable += minCol + i;
            }
            MultiTable += "</td>";
        }
        MultiTable += "</tr>";
    }
    MultiTable += "</table>";
    document.getElementById('Table').innerHTML = MultiTable;
}