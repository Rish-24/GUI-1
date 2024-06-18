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


$(document).ready(function() {
    $("#MinRowSlider").slider({
        range: "min",
        value: 0,
        min: -50,
        max: 50,
        slide: function(event, ui) {
            $("#MinRow").val(ui.value);
            updateTable(); 
        }
    });
    $("#MaxRowSlider").slider({
        range: "min",
        value: 0,
        min: -50,
        max: 50,
        slide: function(event, ui) {
            $("#MaxRow").val(ui.value);
            updateTable(); 
        }
    });
    $("#MinColSlider").slider({
        range: "min",
        value: 0,
        min: -50,
        max: 50,
        slide: function(event, ui) {
            $("#MinCol").val(ui.value);
            updateTable(); 
        }
    });
    $("#MaxColSlider").slider({
        range: "min",
        value: 0,
        min: -50,
        max: 50,
        slide: function(event, ui) {
            $("#MaxCol").val(ui.value);
            updateTable(); 
        }
    });
    $("#MinRow").val($("#MinRowSlider").slider("value"));
    $("#MaxRow").val($("#MaxRowSlider").slider("value"));
    $("#MinCol").val($("#MinColSlider").slider("value"));
    $("#MaxCol").val($("#MaxColSlider").slider("value"));
});

function updateTable() {
    var minRow = parseInt($("#MinRow").val());
    var maxRow = parseInt($("#MaxRow").val());
    var minCol = parseInt($("#MinCol").val());
    var maxCol = parseInt($("#MaxCol").val());

    if (minRow > maxRow || minCol > maxCol) {
        $("#Table").empty();
    }
    $("#Table").empty();

    var table = $("<table>").addClass("multiplication-table");

    var headerRow = $("<tr>");
    headerRow.append($("<th>")); 
    for (var col = minCol; col <= maxCol; col++) {
        headerRow.append($("<th>").text(col));
    }
    table.append(headerRow);

    for (var row = minRow; row <= maxRow; row++) {
        var tableRow = $("<tr>");
        tableRow.append($("<th>").text(row)); 
        for (var col = minCol; col <= maxCol; col++) {
            var cell = $("<td>").text(row * col);
            tableRow.append(cell);
        }
        table.append(tableRow);
    }
    $("#Table").append(table);
}