
function Ball(ctx) {
    this.x = ctx.x;
    this.y = ctx.y;
    this.throw = false
}

Ball.prototype.draw = function (ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI)
    ctx.fillStyle = "red";
    ctx.closePath();
    ctx.fill()
}

Ball.prototype.throw = function (ctx) {
    if (ctx.throw === true) {
        this.y += 2
    }
}



module.exports = Ball;
