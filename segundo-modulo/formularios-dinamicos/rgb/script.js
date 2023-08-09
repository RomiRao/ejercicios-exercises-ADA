const redColor = document.getElementById("redInput");
const greenColor = document.getElementById("greenInput");
const blueColor = document.getElementById("blueInput");
const bodyColor = document.getElementById("body");

redColor.addEventListener("input", (e) => {
    bodyColor.style.backgroundColor = `rgb(${e.target.value}, ${greenColor.value}, ${blueColor.value})`;
});

greenColor.addEventListener("input", (e) => {
    bodyColor.style.backgroundColor = `rgb(${redColor.value},${e.target.value},${blueColor.value})`;
});

blueColor.addEventListener("input", (e) => {
    bodyColor.style.backgroundColor = `rgb(${redColor.value},${greenColor.value},${e.target.value})`;
});
