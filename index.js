// Iteration 1: Names and Input
const hacker1 = "Jorge";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Chrome";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters.`)
}

// Iteration 3: Loops
let newDriverName = "";
const driver = hacker1;

for (let i = 0; i < driver.length; i++) {
  if (i < driver.length - 1) {
    newDriverName += driver[i].toUpperCase() + " ";
  } else {
    newDriverName += driver[i].toUpperCase();
  }
}
console.log(newDriverName);

let newNavigatorName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  newNavigatorName += hacker2[i];
}

console.log(newNavigatorName);


if(hacker1[0] > hacker2[0]){
    console.log("The driver's name goes first.")
}else if(hacker1[0] < hacker2[0]){
    console.log("Yo, the navigator goes first, definitely.")
}else {
    console.log("What?! You both have the same name?")
}



// Bonus

// bonus 1 

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis turpis ut nulla placerat pharetra. Nullam vestibulum massa quis est faucibus, id lobortis lorem posuere. Nullam leo purus, convallis id ornare in, varius ut nisl. Nunc luctus nibh quis leo laoreet, ut dictum neque tristique. Maecenas ut blandit nunc, quis lacinia quam. Nunc sagittis vulputate enim non porttitor. Sed vel elit eget lacus iaculis faucibus id sit amet leo. Nulla auctor aliquet tortor, bibendum suscipit turpis dapibus ac. Mauris eu est ac diam sollicitudin rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque feugiat metus eu velit condimentum molestie eget eget erat. Nullam fermentum turpis auctor, efficitur mauris vitae, euismod mi. Sed pulvinar, mi molestie dictum bibendum, nunc diam egestas dui, in accumsan sem libero eget neque. Maecenas ultricies suscipit justo, sed pretium lectus pharetra id. Sed suscipit, metus a gravida rutrum, eros erat sollicitudin risus, at blandit odio erat eu nisl. Aenean orci lectus, scelerisque sed turpis vel, consectetur cursus ipsum. Curabitur eget iaculis est, quis aliquam nisl. Nullam tempus felis quis massa porta tempus. Sed ultricies consequat leo, at accumsan ligula hendrerit et. Nullam egestas et magna vel cursus. Aenean non placerat purus. Aenean suscipit magna nec mauris mollis accumsan. Suspendisse potenti. Suspendisse in magna vehicula, blandit leo eget, condimentum purus. Nulla semper turpis non risus laoreet, quis gravida mi posuere. Integer in sodales nisi. Ut feugiat urna sodales nisl scelerisque varius. Donec vehicula nibh sapien, vel hendrerit nisi fermentum sed. Vivamus quis arcu erat. In interdum justo egestas interdum congue. Aliquam erat volutpat. In hac habitasse platea dictumst. In auctor rhoncus dapibus. Morbi vehicula ipsum quam, a euismod tortor finibus et. Mauris vel ultricies massa, eget vestibulum nunc. Maecenas tristique risus odio, id auctor dui semper sit amet.";

const words = longText.split(' ');

console.log(words.length)

const etNumber = longText.split('et');

console.log(etNumber.length)


// bonus 2



const stringToCheck = "stac cats";

let reversedString = "";
for (let i = stringToCheck.length - 1; i >= 0; i--) {
  reversedString += stringToCheck[i].toLowerCase();
}

console.log(reversedString);

if (stringToCheck === reversedString) {
  console.log("String is a palindrome");
} else {
  console.log("Not a palindrome");
}
