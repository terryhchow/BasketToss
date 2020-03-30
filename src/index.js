
const Ball = require("./ball")
const Basket = require("./baskets")


document.addEventListener("DOMContentLoaded", function() {
    const canvasEl = document.getElementById('game-canvas');
    canvasEl.width = 700;
    canvasEl.height = 500;

    const ctx = canvasEl.getContext("2d");


    // Render the ping pong ball
    window.ball = Ball
    const ball = new Ball({
        x : 325,
        y : 490
    })
    ball.draw(ctx)
    
    // Generate basket at random
    window.basket = Basket
    const basket1 = new Basket()
    basket1.draw(ctx)

    // Move the ball
    document.addEventListener("keydown", (event) => {
        switch (event.keyCode) {
            case 37:
                ball.x -= 8;
                break;
            case 39:
                ball.x += 8;
                break;
            case 32:
                this.throw = true
                break;
        }
        canvasEl.width = canvasEl.width
        ball.draw(ctx)
        basket1.draw(ctx)
    })



    
    console.log("YOU GOT THIS TERRY DO NOT GIVE UP")
});