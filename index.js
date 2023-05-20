const defaultBtn = document.getElementById("default-btn");
const img = document.querySelector("img");

function defaultBtnActive() {
    defaultBtn.click();
}

defaultBtn.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            const result = reader.result;
            img.src = result;
        };
        reader.readAsDataURL(file);
    }
});

var rotationAngle = 0;

function flipImage() {
    var image = document.getElementById("my-image");
    var currentScale = getComputedStyle(image).getPropertyValue("transform");
    var scaleX = currentScale.includes("-1") ? 1 : -1;
    image.style.transform = "scaleX(" + scaleX + ") rotate(" + rotationAngle + "deg)";
}

function rotateImage() {
    var image = document.getElementById("my-image");
    rotationAngle += 90;
    image.style.transform = "scaleX(1) rotate(" + rotationAngle + "deg)";
}

function applyHeartShape() {
    var image = document.getElementById("my-image");
    image.classList.add("heart-shape");
}

function applySquareShape() {
    var image = document.getElementById("my-image");
    image.classList.add("square-shape");
}


function applyCircleShape() {
    var image = document.getElementById("my-image");
    image.classList.add("circle-shape");
}

function applyRectangleShape() {
    var image = document.getElementById("my-image");
    image.classList.add("rectangle-shape");
}


function exitPage() {
    var result = confirm("Are you sure you want to exit the page?");
    if (result) {
        window.onbeforeunload = null;
        window.close();
    }
}
