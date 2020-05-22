class Diapo {
    constructor() {
        this.i = 0;
        this.play = true;
        this.container = document.getElementById("slider");
        this.slides = this.container.querySelectorAll(".slider-items");
        this.container.querySelector(".next").addEventListener("click", () => { this.next() });
        this.container.querySelector(".prev").addEventListener("click", () => { this.prev() });
        this.btn = this.container.querySelector(".btn");
        this.btn.addEventListener("click", () => { this.playPause() });
        this.refresh();
        this.changeImage = setInterval(() => { this.next() }, 5000);
    };

    refresh() {
        for (let slide of this.slides) {
            slide.className = "slider-items display-none";
        };

        this.slides[this.i].className = "slider-items display-flex";
    };

    next() {
        this.i++;

        if (this.i >= this.slides.length) this.i = 0;

        this.refresh();
    };

    prev() {
        this.i--;

        if (this.i < 0) this.i = this.slides.length - 1;

        this.refresh();
    };

    playPause() {
        if (this.play) {
            clearInterval(this.changeImage);
            this.btn.className = "btn play";
        } else {
            this.changeImage = setInterval(() => { this.next() }, 5000);
            this.btn.className = "btn pause";
        };
        this.play = !this.play;
    };
};

const diapo = new Diapo();