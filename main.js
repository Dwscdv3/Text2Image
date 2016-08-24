var divCanvasPreview = document.getElementById("divCanvasPreview");
var divMainContainer = document.getElementById("divMainContainer");
var divList = document.getElementById("divList");
var divRightSide = document.getElementById("divRightSide");
var divPeek = document.getElementById("divPeek");
var buttonAdd = document.getElementById("buttonAdd");

function resize() {
    divRightSide.style.height = window.innerHeight.toString() + "px";
}
window.onresize = resize;
resize();

divPeek.onmouseover = function () {
    if (navigator.userAgent.indexOf("Edge") >= 0) {
        divCanvasPreview.className = "noblur-transition";
        setTimeout(function () {
            divMainContainer.className = "hide-transition";
        }, 500);
    } else {
        divMainContainer.className = "hide-transition";
        divCanvasPreview.className = "noblur-transition";
    }
}
divPeek.onmouseout = function () {
    if (navigator.userAgent.indexOf("Edge") >= 0) {
        divMainContainer.className = "";
        setTimeout(function () {
            divCanvasPreview.className = "";
        }, 600);
    } else {
        divCanvasPreview.className = "";
        divMainContainer.className = "";
    }
}

buttonAdd.onclick = function () {
    divList.innerHTML += generateListItem();
};

function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function generateListItem() {
    return "";
}

function onRangeFontWeightChange(index) {
    document.getElementById("divFontWeightValue" + index).innerHTML =
        document.getElementById("rangeFontWeight" + index).value;
}
function onButtonItalicClick(index) {
    document.getElementById("buttonItalic" + index).classList.toggle("button-checked");
}
function onColorChange(index) {
    var color = document.getElementById("color" + index);
    color.title = color.value;
}