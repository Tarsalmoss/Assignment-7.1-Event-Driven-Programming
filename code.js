// ========================================
// Name: Ian Andalon
// Event Driven Programming Assignment
// ========================================

// Variable used to store the timer
let intervalID = null;

// Get the Start button
const startButton = document.getElementById("startButton");

// Get the Stop button
const stopButton = document.getElementById("stopButton");

// Get the meme image
const memeImage = document.getElementById("memeImage");

// Get the message area
const messageArea = document.getElementById("messageArea");

// Starting X position
let x = 50;

// Starting Y position
let y = 50;

// Amount to move horizontally
let xDirection = 5;

// Amount to move vertically
let yDirection = 5;

// ========================================
// Start Button Event
// ========================================
startButton.onclick = startMoving;

// ========================================
// Stop Button Event
// ========================================
stopButton.onclick = stopMoving;

/*
    Function: startMoving
    Purpose: Starts moving the meme
*/
function startMoving()
{
    // Disable Start button
    startButton.disabled = true;

    // Enable Stop button
    stopButton.disabled = false;

    // Display message
    messageArea.innerHTML = "The meme is moving!";

    // Prevent multiple timers
    if (intervalID === null)
    {
        // Move every 20 milliseconds
        intervalID = setInterval(moveMeme, 20);
    }
}

/*
    Function: stopMoving
    Purpose: Stops moving the meme
*/
function stopMoving()
{
    // Stop the timer
    clearInterval(intervalID);

    // Reset timer variable
    intervalID = null;

    // Enable Start button
    startButton.disabled = false;

    // Disable Stop button
    stopButton.disabled = true;

    // Display message
    messageArea.innerHTML = "The meme has stopped!";
}

/*
    Function: moveMeme
    Purpose: Makes the meme bounce around
    the screen continuously
*/
function moveMeme()
{
    // Increase X position
    x += xDirection;

    // Increase Y position
    y += yDirection;

    // Check right wall
    if (x >= window.innerWidth - 220)
    {
        xDirection = -5;
    }

    // Check left wall
    if (x <= 0)
    {
        xDirection = 5;
    }

    // Check bottom wall
    if (y >= 450)
    {
        yDirection = -5;
    }

    // Check top wall
    if (y <= 0)
    {
        yDirection = 5;
    }

    // Move image horizontally
    memeImage.style.left = x + "px";

    // Move image vertically
    memeImage.style.top = y + "px";
}
