
window.onload = start;

/**
 * The position of the bird relative to the left side of the page.
 */
let left = 0;

/** Starts the program on page load. */

function start() {
    fly();
}


/** Set an interval to make the bird "fly" */
function fly() {
    setInterval(moveBirdToTheRight, 10)
    setTimeout(moveBirdToTheRight, 1000)
}
/** Moves the bird a small step in percentage to the right.  */
function moveBirdToTheRight() {
    // Fetch bird from html
    const bird = document.querySelector('img');
    
    // Update position
    left += 0.2;

    // Render position
    bird.style.left = left + '%';
}

