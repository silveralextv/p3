function initBook() {
    document.querySelector("#book").addEventListener("click", () => {
        const end = new Date();
        end.setMinutes(end.getMinutes + 20);
        console.log(end);
        let bookHour = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        localStorage.setItem("bookHour", bookHour);
        let lastName = document.getElementById("lastname").value;
        localStorage.setItem("lastName", lastName);
        let firstName = document.querySelector("#firstname").value;
        localStorage.setItem("firstName", firstName);
    });
}