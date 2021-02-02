window.onload = () => {
    let canvas = new Signature("#signature")

    document.querySelector("#clear").addEventListener("click", (e) => {
        e.preventDefault()
        canvas.clear()
    })

    document.querySelector("#save").addEventListener("click", (e) => {
        e.preventDefault()
        localStorage.setItem('signature', canvas.generateImg())
    })
}