// Defition of states
const numberStudents = 4;
const grades = "100 90 30 25";
let output = 0;

// Puting in to a list
const gradesArray = grades.split(" ");

// Ordering the list
const sortArray = gradesArray.slice().sort((a, b) => b - a);

// Checking what has changed
for (i = 0; i < numberStudents;i++) {
    if (sortArray[i] === gradesArray[i]) {
        output++;
    }
}

console.log(sortArray);
console.log(gradesArray);
console.log(output);