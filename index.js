// ////variable
// let cours = "je test la console";
// console.log(cours + "// avant MAJ");

// cours = "je change la variable";
// console.log(cours + "// apres  MAJ");
// let magie = "je code du javascript";
// console.log(magie + " c est de la magie ");
// let cours3 = "je suis dev";
// console.log(cours3);
// const prenom = "Barkhoum";
// console.log(prenom);

// ////function
// function JeSuisUneFonction() {
//     console.log("je fais un truc");
// }
// const FaireUneChose = (type) => {
//     console.log('je mange: ' + type);

// }
// JeSuisUneFonction();
// FaireUneChose('des pates');

/////)/bouton
const btn = document.querySelector("#btn");
const img = document.getElementById("img");

btn.addEventListener("click", () => {
    img.classList.toggle("show");
});
//*****************Mouse Event */
const mouseEvent = document.querySelector(".mouseEvent");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");

mouseEvent.addEventListener("mousemove", (e) => {
    // console.log(e);
    horizontal.innerHTML = e.x;
    vertical.innerHTML = e.y;
});

// const dateNaissance = (date) => {
//     console.log('date de naissance' + date);
// };
// dateNaissance(`23 /02/ 1981`);