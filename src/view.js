const Car = require('./car')

class View {
    constructor(ctx) {
        this.car = new Car(500, 500);
        this.ctx = ctx;
        console.log(window.width)
    }

    start() {
        setInterval(() => {
            this.car.step(this.ctx);
            this.car.draw(this.ctx);
        }, 20);
    }

    draw() {

    }
}

module.exports = View;