window.onload = () => {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    ctx.translate(0, height/2);
    ctx.scale(1, -1);

    for (let angle = 0; angle < Math.PI * 2; angle += .01 ) {
        let x = angle * 200,
            y = Math.sin(angle) * 200;

        ctx.fillStyle = "black";
        ctx.fillRect(x, y, 5, 5);

        y = Math.cos(angle) * 200;
        ctx.fillStyle = "red";
        ctx.fillRect(x, y, 5, 5);

    }
}
