// <!-- Full Name : Rish Dhir
// Assignment 5: Scrabble Board
// Copyright (c) 2024 by Rish Dhir. All rights reserved. May be freely copied or
// excerpted for educational purposes with credit to the author.
// Assingment Description: In assignment we were required to build a srabble board game. I made the basic
// version of the game by just implementing one strip of the game rather then the board. The board correctly
// updates the score and the highest scores and the remaining tiles are tracked 
// Github IO: https://github.com/Rish-24/GUI-1.git


$(document).ready(function () {
    var totalScore = 0;
    var highestScore = 0;
    var totalLettersRemaining = 93;
    var droppedWords = [];
    var droppedTiles = [];

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letterScores = {
        A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1, J: 8, K: 5, L: 1, M: 3,
        N: 1, O: 1, P: 3, Q: 10, R: 1, S: 1, T: 1, U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10
    };

    function calculateWordScore(word) {
        let wordScore = 0;
        for (let i = 0; i < word.length; i++) {
            wordScore += letterScores[word[i]];
        }
        return wordScore;
    }

    function shuffleLetters() {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        return alphabet.charAt(randomIndex);
    }

    function getLetterFromTile(tile) {
        return tile.attr("src").match(/Scrabble_Tile_(\w)\.jpg/)?.[1] ?? null;
    }

    function createTile() {
        var randomLetter = shuffleLetters();
        var imageSource = `images/ScrabbleTiles/Scrabble_Tile_${randomLetter}.jpg`;
        var tile = $(`<div class="draggable"><img src="${imageSource}" alt="Tile Image"></div>`);
        tile.draggable({
            revert: "invalid",
            cursor: "move",
            zIndex: 100,
            snap: ".MainBoard .droppable.target",
            snapMode: "inner"
        });
        return tile;
    }

    function initializeTiles() {
        for (let i = 0; i < 7; i++) {
            $("#tileRack").append(createTile());
        }
    }

    initializeTiles();

    $(".TileRackHolder, .TileRackHolder img").droppable({
        accept: ".draggable",
        drop: function (event, ui) {
            $("#tileRack").append(ui.helper);
        }
    });

    $(".MainBoard .droppable.target").droppable({
        accept: ".draggable",
        drop: function (event, ui) {
            var targetCol = $(this).data("col");
            var tile = ui.helper.find("img");

            if (tile && tile.length > 0) {
                var letter = getLetterFromTile(tile);

                var tileScore = (targetCol == 2 || targetCol == 5 || targetCol == 7) ? 2 * letterScores[letter] : letterScores[letter];
                
                totalScore += tileScore;
                totalLettersRemaining--;

                $("#Score").text(totalScore);
                $("#RemainingTiles").text(totalLettersRemaining);

                ui.helper.addClass("dropped");
                droppedTiles.push(letter);
                $(".TrackingData #Word").text(droppedTiles.join(""));
            }
        }
    });

    $("#nextWordButton").on("click", function () {
        if (droppedTiles.length > 0) {
            var word = droppedTiles.join("");
            var wordScore = calculateWordScore(word);
            droppedWords.push({ word: word, score: wordScore });

            if (wordScore > highestScore) {
                highestScore = wordScore;
                $("#HighestScore").text(highestScore);
            }

            totalScore += wordScore;

            console.log("Word finalized:", word, "Score:", wordScore);

            droppedTiles = [];
            $(".TrackingData #Word").text("");
            $("#Score").text(totalScore); 
        }

        resetTiles();
    });

    function resetTiles() {
        $("#tileRack").empty(); 

        initializeTiles();

        totalScore = 0;
        $("#Score").text(totalScore); 
    }

    $("#resetButton").on("click", function () {
        totalScore = 0;
        highestScore = 0;
        totalLettersRemaining = 93;
        $("#Score").text(totalScore);
        $("#HighestScore").text(highestScore);
        $("#RemainingTiles").text(totalLettersRemaining);
        $(".TrackingData #Word").text("");
        droppedTiles = [];
        droppedWords = []; 
        $("#tileRack").empty();
        initializeTiles();
    });
});