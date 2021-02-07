class Book{
    constructor(){
        this.book = document.querySelector("#book")
        this.book.addEventListener("click", () =>{
            this.end = Math.floor(Date.now() / 1000) + 20 * 60
            sessionStorage.setItem('end', this.end)
            new Timer("#timer")
        })
    }
}

class Timer{
    constructor(container){
        this.container = document.querySelector(container)
        this.end = sessionStorage.getItem('end')
        if (this.end){
            this.now = Math.floor(Date.now() / 1000)
            if (this.end > this.now) {
                setInterval( () => {
                    this.total = this.end - this.now
                    this.minutes = Math.floor(this.total / 60)
                    this.secondes = ("0" + (this.total % 60)).substr(-2)
        