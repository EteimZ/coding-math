window.onload = () => {
    let canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        xres = 10,
        yres = 11;

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "green";
    ctx.font = "12px Courier";
    ctx.translate(width / 2, height / 2);
    ctx.transform(1.5, .3, 0.1, 1.5, 0, 0);

    for ( let y = -height / 2; y < height / 2; y += yres ){
        for ( let x = -width / 2; x < width / 2; x += xres ) {
            let char = Math.random() < .5 ? "0" : "1";
            ctx.fillText(char, x, y);            
        }
    }
}
