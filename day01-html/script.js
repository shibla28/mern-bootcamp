// ===== JavaScript Basics =====
//1. Variables
const myName = "Shibla";
const myCity = "Kerala";
const myGoal = "Mern Developer";
let currentDay = 8;
let isLearning = true;

//2. Console logs
console.log("Hello from JavScript!");
console.log("My name is", myName);
console.log("Day", currentDay);
console.log("Is learning", isLearning);

//3. Data types check
console.log(typeof myName);
console.log(typeof currentDay);
console.log(typeof isLearning);

//4. Template literals
let intro = `Hi! Iam ${myName} from ${myCity}.
My goal is to become a ${myGoal}
currently on Day ${currentDay} of my journey`;

console.log(intro);

// 5. String methods
console.log(myName.toUpperCase());
console.log(myName.length);
console.log(myName.includes("Shi"));
console.log(myGoal.replace("MERN", "Full Stack"));

// 6. Array
let skills = ["HTML", "CSS", "JavaScript"];
console.log(skills);
console.log(skills.length);
console.log(skills[0]);

// 7. Object
let developer = {
  name: myName,
  city: myCity,
  goal: myGoal,
  day: currentDay,
  skills: skills,
};

console.log(developer);
console.log(developer.name);
console.log(developer.skills);
