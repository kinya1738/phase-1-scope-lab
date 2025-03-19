// Write your solution in this file!
// Declare customerName in global scope
var customerName = 'bob';  // Global variable

// 1) returns the customerName:
function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase // Returns the value of customerName
}

// 2) modifies the customerName variable:
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase(); // Modifies the customerName
}

// 3) setBestCustomer:
var bestCustomer;

function setBestCustomer() {
  bestCustomer = "not bob"; // Sets bestCustomer to customerName
}

// 4) overwrites the best customer:
function overwriteBestCustomer() {
  bestCustomer = "maybe bob"; 
  
}

// 5) unsuccessfully tries to reassign the least favorite customer:
const leastFavoriteCustomer = 'Charlie'; // `const` makes it unmodifiable

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "Dave"; // This will throw an error
}


