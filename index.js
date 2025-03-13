// Write your solution in this file!
// Declare customerName in global scope
let customerName = 'bob';  // Global variable

// 1) returns the customerName:
function getCustomerName() {
  return customerName; // Returns the value of customerName
}

// 2) modifies the customerName variable:
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase(); // Modifies the customerName
}

// 3) setBestCustomer:
let bestCustomer;

function setBestCustomer() {
  bestCustomer = customerName; // Sets bestCustomer to customerName
}

// 4) overwrites the best customer:
function overwriteBestCustomer() {
  bestCustomer = 'Alice'; // Overwrites bestCustomer
}

// 5) unsuccessfully tries to reassign the least favorite customer:
const leastFavoriteCustomer = 'Charlie'; // `const` makes it unmodifiable

function changeLeastFavoriteCustomer() {
  try {
    leastFavoriteCustomer = 'Dave';  // Attempting reassignment
  } catch (e) {
    console.error('Error:', e.message); // Catch the error and log it
  }
}

