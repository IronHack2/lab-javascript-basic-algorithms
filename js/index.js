// Iteration 1: Names and Input

let hacker1 = "Ana";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Ismael"


console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

let space = (' ')

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it` + hacker1.length + `hascaracters`);
} 
else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has` + space + hacker2.length + space + `caracters`);
}
else  console.log (`wow, you both got equally long names` +hacker1.length + hacker2.length+ `caracters`);

// console.log(` It seems that the navigator has the longest name, it has ${hacker2.length} caracters`);



// // Iteration 3: Loops

let contrario = ['leamsI, A N A']

for (hacker1 of contrario){
    console.log(hacker1);
}

for (let letra = hacker2.length; letra >= 0; letra -= 1) {
    console.log(hacker2[letra]);
}

let index = 0;

 while (index <= hacker2.length) {
    console.log(hacker2 [index])
    index += 1;
}

for (let letter of hacker2){
    console.log(letter);
}


console.log(hacker1.toUpperCase());


