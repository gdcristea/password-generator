
//design: https://www.figma.com/file/YRO9Iw5IYaOorjnRyNz4bV/Random-Password-Generator?node-id=0%3A1

//Have an array to hold all possible chars you may want to include in your passwords-lower case letters, uppercase letters, numbers, symbols; 
let allChars = ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "~", "`", "!","@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'", "<", ",", ">", ".",";", "?", "/"];

let passwordFirst = [];
let passwordSecond = [];
let passwordThird = [];
let passwordFourth = [];

//pick the HTML elements which content I want to change using JS
let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let password3 = document.getElementById("password3");
let password4 = document.getElementById("password4");

//help to pick a random item out of the allChars (between 0-92. why? there are 93 items in the above array => indexes between 0 - 92 (the first item has an index of 0, not 1))
//Math.random() => a number between 0.000 - 0.999 => * 93 = a number between 0.000 - 92.999 => by using Math.floor() => a number between 0 - 92 => this covers the indexes between 0 - 92 the array allChars contain.  
let randomNumber = Math.floor(Math.random()*93);

//You will have a button to generate 4 random password options;
function generate() {
    for (let i = 0; i < 10; i++) { 
        randomNumber = Math.floor(Math.random()*93);
        passwordFirst.push(allChars[randomNumber]);

        randomNumber = Math.floor(Math.random()*93);
        passwordSecond.push(allChars[randomNumber]);

        randomNumber = Math.floor(Math.random()*93);
        passwordThird.push(allChars[randomNumber]);

        randomNumber = Math.floor(Math.random()*93);
        passwordFourth.push(allChars[randomNumber]);
    }

    // Display those 4 password options;
    password1.textContent = passwordFirst.join("");
    password2.textContent = passwordSecond.join("");
    password3.textContent = passwordThird.join("");
    password4.textContent = passwordFourth.join("");

    //generate another set of passwords each time the user presses the button, do not add on the existing ones
    passwordFirst = [];
    passwordSecond = [];
    passwordThird = [];
    passwordFourth = [];
}




