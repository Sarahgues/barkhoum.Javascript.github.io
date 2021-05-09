const array = ['Paris', 'Lyon', 'Marseille', 'Nice']
const array1 = ['Paris', 33, ['Marseille', 'Nice'], true]

for (i = 0; i < array1.length; i++) {
    console.log(typeof array1[i]);
}
array.sort();
console.log(array1)
const numbers = [21, 45, 1, 22, 44, 7]
console.log(numbers.sort());
//******************Video Youtube
const input = document.getElementById("input");
const video = document.getElementById("video");
let link = "";

input.addEventListener("input", (e) => {
    console.log(e.target.value);
    video.innerHTML =
        `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/QB1DTl7HFnc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
});