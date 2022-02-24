// const even = document.getElementsByClassName("card__items");
// for (let i = 0; i < even.length; i++) {
//   even[i,1].style.backgroundColor = "red";
//   even[i,3].style.backgroundColor = "red";
// }

// const even = document.getElementsByClassName("card__items");
// even[0].style.backgroundColor = "blue"
// even[2].style.backgroundColor = "blue"
// even[4].style.backgroundColor = "blue"
// even[6].style.backgroundColor = "blue"

// function bigImg(x) {
//   x.style.padding = "90px";
//   x.style.fontSize = "52px";
//   x.style.transform = "rotate(360deg)";
// }

// function normalImg(x) {
//   x.style.padding = "70px";
// }

// const elementBeforeStyle = getComputedStyle (element, :nthChild(odd));


const boxes = document.querySelectorAll(".box");
const input = document.getElementById("input");


// let oddColorizer = (color) => {
//   boxes.forEach((e, key) => {
//     if(key % 2 == 0) e.style = `background: ${color}`;
//     else e.style = ` background: black;`;
//   });
// }
let oddColorizer = (data) => {
  const arr = data.split(" ");
  console.log(arr);
  boxes.forEach((e, key) => {
    e.style = `
    background: ${arr[0]};
    height: ${arr[1]};
    width: ${arr[2]}
    `;
  });
};

window.addEventListener("keyup", (e) => {
  if (e.key == "Enter"){
    oddColorizer(input.value);
    input.value = "";
  }
});