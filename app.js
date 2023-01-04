console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

//Exercise 1
/**/
 
let favNum = 50;
let promptNum = prompt(`Type a number 1-100`);

if(Math.abs(favNum - promptNum) >= 25) {
  console.log( `way off`);
} else if (promptNum < favNum) {
  console.log(`too low`);
} else if (promptNum > favNum) {
  console.log(`too high`);
} else {
  console.log(`Congrats!`);
}

//Exercise 2

/* let birthMonth = prompt("What is your birth Month?").toLowerCase();

switch(birthMonth) {
  case `january`:
  case `february`:
  case `december`:
    console.log(`Winter`);
    break;
  case `march`:
  case `april`:
  case `may`:
    console.log(`Spring`);
    break;
  case `june`:
  case `july`:
  case `august`:
      console.log(`Summer`);
      break;
  case `september`:
  case `october`:
  case `november`:
    console.log(`Fall`);
    break;
  default:
    console.log(`please type a valid month`)
    break;
}
*/

//Exercise 3
/*
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case `01`:
    type = "Tank top";
    break;
  case `02`:
    type = "T-Shirt";
    break;
  case `03`:
    type = "Long Sleeve";
    break;
  case `04`:
    type == "Sweat Shirt";
    break;
  default:
    type = "Other";
    break;
}

switch (colorId) {
  case `BL`:
    color = "Black";
    break;
  case `BL`:
    color = "Blue";
    break;
  case `RD`:
    color = "Red";
    break;
  case `PU`:
    color = "Purple";
    break;
  default:
    color = "White";
    break;
}

switch (sizeId) {
  case `S`:
    size = "Small";
    break;
  case `M`:
    size = "Medium";
    break;
  case `L`:
    size = "Large";
    break;
  case `XL`:
    size = "Extra Large";
    break;
  default:
    size = "One size fits all";
    break;
}

console.log(`Product: ${size} ${color} ${type}`);
*/
