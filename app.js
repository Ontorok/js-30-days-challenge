const canvas = document.querySelector('canvas');
const picker = document.querySelector('input[type="color"]');



const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineWidth = 1;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false, lastX = 0, lastY = 0, isIncrement = false, hue = 0;

function draw(e) {
    if (!isDrawing) return;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    if (hue >= 360) {
        hue = 0;
    }
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        isIncrement = !isIncrement;
    }

    if (!isIncrement) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}

// picker.addEventListener('change', e => {
//     ctx.strokeStyle = e.target.value;
// });

document.addEventListener('mousemove', draw);

document.addEventListener('mousedown', function (e) {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

document.addEventListener('mouseup', function () {
    isDrawing = false;

});

document.addEventListener('mouseout', function () {
    isDrawing = false;
});
