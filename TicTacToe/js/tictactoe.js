//Variable keeps track of whos turn it is
let activePlayer = 'X';

let selectedSquares = [];

//This functio, is for placing an x or o in a square.
function placeXOrO (squareNumber) {
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/xx.png")';
        } else {
            select.style.backgroundImage = 'url("images/oo.png")';
        }
        selectedSquares.push(squareNumber + activePlayer);

        //Checks for any win conditions
        checkWinConditions();
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }

        //Function plays a placement sound.
        audio('./media/place2.mp3');
        if(activePlayer === 'O') {
            disableClick();
            setTimeout(function () { computersTurn(); }, 1000);
        }
        return true;
    }

    //Random square selected by the computer.
    function computersTurn() {

        let success = false;
        let pickASquare;
        while(!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            if (placeXOrO(pickASquare)) {
                placeXOrO(pickASquare);
                success = true;
            };
        }

    }
}

//This function checks for win conditions and draw a line if one is met.
function checkWinConditions() {
    if    (arrayIncludes('0x', '1X', '2X')) { drawWinLine(50 , 100, 558, 100); }
    else if (arrayIncludes('3x', '4x', '5x')) { drawWinLine(50, 304, 558, 304); }
    else if (arrayIncludes('6x', '7x', '8x')) { drawWinLine(50, 508, 558, 508); }
    else if (arrayIncludes('0x', '3x', '6x')) { drawWinLine(100, 50, 100, 558); }
    else if (arrayIncludes('1x', '4x', '7x')) { drawWinLine(304, 50, 304, 558); }
    else if (arrayIncludes('2x', '5x', '8x')) { drawWinLine(508, 50, 508, 558); }
    else if (arrayIncludes('6x', '4x', '2x')) { drawWinLine(100, 508, 510, 90); }
    else if (arrayIncludes('0x', '4x', '8x')) { drawWinLine(100, 100, 520, 520); }
    else if (arrayIncludes('0o', '1o', '2o')) { drawWinLine(50, 100, 558, 100); }
    else if (arrayIncludes('3o', '4o', '5o')) { drawWinLine(50, 304, 558, 304); }
    else if (arrayIncludes('6o', '7o', '8o')) { drawWinLine(50, 508, 558, 508); }
    else if (arrayIncludes('0o', '3o', '6o')) { drawWinLine(100, 50, 100, 558); }
    else if (arrayIncludes('1o', '4o', '7o')) { drawWinLine(304, 50, 304, 558); }
    else if (arrayIncludes('2o', '5o', '8o')) { drawWinLine(508, 50, 508, 558); }
    else if (arrayIncludes('6o', '4o', '2o')) { drawWinLine(100, 508, 510, 90); }
    else if (arrayIncludes('0o', '4o', '8o')) { drawWinLine(100, 100, 520, 520); }

    else if (selectedSquares.length >= 9) {
        audio('./media/tie2.mp3');

        //Sets a timer of .3 secondsq before the restGame is called.
        setTimeout(function () { resetGame(); }, 1000);
    }

    //This function chekcs if an array includes 3 strings. It checks for each win conditions
    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if ( a === true && b === true && c === true) { return true; }
    }
}

//This function disables the click option
function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

//This function takes a string parameter of the path we set earlier 
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

//This function utilizes the html canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;


    //This function interacts with the canvas drawing the win line  
    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        c.stroke();
        
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        
        }

         if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        
        }
    }
    
    
    //This function clears our canvas after our win is drawn
    function clear() {
        const animationLoop = requestAnimationFrame(clear);
         c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }
      
    
    //This line disallows clicking while the win sound is playing
    disableClick();
    audio('./media/win2.mp3');
    animateLineDrawing();
    setTimeout(function () { clear (); resetGame(); }, 1000);

}

//This function resets the game in a tie or a win
function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }

    selectedSquares = [];
}

