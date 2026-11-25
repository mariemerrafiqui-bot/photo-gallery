
function upDate(previewPic) {
    var imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    var imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

function addTabIndex() {
    console.log("Adding tabindex to images");

    var images = document.querySelectorAll(".preview");

    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}

window.onload = addTabIndex;
