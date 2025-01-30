//1, Create a variable called carName, assign the value Volvo to it.

let carName = 'Volvo';
console.log(carName);


//2, On one single line, declare three variables with the following names and values.

let firstName= "John"; //1st Variable Name
let lastName = "Doe"; //2nd Variable Name
let age = "35"; //3rd Variable Name and value both


//3, Use the correct assignment operator that will result in x being 50 (same as x = x * y). 

x = 10;
y = 5;
x *= y
console.log(x); //answer is 50


// 4, Use comments to describe the correct data type of the following variables.

let length = 16;          //data type: number
let lastName = "Johnson"; //data type: string

const x = {
  firstName: "John",  
  lastName: "Doe"
};  //data type: object


//5, Execute the function named myFunction.

function myFunction() {
  alert("Hello World!");
}
myFunction(); //answer: Hello World!


//6, Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").

  let person = {
    name: "John",
    age: 50
  };
  alert("John is " + person.age); // answer: John is 50


//7, The <button> element should do something when someone clicks on it. Try to fix it!

<script>
    function myFunction() {
        alert("Button clicked successfully!");
}
</script>

//8, Array Related Question 
//1.alert the number of items in array

const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length);

//2, Change the first item of Brand to "Ford"

const Brand = ["Volvo", "Jeep", "Mercedes"];
Brand[0] = "Ford"
alert(Brand[0]);


//9, Math Related Problems

1. Math.random() //correct Math method to create a random number.
2. Math.max(10,20) //correct Math method to return the largest number of 10 and 20.
3. Math.sqrt(9) //correct Math method to get the square root of 9.


//10, comparison operator related problems! 

Choose the correct comparison operator to alert true, when x is greater than y. 
x = 10;
y = 5;

alert(x > y); //answer

//Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".

alert(age < 18 ? "Too young" : "Old enough"); //answer
