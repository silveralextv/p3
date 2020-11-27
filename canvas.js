class Signature {
  constructor() {
    this.canvas = document.getElementById("signature");
    this.ctx = this.canvas.getContext('2d');
    this.ctx.strokeStyle = '#000000';
    this.ctx.lineWidth = 3;
    this.draw = false;
    this.mousePosition = {
        x: 0,
        y: 0
    };
    this.lastPosition = this.mousePosition;
    this.canvas.height = 100;
  };

  events(){
    let self = this;
    this.canvas.addEventListener("mousedown", function (e) {
      self.draw = true;
      self.lastPosition = self.getMposition(e);
    });

    this.canvas.addEventListener("mousemove", function (e) {
      self.mousePosition = self.getMposition(e);
      self.canvasResult();
    });

    document.addEventListener("mouseup", function (e) {
      self.draw = false;
    });
  };

  getMposition(mouseEvent) {
    if (this.draw) {
      let oRect = this.canvas.getBoundingClientRect();
      return {
        x: mouseEvent.clientX - oRect.left,
        y: mouseEvent.clientY - oRect.top
      };
    }
  };

  canvasResult() {
    if (this.draw) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.lastPosition.x, this.lastPosition.y);
      this.ctx.lineTo(this.mousePosition.x, this.mousePosition.y);
      this.ctx.stroke();
      this.lastPosition = this.mousePosition;
    }
  };
};
