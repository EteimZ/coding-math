window.onload = () => {
    let canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,

        centerY = height / 2,
        centerX = width  / 2,
        radius = 200,
        angle = 0,
        numObjects = 20,
        slice = Math.PI * 2 / numObjects,
        x, y;

    for (let i = 0; i < numObjects; i += 1) {
        angle = i * slice;
        x = centerX + Math.cos(angle) * radius;
        y = centerY + Math.sin(angle) * radius;
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2, false);
        ctx.fill();
    }
}
