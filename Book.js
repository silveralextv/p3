class Book{
    constructor(container){
        this.container = document.querySelector(container)
        this.timer
        this.book = document.querySelector("#book")
        this.book.addEventListener("click", () =>{
            this.end = Math.floor(Date.now() / 1000) + 20 * 60
            sessionStorage.setItem('end', this.end)
            this.end = sessionStorage.getItem('end')
            this.now = Math.floor(Date.now() / 1000)
            this.total = end - now
            this.minutes = Math.floor(total / 60)
            this.secondes = ("0" + (total % 60)).substr(-2)
            setInterval( () => {
                this.timer()
            }, 1000)
        })
    }

    timer() {
        this.container.innerHTML =
        `<p>` this.minutes ` : ` this.secondes `</p>`;
    }
}