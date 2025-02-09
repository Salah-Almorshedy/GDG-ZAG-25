//  Videos From 1 to 9


// Assignment 1

/*
<!-- <script>
    // Code One
    // will not work because file js will work before loading elements and will not find element has id = "el"
    document.getElementById("el").style.color = "red";
</script> -->


<!-- <script>
    // Code Two
    // will work because file js work after loading elements and  find element has id = "el"
    window.onload = function () {
    document.getElementById("el").style.color = "red";
};
</script> -->


// this code wrtitten before colsing body
<!-- <script>
    // Code Three
    // will work because file js work after loading elements and  find element has id = "el"
    document.getElementById("el").style.color = "red";
</script> -->
*/

/////////////////////////////////////////////////////////

// Assignment 2

document.writeln("<h1>Elzero</h1>");
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "Arial";

/////////////////////////////////////////////////////////

// Assignment 3


console.log("%cElzero %cWeb %cSchool" , "color:red;font-size:40px" , "color:green;font-size:40px;font-weight:bold" , "color:blue;font-size:40px");

/////////////////////////////////////////////////////////


// Assignment 4

console.group("Group1");
console.log("message one");
console.log("message two");
console.group("Child Group");
console.log("message one");
console.log("message two");
console.group("Grand child Group");
console.log("message one");
console.log("message two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("message one");
console.log("message two");
console.groupEnd();

/////////////////////////////////////////////////////////


// Assignment 5

console.table(["Elzero" , "Sameh" , "Aya" , "Salah" , "Gamal"]);


/////////////////////////////////////////////////////////


// Assignment 6

// First method make a single comment

// console.log("Iam In Console");
// document.write("Iam In Page");


// Secound method double comment

/*window.onload(console.log("Iam In Console"));
document.write("Iam In Page");*/



/////////////////////////////////////////////////////////



// Videos From 10 to 17



// Variable And Concatenation Challenge


let theTitle , theDescription , theDate;

theTitle = "Elzero";
theDescription = "Elzero Web School";
theDate = "25/10";

let mainDiv = `
    <div class="mainDiv">
        <h3>${theTitle}</h3>
        <p>${theDescription}</p>
        <span>${theDate}</span>
    </div>
`

for(let i = 0 ; i < 4 ; i++){
    document.write(mainDiv)
}


////////////////////////////////////////////////////////////////////////


// Assignment One


let numberOne = 10;
let numberTwo = 20;

console.log(numberOne + "" + numberTwo);
console.log(typeof(numberOne + "" + numberTwo));
console.log(`${numberOne}${numberTwo}`)
console.log(typeof `${numberOne}${numberTwo}`);

console.log(numberTwo +  "\n" + numberOne);

console.log(`${numberTwo}
${numberOne}`);



////////////////////////////////////////////////////////////////////////


// Asignment Two

// console.log(elzero.innerHTML); // object
// console.log(typeof elzero); // object


///////////////////////////////////////////////////////////////////////


// Assignment three

console.log("\`I'm In \n \\\\ \n Love \\\\ \"\"\" \n ++ With ++ \n \\\"\"\"\\\"\"\" \n \"\"Javascript\"\"\`\`")

//////////////////////////////////////////////////////////////////////


// Assignment four

let a = 21;
let b = 20;

console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`);
