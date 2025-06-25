//function statement = defining a function
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Function expression = assigning a function to a variable
const greetExpression = function(name) {
    console.log("Hello, " + name + "!");
}
greet("Alice");
greetExpression("Bob");

// function declaration = defining a function with the function keyword
function greetDeclaration(name) {
    console.log("Hello, " + name + "!");
} 

//anonymous function = a function without a name, often used as a callback
// function () {
//   console.log("This is an anonymous function.");
// }

//named function expression = a function expression with a name
const b= function namedFunction(name) {
    console.log("Hello, " + name + "!");
}

//arrow function = a concise syntax for writing functions
const greetArrow = (name) => {
    console.log("Hello, " + name + "!");
}

//anonymous arrow function = an arrow function without a name
const anonymousArrow = () => {
  console.log("This is an anonymous arrow function.");
}

// fetch function = a function that retrieves data from a server
fetch("user.json")
.then(response=>{
  console.log(response.json())
}).then(data=>{
  console.log(data);
}).catch(error=>{
  console.error("Error fetching data:", error);
})

