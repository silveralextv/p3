class Signature{
    constructor(canvas){
        this.sign = false

        this.canvas = document.querySelector(canvas)
        this.ctx = this.canvas.getContext("2d")
        this.ctx.strokeStyle = "black"
        this.ctx.lineWidth = 2
        this.ctx.fillStyle = "white"
        
        this.canvas.addEventListener("mousedown", (e) => {
            // Je signe
            this.sign = true
            
            // Je stock mes coordonnées de départ
            this.prevX = e.clientX - this.canvas.offsetLeft
            this.prevY = e.clientY - this.canvas.offsetTop
        })

        this.canvas.addEventListener("mousemove", (e) => {
            // Si Je signe
            if(this.sign){
                let currX = e.clientX - this.canvas.offsetLeft
                let currY = e.clientY - this.canvas.offsetTop
                this.draw(this.prevX, this.prevY, currX, currY)
                this.prevX = currX
                this.prevY = currY
            }
        })

        this.canvas.addEventListener("mouseup", () => {
            this.sign = false
        })
    }

    draw(startX, startY, destX, destY){
        this.ctx.beginPath()
        this.ctx.moveTo(startX, startY)
        this.ctx.lineTo(destX, destY)
        this.ctx.closePath()
        this.ctx.stroke()
    }

    clear(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    generateImg(){
        let image = this.canvas.toDataURL("image/png")
        return image
    }
}