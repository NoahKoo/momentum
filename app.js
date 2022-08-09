const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  console.log("Please wirte a positive number");
} else if (age < 18) {
  console.log("You are too young to smoke.");
} else if (age >= 18 && age <= 50) {
  console.log("You can smoke");
} else if (age > 50 && age <= 80) {
  console.log("You'd better not to smoke");
} else if (age === 100) {
  console.log("Wow you are wise");
} else if (age > 80) {
  console.log("Just do whatever you want");
}
