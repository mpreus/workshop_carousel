document.addEventListener("DOMContentLoaded", init);
function init() {

    let slideInterval = 4500;

    function getFigures() {
        return document.getElementById("carousel").getElementsByTagName("figure");
    }

    function moveForward() {
        let counter;            // for counting 'figures'
        let figures = getFigures(); 
        for (let i = 0; i < figures.length; i++) {
            if (figures[i].className == "visible") {
                figures[i].className = "";
                counter = i;
            }
        }
        // for looping the pictures again and again:
        if (++counter == figures.length) {
            counter = 0;
        }
        
        figures[counter].className = "visible";
        setTimeout(moveForward, slideInterval);
    }

    function startPlayback() {
        setTimeout(moveForward, slideInterval);
    }

    startPlayback();
}
