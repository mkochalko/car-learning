

class Car {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vec = 0;
        this.vel = [0, 0];
        this.acc = 0;
        this.width = 40;
        this.height = 80;
    }

    show() {
        fill(255, 0, 0)
        stroke(0)
        rect(this.x, this.y, this.width, this.height)

    }

    draw(ctx) {
        ctx.fillStyle = "red";
        
        drawRotatedRect(this.x, this.y, this.width, this.height, this.vec)

        function drawRotatedRect(x, y, width, height, degrees) {
            ctx.save();

            ctx.beginPath();
            ctx.translate(x + width / 2, y + height / 2);
            ctx.rotate(degrees);
            ctx.fillRect(-width / 2, -height / 2, width, height);

            ctx.fillStyle = "red";

            ctx.restore();
        }
    }


    move(ctx) {
        this.vel[0] += this.acc;
        this.vel[1] += this.acc;
        this.x += this.vel[0];
        this.y += this.vel[1];
        this.draw(ctx)
    }

    power(impulse, dir) {
        if (dir === 'up') {
            this.vel[0] += impulse[0] + this.vec;
            this.vel[1] += impulse[1] + this.vec;
        } else {
            this.vec += impulse[0]
        }
    };
}

module.exports = Car;