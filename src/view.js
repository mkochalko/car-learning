const Car = require('./car')

class View {
    constructor(ctx, width, height) {
        this.car = new Car(500, 500);
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.keys = {
            up: [0, -1],
            left: [-(Math.PI / 20)],
            right: [Math.PI / 20],
        }
    }

    start() {
        setInterval(() => {
            this.step(this.ctx)
            this.draw(this.ctx)
        }, 20);
        this.bindKeyHandlers()
    }

    bindKeyHandlers() {
        const car = this.car;

        let keys = Object.keys(this.keys);
        for (let dir of keys) {
            let move = this.keys[dir];
            console.log(move)
            key(dir, () => {
                car.power(move, dir)
            })
        }
    }

    step(ctx) {
        this.car.move(ctx);
    }

    draw(ctx) {
        ctx.clearRect(0, 0, this.width, this.height);
        ctx.fillStyle = 'gray'
        ctx.fillRect(0, 0, this.width, this.height);
        ctx.clearRect(10, 10, 100, 100)
        ctx.fillStyle = 'blue'
        ctx.fillRect(10, 10, 100, 100)

        this.car.draw(ctx);
    }
}

module.exports = View;