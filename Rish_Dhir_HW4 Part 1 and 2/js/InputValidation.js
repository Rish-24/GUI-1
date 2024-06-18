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
    $('#multiplicationForm').validate({
        rules: {
            MinRow: {
                required: true,
                number: true,
                min: 50,
                max: 50
            },
            MaxRow: {
                required: true,
                number: true,
                min: 50,
                max: 50,
                larger: "MinRow",
                length: "MinRow"
            },
            MinCol: {
                required: true,
                number: true,
                min: 50,
                max: 50
            },
            MaxCol: {
                required: true,
                number: true,
                min: 50,
                max: 50,
                larger: "MinCol",
                length: "MinCol"
            }
        },
        messages: {
            MinRow: {
                required: "Please enter the minimum row value.",
                number: "Please enter a valid number.",
                min: "Value cannot be less than -50 Enter A Value Greater then -50!",
                max: "Vakue cannot be greater then 50 Enter A value less then 50!"
            },
            MaxRow: {
                required: "Please enter the maximum row value.",
                number: "Please enter a valid number.",
                min: "Value cannot be less than -50 Enter A Value Greater then -50!",
                max: "Vakue cannot be greater then 50 Enter A value less then 50!",
                larger: "End Number must larger or equal to start value",
                length: "The Range cannot exceed 100 from start to end"
            },
            MinCol: {
                required: "Please enter the minimum column value.",
                number: "Please enter a valid number.",
                min: "Value cannot be less than -50 Enter A Value Greater then -50!",
                max: "Vakue cannot be greater then 50 Enter A value less then 50!"
            },
            MaxCol: {
                required: "Please enter the maximum column value.",
                number: "Please enter a valid number.",
                min: "Value cannot be less than -50 Enter A Value Greater then -50!",
                max: "Vakue cannot be greater then 50 Enter A value less then 50!",
                larger: "End Number must larger or equal to start value",
                length: "The Range cannot exceed 100 from start to end"
            }
        },
        errorPlacement: function(error, element) {
            if (element.attr("name") === "MinRow") {
                error.appendTo($("#MinRowError"));
            } else if (element.attr("name") === "MaxRow") {
                error.appendTo($("#MaxRowError"));
            } else if (element.attr("name") === "MinCol") {
                error.appendTo($("#MinColError"));
            } else if (element.attr("name") === "MaxCol") {
                error.appendTo($("#MaxColError"));
            } else {
                error.appendTo(element.next('.error'));
            }
        }
    });
});