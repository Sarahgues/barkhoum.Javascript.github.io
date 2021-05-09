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

btn.onclick = ("click", () => {
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
    mouseEvent.style.left = (e.x / window.innerWidth) * 100 + "%";

    if (e.x > 500) {
        document.body.style.filter = "blur(3px)";
    } else {
        document.body.style.filter = "none ";
    }
});

// // ***************
// const dateNaissance = (date) => {
//     console.log('date de naissance' + date);
// };
// dateNaissance(" 23 / 02 / 1981");
// const nom = ' GUESMIA';
// const prenom = ' Barkhoum'
// const age = '40 ans'

// console.log("je m appelle" + prenom + nom + " et j ai " + age + " ans.");
// **** ** ** ** ** *
document.getElementById("input").addEventListener("input", (e) => {
    vertical.innerHTML = e.target.value;
});

//********************* */
const theme = document.querySelectorAll(".theme");

theme.forEach((item) => {
    item.addEventListener("click", (e) => {
        console.log(e.target.id);
        document.body.classList.remove("darkTheme", "salmonTheme", "purpleTheme");
        switch (e.target.id) {
            case "dark":
                document.body.classList.add("darkTheme");
                break;
            case "salmon":
                document.body.classList.add("salmonTheme");
                break;
            case "purple":
                document.body.classList.add("purpleTheme");
                break;
            default:
                null;
        }
    });
});