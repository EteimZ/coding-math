window.onload = () => {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let centerY = height * .5,
        centerX = width *  .5,
        //baseAlpha = 0.5,
        offset = height * .4,
        speed = .1,
        angle = 0;

    render();

    function render() {

        // let alpha = baseAlpha + Math.sin(angle) * offset;
        let y =  centerY + Math.sin(angle) * offset;
        // ctx.fillStyle = "rgba(0, 0, 0, " + alpha + ")";
        

        ctx.clearRect(0, 0, width, height);        
        ctx.beginPath();
        ctx.arc(centerX, y, 50, 0, Math.PI * 2, false);
        ctx.fill();

        angle += speed;

        requestAnimationFrame(render);

    }
}
