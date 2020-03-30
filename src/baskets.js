
function Basket() {
    this.pos_x = (Math.random() * 700);
    this.pos_y = (Math.random() * 400 ) + 20;
    // this.vel = ctx.vel;
    this.radius = Math.random() * 20;
    this.color = "green";
}

Basket.prototype.draw = function (ctx) {
    ctx.beginPath();
    ctx.arc(this.pos_x, this.pos_y, 20, 0, 2 * Math.PI)
    ctx.fillStyle = "black";
    ctx.closePath();
    ctx.fill()
    ctx.lineWidth = 5
    ctx.strokeStyle = "orange"
    ctx.stroke()
}

// Basket.prototype.move = function(ctx) {
//     this.pos[0] += this.vel[0]
//     this.pos = [(pos[0] + this.DIM_X) % this.DIM_X, (pos[1] + this.DIM_Y) % this.DIM_Y]
// }

// }



module.exports = Basket;            