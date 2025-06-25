//callback function example
function greeting(){
  console.log("Hello Namaste Mama");
}

setTimeout(greeting, 3000);// This will call the greeting function after 3 seconds

//setTimeout is a function that executes a callback function after a specified delay (in milliseconds).

//High Order functions are functions that take  functions as arguments or return a function as their result.


function greeting(greeting){
  return function name(name){
    console.log(greeting ,name);
  }
}

const greetNamaste = greeting("Namaste");
greetNamaste("Mama"); // Outputs: Namaste Mama


// promises definition
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation

//Async/await is a syntax that allows you to write asynchronous code in a synchronous manner, making it easier to read and maintain.
function promiseFunc(){
  return new Promise(function(resolve, reject) {
    resolve("Promise resolved successfully!");
  });
}

promiseFunc().then(function(data) {
  console.log(data); // Outputs: Promise resolved successfully!

})



function statusFunction(status){
  return new Promise(function(resolve,reject){
    if(status == "NoSuccess")
    {
      resolve("Operation was successful!");
    }else{
      reject("Operation failed!");
    }
  })
}

// statusFunction("Success").then(function(data){
//   console.log(data);
// }).catch(function(error){
//   console.log(error);
// })

async function enrichment() {
  try {
    const data = await statusFunction("Success");
    console.log(data);
  } catch (error) {
    console.log(error);
    
  }
}

enrichment();

let details= {
  firstName: "John",
  lastName: "Doe",
  email:"john@gmail.com",
  password: "123456"
}

function detailsValidation(email, password){
  return new Promise(function(resolve, reject){
    if(email === details.email && password === details.password){
      resolve("Login successful!");
    }else{
      reject("Login failed! Invalid email or password.");
    }
  })
}

async function login(email, password) {
  try{
    const result = await detailsValidation("john2@gmail.com", "123456");
    console.log(result);
  }catch(error) {
    console.log(error);
  }
}

login();