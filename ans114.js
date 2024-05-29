"use strict";
//Q 114
// Creates a Map to store student IDs (keys) and names (values)
const students = new Map();
students.set(1, "Asad");
students.set(2, "Babar");
students.set(3, "Chandu");
// Iterates over the Map and logs each student ID and name
students.forEach((name, id) => {
    console.log(`Student ID: ${id}, Name: ${name}`);
});
// This loop goes through each student and logs their ID and name.
