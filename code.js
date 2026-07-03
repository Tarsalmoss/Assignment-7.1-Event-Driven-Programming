// Variable that stores the timer ID
let intervalID;

// Variable for horizontal position
let x = 100;

// Variable for vertical position
let y = 100;

// Get the meme image
const meme = document.getElementById("memeImage");

// Get the start button
const startButton = document.getElementById("startButton");

// Get the stop button
const stopButton = document.getElementById("stopButton");

// Get the message area
const messageArea = document.getElementById("messageArea");

// Start button click event
startButton.onclick = startMoving;

// Stop button click event
stopButton.onclick = stopMoving;

/*
    Function: startMoving
    Purpose:
    Enables movement of the meme image.
*/
function startMoving()
{
    // Disable start button
    startButton.disabled = true;

    // Enable stop button
    stopButton.disabled = false;

    // Display message using innerHTML
    messageArea.innerHTML = "Meme is moving!";

    // Start timer
    intervalID = setInterval(moveMeme, 100);
}

/*
    Function: stopMoving
    Purpose:
    Stops the meme image.
*/
function stopMoving()
{
    // Stop timer
    clearInterval(intervalID);

    // Enable start button
    startButton.disabled = false;

    // Disable stop button
    stopButton.disabled = true;

    // Display message using innerHTML
    messageArea.innerHTML = "Meme stopped!";
}

/*
    Function: moveMeme
    Purpose:
    Moves the meme around the page.
*/
function moveMeme()
{
    // Generate random horizontal position
    x = Math.floor(Math.random() * 900);

    // Generate random vertical position
    y = Math.floor(Math.random() * 400);

    // Move image horizontally
    meme.style.left = x + "px";

    // Move image vertically
    meme.style.top = y + "px";
}
