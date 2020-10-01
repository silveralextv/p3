function initBook() {
    document.querySelector("#book").addEventListener("click", () => {
        const end = date.now();
        console.log(end);
        //end.setMinutes(end.getMinutes + 20);
        localStorage.setItem("bookHour", end);
        let lastName = document.getElementById("lastname").value;
        localStorage.setItem("lastName", lastName);
        let firstName = document.querySelector("#firstname").value;
        localStorage.setItem("firstName", firstName);
    });
}