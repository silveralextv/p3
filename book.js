class Book{
    constructor(){
        this.book = document.querySelector("#book")
        this.book.addEventListener("click", () =>{
            this.end = Math.floor(Date.now() / 1000) + 20
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
                const interval = setInterval( () => {
                    this.total = this.end - this.now
                    if (this.total < 0){
                        window.clearInterval(interval)
                        return
                    }
                    this.minutes = Math.floor(this.total / 60)
                    this.secondes = ("0" + (this.total % 60)).substr(-2)
                    this.container.innerHTML =
                    `<p>Votre vélo doit être récupérer dans les ` + this.minutes +  ` : ` + this.secondes + ` restantes</p>`
                    console.log("fait")
                    this.now = Math.floor(Date.now() / 1000)
                }, 1000)
            }
        }
    }
}