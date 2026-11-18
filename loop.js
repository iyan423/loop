// LESSON 4: Coding Practice 1 - For Loop

// Task 1: Print your name / text on 20 lines
console.log("=== TASK 1: Print Name 20 Times ===");
for (let i = 1; i <= 20; i++) {
    console.log("I'm Steve");
}

console.log("\n===================================\n");

// Task 2: Display a sequence of numbers from 1 to 20
console.log("=== TASK 2: Numbers 1 to 20 ===");
let numbers = "";
for (let i = 1; i <= 20; i++) {
    numbers += i + " ";
}
console.log(numbers);

console.log("\n===================================\n");

// Task 3: Display multiples of 5 from 5 to 100
console.log("=== TASK 3: Multiples of 5 (5 to 100) ===");
let multiples = "";
for (let i = 5; i <= 100; i += 5) {
    multiples += i + " ";
}
console.log(multiples);