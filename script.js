let i = 1;

setInterval(changeImage(i), 100);

function changeImage(i) {
    
    let itemNumber = 1;

    for (let itemNumber = 1; itemNumber < 4; itemNumber++){
        let itemDisplayNone = document.getElementById("item" + itemNumber);
        itemDisplayNone.className += " display-none";
    };

    let item = document.getElementById("item" + i);

    console.log(item);

    item.setAttribute("class", "display-flex");

    i++;

    console.log(i);
};