import Car from './car';
const View = require('./view');

window.addEventListener('DOMContentLoaded', () => {
    let canvasEle = document.getElementById('game-canvas');
    canvasEle.width = window.innerWidth;
    canvasEle.height = window.innerHeight
    let ctx = canvasEle.getContext("2d");
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, canvasEle.width, canvasEle.height);
    let view = new View(ctx, canvasEle.width, canvasEle.height)
    view.start()
    console.log('test')
})

