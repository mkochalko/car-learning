

class Car {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vel = 0;
        this.acc = 0;
        this.width = 40;
        this.height = 80;
    }

    show() {
        fill(255, 0, 0)
        stroke(0)
        rect(this.x, this.y, this.width, this.height)

    }

    step(ctx) {
        this.move(ctx)
    }

    draw(ctx) {
        ctx.clearRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    move() {
        this.vel += this.acc
        this.y += this.vel;
    }

}

module.exports = Car;