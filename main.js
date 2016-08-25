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

var previewEnabled = true;
function startPeek() {
    if (previewEnabled) {
        if (navigator.userAgent.indexOf("Edge") >= 0) {
            divCanvasPreview.classList.add("noblur-transition");
            setTimeout(function () {
                divMainContainer.classList.add("hide-transition");
            }, 500);
        } else {
            divMainContainer.classList.add("hide-transition");
            divCanvasPreview.classList.add("noblur-transition");
        }
    }
}
function stopPeek() {
    if (navigator.userAgent.indexOf("Edge") >= 0) {
        divMainContainer.classList.remove("hide-transition");
        setTimeout(function () {
            divCanvasPreview.classList.remove("noblur-transition");
        }, 600);
    } else {
        divCanvasPreview.classList.remove("noblur-transition");
        divMainContainer.classList.remove("hide-transition");
    }
}
divPeek.onclick = function () {
    if (previewEnabled) {
        previewEnabled = false;
        divPeek.title = "预览已禁用\n点击以启用";
        divPeek.classList.add("color-disabled");
        divCanvasPreview.classList.add("hide-transition");
        stopPeek();
    } else {
        previewEnabled = true;
        divPeek.title = "预览\n点击以禁用";
        divPeek.classList.remove("color-disabled");
        divCanvasPreview.classList.remove("hide-transition");
        startPeek();
    }
}
divPeek.onmouseover = startPeek;
divPeek.onmouseout = stopPeek;

var listItemCount = 0;
buttonAdd.onclick = addListItem;
function addListItem() {
    var element = generateListItem(++listItemCount);
    divList.appendChild(element);
    setTimeout(function () {
        element.classList.remove("hide-transition");
    }, 1);
    divList.scrollIntoView(false);
};

function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function generateListItem(index) {
    var element = document.createElement("div");
    element.id = "divListItem" + index;
    element.className = "listrow hide-transition";
    element.innerHTML = '<div id="" class="listitem listitem-text"><input type="text" name="text' + index + '" value=""></div><div id="" class="listitem listitem-pos"><div class="listitem div-pos-number"><input id="numberPosX' + index + '" type="number" name="posx' + index + '" step="1" value="0"></div><div class="listitem div-pos-number"><input id="numberPosY' + index + '" type="number" name="posy' + index + '" step="1" value="0"></div></div><div id="" class="listitem listitem-font"><select id="selectFontFamily' + index + '" class="select-font-family" title="字体家族"><optgroup label="Windows 中文字体"><option>等线</option><option>微软雅黑</option><option>隶书</option><option>幼圆</option><option>仿宋</option><option>楷体</option><option>黑体</option><option>宋体</option></optgroup><optgroup label="Office 2007 中文字体"><option>方正舒体</option><option>方正姚体</option><option>华文彩云</option><option>华文仿宋</option><option>华文行楷</option><option>华文琥珀</option><option>华文楷体</option><option>华文隶书</option><option>华文宋体</option><option>华文细黑</option><option>华文新魏</option><option>华文中宋</option></optgroup><optgroup label="Windows 拉丁文无衬线字体"><option>Arial</option><option>Calibri</option><option>Segoe UI</option><option>Tahoma</option><option>Verdana</option></optgroup><optgroup label="Windows 拉丁文衬线字体"><option>Times New Roman</option></optgroup><optgroup label="Windows 拉丁文手写字体"><option>Brush Script MT</option><option>Comic Sans MS</option><option>Freestyle Script</option><option>Old English Text MT</option><option>Segoe Print</option><option>Segoe Script</option></optgroup><optgroup label="Windows 拉丁文等宽字体"><option>Consolas</option><option>Courier New</option><option>Lucida Console</option></optgroup><optgroup label="Windows 拉丁文 ITC 系列字体"><option>Blackadder ITC</option><option>Bradley Hand ITC</option><option>Edwardian Script ITC</option><option>Eras ITC</option><option>Juice ITC</option><option>Kristen ITC</option><option>Snap ITC</option><option>Tempus Sans ITC</option><option>Viner Hand ITC</option></optgroup></select><div class="listitem div-font-size"><input id="numberFontSize' + index + '" type="number" name="size' + index + '" min="0" value="16" title="字体大小 (px)"></div><div class="div-font-weight"><div id="divFontWeightValue' + index + '" class="div-font-weight-value">400</div><input id="rangeFontWeight' + index + '" class="range-font-weight" type="range" min="100" max="900" step="100" value="400" list="datalistFontWeights"oninput="onRangeFontWeightChange(' + index + ');" title="字体粗细"></div><button id="buttonItalic' + index + '" type="button" title="斜体" style="width: 52px"onclick="onButtonItalicClick(' + index + ');"><span class="italic" style="font-size: 30px">i</span></button></div><div id="" class="listitem listitem-color"><input id="color' + index + '" type="color" name="" value="#000000" title="#000000" onchange="onColorChange(' + index + ');"></div><div id="" class="listitem listitem-op"><button id="buttonRemove' + index + '" class="font-icon color-warning" title="移除" onclick="onButtonRemoveClick(' + index + ');">&#xE107;</button></div>';
    return element;
}

function onButtonRemoveClick(index) {
    document.getElementById("divListItem" + index).remove();
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

addListItem();