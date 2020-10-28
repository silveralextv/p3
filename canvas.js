class Signature {
  constructor() {
    this.canvas = document.getElementById("signature");
    let ctx = this.canvas.getContext("2d");
    ctx.strokeStyle = "#222222";
    ctx.lineWidth = 4;
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.drawing = false;
    this.mousePos = {
      x: 0,
      y: 0,
    };
    this.lastPos = this.mousePos;

    this.canvas.addEventListener(
      "mousedown",
      (e) => {
        this.drawing = true;
        this.lastPos = this.getMousePos(this.canvas, e);
      },
      false
    );

    this.canvas.addEventListener(
      "mouseup",
      (e) => {
        this.drawing = false;
      },
      false
    );

    this.canvas.addEventListener(
      "mousemove",
      (e) => {
        this.mousePos = this.getMousePos(this.canvas, e);
      },
      false
    );
  }

  getMousePos(canvasDom, mouseEvent) {
    this.rect = canvasDom.getBoundingClientRect();
    return {
      x: mouseEvent.clientX - this.rect.left,
      y: mouseEvent.clientY - this.rect.top,
    };
  }

  renderCanvas() {
    if (this.drawing) {
      this.ctx.moveTo(this.lastPos.x, this.lastPos.y);
      this.ctx.lineTo(this.mousePos.x, this.mousePos.y);
      this.ctx.stroke();
      this.lastPos = this.mousePos;
    }
  }
}
