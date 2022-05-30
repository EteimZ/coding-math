class bee {

    constructor(){
        this.angleX = Math.random() * Math.PI * 2;
        this.angleY = Math.random() * Math.PI * 2;
        this.speedX = Math.random() * .1 - .05;
        this.speedY = Math.random() * .1 - .05;
        this.radius = 100 + Math.random() * 100;
        console.log("Created bee");
    }

    update(ctx, width, height) {
        let x = Math.cos(this.angleX) * this.radius,
                y = Math.sin(this.angleY) * this.radius;
        this.angleX += this.speedX;
        this.angleY += this.speedY;

        ctx.beginPath();
        ctx.arc(width / 2 + x, height / 2 + y, 2, 0, Math.PI * 2);
        ctx.fill();
    }    
}

window.onload = () => {
    let canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        bees = [], 
        numBees = 50;

    for (let i = 0; i < numBees; i += 1){
        bees.push(new bee());
    }

    requestAnimationFrame(draw());

    function draw() {

        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < numBees; i += 1 ){
            bees[i].update(ctx, width, height);
        }
        requestAnimationFrame(draw);
    
    }
    
}
