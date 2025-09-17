// Hacktoberfest 2025 Contribution
// Author: Aashi Asati
// File: metaverse_aashi.js
// Description: Simple JavaScript functions to greet the Metaverse,
// check palindrome, generate Fibonacci series, and a basic calculator.

// 1) Greeting
function greet(name = "Contributor") {
    return 🌌 Welcome to the Metaverse, ${name}! 🎉;
}

// 2) Palindrome Checker
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}

// 3) Fibonacci Generator
function fibonacci(n) {
    if (n <= 0) return [];
    let seq = [0];
    if (n === 1) return seq;
    seq.push(1);
    while (seq.length < n) {
        seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
    }
    return seq;
}

// 4) Simple Calculator
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return b === 0 ? "Infinity (division by zero)" : a / b; }

// 5) Demo
function demo() {
    console.log(greet("Aashi Asati"));

    console.log("\n-- Palindrome Examples --");
    console.log("'madam' ->", isPalindrome("madam"));
    console.log("'Metaverse' ->", isPalindrome("Metaverse"));

    console.log("\n-- Fibonacci Example --");
    console.log("First 7 numbers:", fibonacci(7));

    console.log("\n-- Calculator Example --");
    let x = 12, y = 4;
    console.log(${x} + ${y} =, add(x, y));
    console.log(${x} - ${y} =, subtract(x, y));
    console.log(${x} * ${y} =, multiply(x, y));
    console.log(${x} / ${y} =, divide(x, y));
}

// Run demo if file is executed directly
demo();
