// Get the canvas element form the page
var canvas = document.getElementById("canvas");
 
/* Rresize the canvas to occupy the full page, 
   by getting the widow width and height and setting it to canvas*/
 
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
 
//Done! Enjoy full page canvas!

var ctx = canvas.getContext("2d");
ctx.fillStyle = "#000";
ctx.fillRect(0, 0, canvas.width, canvas.height);

const prepareFontLoad = (fontList) => Promise.all(fontList.map(font => document.fonts.load(font )))

var image = new Image();
image.src = "Aanshi.jpeg";
image.onload = async function(){
    var imageCoordinates = scaleToFit(this);
    console.log(imageCoordinates);
    /*
    var font = new FontFaceObserver('Indie Flower');
    font.load().then(function () {
      console.log('Font loaded.');
      FillText(imageCoordinates.x, imageCoordinates.y, imageCoordinates.scale)
    });*/
    const fontList = ['400 36px "Indie Flower"'];
    await prepareFontLoad(fontList);
    FillText(imageCoordinates.x, imageCoordinates.y, imageCoordinates.scale);
}


function scaleToFit(img){
    // get the scale
    var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
    // get the top left position of the image
    var x = (canvas.width / 2) - (img.width / 2) * scale;
    var y = (canvas.height / 2) - (img.height / 2) * scale;
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    return {'x': x, 'y': y, 'w': img.width * scale, 'h': img.height * scale, 'scale': scale}
}

function FillText(x, y, scale){
    // offsets for forehead center on full img (1080x1350)
    // offsets for forehead center on full img (1080x1350)
    var left = 350;
    var top = 220;
    ctx.fillStyle = "#000";
    ctx.font = `400 36px "Indie Flower"`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    var path = window.location.pathname;
    if (path.length < 2){
        path = "idiot";
    }
    else {
        path = path.substr(1);
    }
    ctx.fillText(path, x + (left*scale), y + (top*scale));
}