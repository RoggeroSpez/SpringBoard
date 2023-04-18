const imageFileInput = document.querySelector("#imageFileInput");
const topTextInput= document.querySelector("#topTextInput");
const bottomTextInput = document.querySelector("#bottomTextInput");
const canvas = document.querySelector("#meme");

let image;

imageFileInput.addEventListener("change", () => {
    const imageDataUrl = URL.createObjectURL (imageFileInput.files[0]);

image = new Image();
image.src = imageDataUrl;

image.addEventListener("load", () => {
    updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
}, {once: true});
bottomTextInput.addEventListener("change", () => {updateMemeCanvas(canvas, image, topText.value, bottomText.value);})
    updateMemeCanvas(canvas, image, topText.value, bottomText.value);
});
bottomTextInput.addEventListener("change", () => {
    updateMemeCanvas(canvas, image, topText.value, bottomText.value);
});
});

function updateMemeCanvas(canvas, image, topText, bottomText){
    const ctx = canvas.getContext("2d");
    const width = image.width;
    const height = image.height;
    const fontSize = Math.floor(width / 10);
    const yOffset = height / 25;
    
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0,);

    ctx.strokeStyle = "black";
    ctx.lineWidth = Math.floor(fontSize / 4);
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.lineJoin = "round";
    ctx.font = '${fontSize}px sans-serif';

    ctx.textBaseline = "top";
    ctx.StrokeText (topText, width / 2, yOffset);
    ctx.fillText(topText, width / 2, yOffset);
    ctx.textBaseline = "bottom";
    ctx.StrokeText (bottomText, width / 2, height - yOffset);
    ctx.fillText(bottomText, width / 2, height - yOffset);
}