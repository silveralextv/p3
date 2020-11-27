const date = new Date();
/*Diapo*/

const diapo = new Diapo("slider");

/*Map*/

const map = new Carte("modal");

/*Timer*/

if (localStorage.getItem("bookHour") > new Date().getTime) {
} else {
}
const end = Math.floor(Date.now() / 1000) + 20 * 60;
const now = Math.floor(Date.now() / 1000);
let total = end - now;
const minutes = Math.floor(total / 60);
const secondes = ("0" + (total % 60)).substr(-2);
console.log(minutes, secondes);

/*if (isset(localStorage.getItem("bookHour"))) {
  const timer = new Timer();
}*/
