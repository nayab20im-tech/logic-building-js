// Task 1

// Array of numbers
let array1 = [1,2,3,4,5];

// Original Array printing

console.log(`Original Array : ${array1}`);

// middle index finding
var mid = Math.floor(array1.length / 2);

//Remove one element from the middle
array1.splice(mid,1);

//Array after removing middle element
console.log(`Array after removing middle element : ${array1}`);

// Add two elements at the middle
array1.splice(mid,0,10,12);

// Printing
console.log("Task 1 output : ");
console.log(`Updated Array after adding two new elements: ${array1}`);



//Task 2

// Step 1: Create an object named Hospital using object literal notation

let Hospital ={
    hospitalName : "City Hospital",
    location : "Sialkot Road Gujranwala",
    doctor : {
        name : "Dr. Tahir Javed",
        specialization : "MBBS"
    },
    patient : {
        firstName : "Ayeza",
        lastName : "Luqman",
        age : 6
    }
}
console.log(Hospital);

// Step 2 : Access Properties

console.log(`Doctor name : ${Hospital.doctor.name}`);

console.log(`Patient last name : ${Hospital.patient.lastName}`);

// Step 3 : Modify Properties

Hospital.doctor.specialization = "BDS";

console.log(`Updated Doctor specialization : ${Hospital.doctor.specialization}`);

Hospital.patient.age = 7;

console.log(`Updated Patient age : ${Hospital.patient.age}`);

// Step 4 : Add New Property

Hospital.patient.disease = "Fever";

console.log(`Updated Patient object with new property : ${Hospital.patient.firstName} ${Hospital.patient.lastName} has ${Hospital.patient.disease}`);



// Task 3

// Swapping two variable values using array destructuring 

let var1 = 10;
let var2 = 20;

console.log(`Before swapping : var1 = ${var1} , var2 = ${var2}`);

[var1,var2] = [var2,var1];

console.log("Task 3 output : ");

console.log(`After swapping : var1 = ${var1} , var2 = ${var2}`);



// Task4

const Student = {
    Name : "Fizza",
    Age : 25,
    course : "Computer Science"
}

// Destructuring the Student object to extract properties into variables

const {Name, Age, course} = Student;

console.log("Task 4 output : ");

console.log(`Student name : ${Name}`);
console.log(`Student age : ${Age}`);
console.log(`Student course : ${course}`);



// Task 5 

// Merging two objects using spread operator

const obj1 = {
    id : 1,
    source : "New York"
}

const obj2 ={
    price : 20000,
    destination : "China"
}

const mergeObjects = {...obj1,...obj2};

console.log("Task 5 output : ",mergeObjects);



//Task 6

const originalObject = {
    a : 10,
    b : 30
}

const copiedObject = {...originalObject};

console.log("Task 6 output : ",copiedObject);




// Task 7

// Create an arrow function that returns a string without using the return keyword

let message = () => "This is an arrow function!";
console.log("Task 7 output : ",message());

