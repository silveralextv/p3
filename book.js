function initBook() {
    let bookHour;

    document.querySelector("#book").addEventListener("click", () => {
        bookHour = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        localStorage.setItem("bookHour", bookHour);
        let lastName = document.getElementById("lastname").value;
        localStorage.setItem("lastName", lastName);
        let firstName = document.querySelector("#firstname").value;
        localStorage.setItem("firstName", firstName);
    });
}