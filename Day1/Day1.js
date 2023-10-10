// Print Hello World

console.log('Hello World..!');

// Single line comment

/*
Multi line comment
Multi line comment
Multi line comment
*/

/**************** Variables **************/

// let x;
// x= 10;

// let x = 10;
// let y, z;
// y = 10;
// z = 10;

// let x= 0, y= 20, z= 10;

// Meaningful names 

// let firstName = 'John', lastName = 'Adam';

    /* 
     OPERATORS:
      1- Assignment
      2- Arithmetic
      3- Comparison
      4- Logical
      5-Type Operator
      6- Bitwise operator 
   */
        /*
        Arithmetic operators 
        + Addition
        - Subt
        * Multiply
        / Divide
        % Modulus
        ** Exponential
        ++ increment
        -- decrement

        */

        // Arithmetic operators

// let a= 6, b = 3;
// let result = a / b;
// console.log('Result is: '+result);

// let e = 10;

// console.log(++e);

                    //    Assignment operator
// let x = 10;
// // x = 10 + 20;

// x+= 20;   // x= 10 + 20;

         // Comparision operator 

// let x=10, y=20;

// let result = x >= y ;
// console.log(result);


    //   Ternary operator

    /* 
    Ternary operator is like if-then-else operator
    condition ? value if true : value if false
    */

    // let x= 10, y= 20;

    // console.log(x > y ? x : y);

        //  If and else statement

// let x = 5, y = 20;

// if(x > y){
//     console.log('x greater than y');
// }else if(x === y){
//     console.log('x and y are equal');
// }else{
//     console.log('x less than y');
// }


//    Switch statement

let starRating = 4;

switch (starRating) {
    case 1:
        console.log('vary Bad');
        break;
    case 2:
        console.log('bad');
        break;
    case 3:
        console.log('Average');
        break;
    case 4:
        console.log('good');    
        break;
    case 5:
        console.log('excellent');    
        break;
    default:
        console.log('Please select a valid rating between 1 and 5');
        break;
}

        //  for Lop //
let y = 2

for (let index = 1; index <= 10; index++) {
    console.log(y + " x "  + index + " = " +y * index );
    
}

//  while Lop //
// let counter = 1;
// while (counter <= 10) {
//     console.log('counter = ' + counter);
//     counter++;
// }
// let counter1 = 1;
// while (counter1 >= 10) {
//     console.log('counter = ' + counter1);
//     counter1++;
// }

// Do while loop
let counter = 1
do{
    console.log('counter = ' + counter);
    counter++;
}while (counter <= 10)

let counter1 = 1
do{
    console.log('counter1 = ' + counter1);
    counter1++;
}while (counter1 >= 10)

        // Arrays 

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(numbers[3]);

let fruits = ['apple', 'orange', 'banana', 'stawberry'];
console.log(fruits[2]);

let cars = new Array('toyota', 'ford', 'BMW')
console.log(cars[1]);
cars[1] = 'Civic';
console.log(cars[1]);

fruits.push('Mango');
console.log(fruits);

 console.log(fruits.length);

 let x;

 for(x in fruits){
        console.log(fruits[x]);
 }

        for(x in cars){
                console.log(cars[x]);
        }


console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift('stawberry');
console.log(fruits);

delete fruits[0]
console.log(fruits);
fruits[0] = 'Grapes';
console.log(fruits);

fruits.splice(0,1,'Stawberry');
console.log(fruits);

let bananaFruits = fruits.slice(2)
console.log(bananaFruits);

let evenNumbers = [2,4,6,8]
let oddNumbers = [1,3,5,7];
let primeNumbers = [2,3,5,7];
let numbers = evenNumbers.concat(oddNumbers, primeNumbers);
console.log(numbers);


//***************** Functions *******************/

// function funcName(par1, pra2) {
//         // statement
// }

function add(a,b) {
       return a + b
}
let result = add(2,3);
console.log(result);

//********************** OOP Classes ************************/

// class ClassName{
//         // Sayntex
// }

class Employee{
        constructor(name, id){
                this.name = name;
                this.id = id;
        }
}
let emp1 = new Employee('Hamza', 6492);
let emp2 = new Employee('Umer', 6489);
console.log(emp1.name + " " + emp1.id);
console.log(emp2.name + " " + emp2.id);


class Student{
        setStuDetail(name, roll_no, email){
                this.name = name;
                this.roll_no = roll_no;
                this.email = email;
        }

        getStuName(){
                 return this.name;
        }
        getStuEmail(){
                return this.email;
        }
        getStuRoll_no(){
                return this.roll_no;
        }

}

let stu1 = new Student();
let stu2 = new Student();


stu1.setStuDetail('Hamza', 6492, 'hamza@gmail.com');
console.log(stu1.getStuName());
console.log(stu1.getStuRoll_no());
console.log(stu1.getStuEmail());
stu2.setStuDetail('Umer', 6489, 'umer@gmail.com');
console.log(stu2.getStuName());
console.log(stu2.getStuRoll_no());
console.log(stu2.getStuEmail());