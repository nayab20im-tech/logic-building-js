// Task 1: Map object for student details
const studentMap = new Map();

// Adding details
studentMap.set('name', 'Mahnoor');
studentMap.set('age', 22);
studentMap.set('city', 'Islamabad');

// Retrieve a specific value
console.log("Age:", studentMap.get('age'));

// Check if a key exists
console.log("Has city key?", studentMap.has('city'));

// Delete one key
studentMap.delete('city');
console.log("Map after deletion:", studentMap);


// Task 2: Callback function to perform addition
function displayResult(sum) {
    console.log("The result of addition is: " + sum);
}

function addNumbers(num1, num2, callback) {
    let result = num1 + num2;
    callback(result);
}

addNumbers(15, 25, displayResult);


// Task 3: forEach to print elements multiplied by 2
let myNumbers = [10, 20, 30, 40, 50];

myNumbers.forEach((num) => {
    console.log(num," multiplied by 2:", num * 2);
});


// Task 4: Combine forEach and setTimeout for staggered delay
let delayItems = ["Apple", "Banana", "Cherry"];

delayItems.forEach((item, index) => {
    
    setTimeout(() => {
        console.log("Delayed Item:", item);
    }, 1000 * (index + 1));
});


// Task 5: checkUserLogin with Promises and Async/Await
function checkUserLogin(username) {
    return new Promise((resolve, reject) => {
        const validUser = "Mahnoor_Admin";
        
        if (username === validUser) {
            resolve("Login Success: Welcome " + username);
        } else {
            reject("Error: Invalid Username");
        }
    });
}

// Handling the promise using async/await and try...catch
async function performLogin() {
    try {
        
        let message = await checkUserLogin("Mahnoor_Admin"); 
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}

performLogin();