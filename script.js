const colorPicker = document.querySelector(".colorPicker");
const pixelBtn = document.querySelector("#pixel");
const clearBtn = document.querySelector("#clear");
const setColorMode = document.querySelectorAll(".color-mode");
const canvas = document.querySelector(".canvas");

// Defaults
const DEFAULT_GRID_SIZE = 4;
let colorMode = "color";
let currentColor = colorPicker.value;
let grayValue = 250;

/**
 *  Generates a grid(canvas) of div elements as cells
 *
 * @param {Number} SIZE the length and width of canvas to be generated
 */
const generateCanvas = function(SIZE) {
    // Generate rows which will contain their on cells(pixels)
    for(let x = 0; x < SIZE; x++) {
        const row = document.createElement("div");
        canvas.appendChild(row).className = "row";
    }

    // Generate 
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => {
        for(let x = 0; x < SIZE; x++) {
            const cell = document.createElement("div");
            row.appendChild(cell).className = "cell";
            cell.addEventListener('mouseover', changeColor);
        }
    })
}

/**
 * Sets new colorMode that will be use
 *
 */
const setNewColorMode = function() {
    if(this.id === "color") {
        colorMode = "color";
    } else if (this.id == "rainbow") {
        colorMode = "rainbow";
    } else {
        colorMode = "gray";
    }
}

/**
 * Change cell backgroundColor based on the current colorMode
 * 
 */
const changeColor = function() {
    if (colorMode === "color") {
        this.style.backgroundColor = `${currentColor}`;
    } else if (colorMode === "rainbow") {
        const R = Math.floor(Math.random() * 256);
        const G = Math.floor(Math.random() * 256);
        const B = Math.floor(Math.random() * 256);
        this.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
    } else {
        grayValue -= 25;
        this.style.backgroundColor = `rgb(${grayValue}, ${grayValue}, ${grayValue})`;
    }
    if (Math.floor(grayValue) === 0) {
        grayValue = 250;
    }
}

/**
 * Deletes old canvas as preparation for generating a new one
 * 
 */
const deleteOldCanvas = function() {
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        canvas.removeChild(row);
    })
}

/**
 * Sets all current cell background propery to white
 * 
 */
const clearCanvas = function() {
    const cell = document.querySelectorAll('.cell');
    cell.forEach(cell => {
        cell.style.backgroundColor = "white";
    })
}

// Sets new color to use
colorPicker.addEventListener("input", (event) => {
    currentColor = event.target.value;
})

// Generate new grid size
pixelBtn.addEventListener("click", () => {
    let size = parseInt(prompt("Enter new size\n(From 4 to 100)"));
    if (size < 4) {
        alert("Size is too small. Please try again.");
        return;
    } else if(size > 100) {
        alert("Size is too big. Please try again.")
        return;
    }
    deleteOldCanvas();
    generateCanvas(size);
});

// Reset(erase) current sketch
clearBtn.addEventListener("click", clearCanvas);

// Select which coloring mode to use
setColorMode.forEach(mode => {
    mode.addEventListener("click", setNewColorMode)
});



// Start app with default grid, color, and color mode
window.onload = () => {
    colorPicker.value = "#000"
    generateCanvas(DEFAULT_GRID_SIZE);
}