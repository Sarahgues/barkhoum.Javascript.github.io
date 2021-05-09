const array = ["Paris", "Lyon", "Marseille", "Nice"];
const array1 = ["Paris", 33, ["Marseille", "Nice"], true];

for (i = 0; i < array1.length; i++) {
    console.log(typeof array1[i]);
}
array.sort();
console.log(array1);
const numbers = [21, 45, 1, 22, 44, 7];
console.log(numbers.sort());
//******************Video Youtube
const input = document.getElementById("input");
const video = document.getElementById("video");
let link = " ";

input.addEventListener("input", (e) => {
    link = e.target.value;

    if (link) {
        video.innerHTML = `<iframe width="560" height="315" src=${link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>`;
    }
});
const changeLink = (linkToChange) => {
    let embed = linkToChange.replace('watch?v=',
        "embed/");
    link = embed.split('&');
    console.log(link);
}