//function constructor
//this is a constructor

// let person = function(name, yearOfBirth, job) {
//     this.name = name
//     this.yearOfBirth = yearOfBirth
//     this.job = job
//     // this.age = function() {
//     //     console.log(2016 - this.yearOfBirth)
//     // }
// }

// person.prototype.age = function() {
//     console.log(2016 - this.yearOfBirth)
// }
// person.prototype.lastname = 'Smith'


// let john = new person('john', 1990, 'teacher')
// let mark = new person('mark', 1969, 'teacher')
// let jane = new person('jane', 1948, 'teacher')
// mark.age()
// jane.age()
// john.age()
// console.log(mark.lastname)

//Object.create
/*
let personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth)
    }
}

let john = Object.create(personProto)
john.name = 'John'
john.yearOfBirth = 1990
john.job = 'Teacher'

let jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
})
*/

//Swapping number without third variable

// let a = 10  //a+b =21
// let b = 11  //b=21-11 a 21-10
// console.log(a,b)
// function swap(a,b) {
//     a = a+b //21
//     b = a-b //21-11=10
//     a = a-b //21-10=11
//     return [a,b]
// }

// let swapAmt = swap(a,b)
// swapAmt.forEach(x => {
//     console.log(x )
// })

//variable
// let a = 23
// let b = a
// a = 46
// console.log(a)
// console.log(b) 

// let obj1 = {
//     name: 'John',
//     age: 26
// }

// //object
// let obj2 = obj1
// obj1.age = 30
// console.log(obj1.age)
// console.log(obj2.age)

// //function
// let ag = 27
// let obj = {
//     name: 'Jonas',
//     city: 'Lisbon',
// }

// function change(ag,b) {
//     ag = 30
//     b.city = 'America'
// }
// change(ag, obj)
// console.log(ag,obj.city)

//Function accepting function 
// let array = [1965, 1950, 1990, 1960, 2006]

// function arrCalc(arr, fn) {
//     arrResult = []
//     for(let i = 0; i < arr.length; i++) {
//         arrResult.push(fn(arr[i]))
//     }
//     return arrResult
// }

// function calculateAge(el) {
//     return 2016 - el
// }

// function fullAge(el){
//     return el >= 30
// }

// function maxHeartRate(el) {
//     if(el >=20 && el <=80) {
//         return Math.round(206.9 -(0.67 * el))
//     } else {
//         return -1
//     }
// }

// let age = arrCalc(array, calculateAge)
// let fullage = arrCalc(age, fullAge)
// let rates = arrCalc(age, maxHeartRate)
// console.log(age)
// console.log(fullage)
// console.log(rates)

//Function returning function

// function interviewQuestion(job) {
//     if(job === 'designer') {
//         return function(name) {
//             console.log(name + ', Can you Please explain what UX design is to you?')
//         }
//     } else if ( job === 'teacher') {
//         return function(name) {
//             console.log(name + ', What subject do you teach ?')
//         }
//     } else {
//         return function(name) {
//             console.log('Hello! ' + name + ', what do you do?')
//         }
//     }
// }

// let teacherQuestion = interviewQuestion('teacher')
// let designerQuestion = interviewQuestion('designer')

// interviewQuestion('Army')('Jane')
// designerQuestion('Mark')
// teacherQuestion('John')


//IIFE
// function game() {
//     let score = Math.random() * 10
//     console.log(score >= 5)
// }

//game()
//if u give brackets to anonymous function it immediatley invokes itself
//in javascript what is inside a parenthesis cannnot be a statement
// (function() {
//     let score = Math.random() * 10
//     console.log(score >= 5)
// })()

//console.log(score)

// (function (goodluck) {
//     let scores = Math.random() * 10
//     console.log( scores >= 5 -goodluck )
// })(5)

///Closure

// function retirement(retirementAge) {
//     let a = ' year left until retirement.'
//     return function(yearOfBirth) {
//         let age = 2016 - yearOfBirth
//         console.log((retirementAge - age) + a)
//     }
// }

// let retirementUS = retirement(66)
// let retirementGermany = retirement(65)
// let retirementIceland = retirement(67)

// retirementUS(1990)
// retirementGermany(1990)
// retirementIceland(1990)
// retirement(66)(1990)
// retirement(60)(1989)

//doing thi with closures

// function interviewQuestion(job) {
//     return function(name) {
//         if(job === 'designer') {
//             console.log(name + ', Can you Please explain what UX design is to you?')
//         } else if ( job === 'teacher') {
//             console.log(name + ', What subject do you teach ?')
//         } else {
//             console.log('Hello! ' + name + ', what do you do?')
//         }
//     }
// }

// let jobTeach = interviewQuestion('teacher')
// let jobDesign = interviewQuestion('designer')
// let jobAny = interviewQuestion('Army')

// jobTeach('Jane')
// jobDesign('John')
// jobAny('Mark')

//Bind Call and apply

// let john = {
//     name: 'John',
//     age: 26,
//     job: 'teacher',
//     presentation: function(style, timeOfDay) {
//         if(style ===  'formal') {
//             console.log('Good ' + timeOfDay + ', Ladies and Gentlemen! I\'m ' + this.name + ', I\'m a '+
//             this.job + ' and I\'m ' + this.age + ' years old.')
//         } else if (style === 'friendly') {
//             console.log('Hey! What\'s up? I\'m '+ this.name + ', I\'m a '+
//             this.job + ' and I\'m ' + this.age + ' years old. Have a nice '+ timeOfDay)
//         }
//     }
// }
// let emily = {
//     name: 'Emily',
//     age: 35,
//     job: 'designer',
// }


// john.presentation('formal', 'morning')

// //CALL method --> method borrowing 
// john.presentation.call(emily, 'friendly', 'afternoon')

// //Apply method -->it accepts this method and instead of parameters it accepts arrays
// //john.presentation.apply(emily, ['formal', 'afternoon'])

// //Bind Method -->allows to preset or currying 

// let johnFriendly = john.presentation.bind(john, 'friendly')
// johnFriendly('morning')
// johnFriendly('night')

// let emilyFormal = john.presentation.bind(emily, 'formal')
// emilyFormal('Afternoon')


// let array = [1965, 1950, 1990, 1960, 2006]

// function arrCalc(arr, fn) {
//     arrResult = []
//     for(let i = 0; i < arr.length; i++) {
//         arrResult.push(fn(arr[i]))
//     }
//     return arrResult
// }

// function calculateAge(el) {
//     return 2016 - el
// }

// function fullAge(limit, el){
//     return el >= limit
// }

// let ages = arrayCalc(array, calculateAge)
// let fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
// console.log(ages);
// console.log(fullJapan);


// let arr = [
//      obj1 = { x: 1, y: 1 }, 
//      obj1 = { x: 4, y: 5 }, 
//      obj1 = { x: 2, y: 2 }, 
//      obj1 = { x: 3, y: 3 }, 
//      obj1 = { x: 5, y: 6 }, 
// ]
// // let arr1 = [1,2,3,4,5,6]
//  let count = 0 
// // for(let i=0; i< arr.length; i++) {
// //     if(arr[i].x === arr[i].y) {
// //         count++
// //     }
// // }
// console.log(count)

// let counter = arr.filter( a => a.x===a.y).length
// console.log(counter)


// class Rectangle {
//     constructor(w, h) {
//         this.w = w
//         this.h = h
//     }
// }

// Rectangle.prototype.area = function(w,h) {
//     let area = w*h
//     console.log(area)
// }

// let squareArea = new Rectangle()
// squareArea.area(4,4)

let count = 0
document.getElementById('btn').textContent = 0
function numbChange() {
count++
document.getElementById('btn').textContent = count
}

//Time conversion into military time
//  let d = new Date()
//  let s = d.toLocaleTimeString()
// console.log(time)
// let timeArray = time.split(" ")
// timeArray.pop()
// let newTime = timeArray[0]
// newTime = newTime.split(':')
// console.log(newTime)
// let hour = parseInt(newTime[0])
// if(time.includes('PM')){
//     hour+=12
//     newTime[0]=hour.toString()
//     console.log(newTime.join(":"))
// } else {
//     console.log(time)
// }

// let time = '12:45:54PM';

// if(time.includes('PM')){
// let s = time.split('P');
// let realTime = s[0].toString();
// let timeArray = realTime.split(':');
// let hour = parseInt(timeArray[0]);
// if(hour === 12){
//     hour = '12';
//     timeArray[0] = hour.toString();
//     time = timeArray.join(":"); 
// } else {
//     hour+=12;
//     timeArray[0] = hour.toString();
//     time = timeArray.join(":");
// }

// console.log(time)

// }else if(time.includes('AM')) {
//     let s = time.split('A');
//     let realTime = s[0].toString();
//     let timeArray = realTime.split(':');
//     let hour = parseInt(timeArray[0]);
//     if(hour === 12) {
//         hour = '00'
//         timeArray[0] = hour
//     }
//     time= timeArray.join(':')
//     console.log(time)
// }

// else{
//     time = pareInt(time);
// }


// function gradingStudents(grades) {
//     // Write your code here
//     let g=0;
// for(let i = 0;i<grades.length; i++){
//     if(grades[i]>=38)
//           {
//                if(grades[i]+(5-grades[i]%5)-grades[i]<3)
//                grades[i]=(grades[i]+(5-grades[i]%5));
//           } 
//         }
//         return grades;
// }

//circular array rotation
// let arr = [3,4,5]
// let r = 2
// let m = [1,2]

// for(let i = 0; i < r; i++) {
//     arr.unshift(arr.pop())
// }
// let newArr = m.map(n => arr[n])
// console.log(newArr)
// console.log(arr)

// let arr1 = [6,7,8]
// let sum = arr.map((i,index) => i+arr1[index])
// //[expected result] [9,11,13]
// console.log(sum)

// arrow function
// let n = [1,2,3,4,5]
// let arr = []

// for(let i = 0; i < n.length; i++) {
//     if(n[i]%2 === 0) {
//       arr.push( n[i] * 2 )
//     }
//     else{
//       arr.push( n[i] * 3 )
//     }
// }
// let arr1 = n.map(a => a = (a%2===0) ? a*2 : a*3)
// console.log(arr)
// console.log(arr1)


//Counting of strings

// let h = "What do you want?"
// h = h.toLowerCase()
// let obj = {}
// for(let i = 0; i < h.length; i++ ){
//     let char = h[i]
//     if(/[a-z0-9]/.test(char)>0){
//         if(obj[char] > 0){
//             obj[char]++
//         }else {
//             obj[char] = 1
//         }
//     } 
// }
// console.log(obj)

//apple and orange

// let s = 7
// let t = 11
// let a = 5
// let b = 15
// let apple = [-2,2,1]
// let orange = [5, -6]

// const disApple = apple.map(n => n+a).filter(n => (n>=s && n<=t)).length
// const disOrange = orange.map(n => n+b).filter(n => (n>=s && n<=t)).length
// console.log(disApple)
// console.log(disOrange)

//Kangaroo
// function kangaroo(x1, v1, x2, v2) {
    // if((x2 > x1) && (v2 > v1)){
    //     console.log('NO');
    // } else {
    //     while(x2 > x1) {
    //         x1 += v1;
    //         x2 += v2;

    //         if(x2 === x1) {
    //             console.log('YES');
    //             break;
    //         }
    //         else if(x1 > x2) {
    //             console.log('NO');
    //             break;
    //         }
    //     }
    // }
//                 var calculate=function(){
//                 if((x1<x2)&&((v1<v2)||(v1==v2))){
//                  return "NO"
//                 }
//                 else{
//                     while(Math.sign(difference)!=-1)
//                     { 
//                         x1+=v1; 
//                         x2+=v2; 
//                         difference=x2-x1; 
//                         if(difference==0){ 
//                             return "YES" 
//                         } 
//                     } 
//                 }                 
//                 return 'NO'
//         }(); 
//     return calculate; 
// }
// kangaroo(0,2,5,3)

//Between two sets
//1. all factors of integer
//2. integer considered are factor of all elements of second array
//a = [2, 6] b = [24, 36] //how many number are there which can divide a and be factor of b as well
//Solution 1 find LCM of a 2 find GCD of b 3 count the number of multiple of LCM that evenly divides the GCD 
// let a = [2, 6], b = [24, 36]



//date problem
//Day//month//year
// let date = "11/25/2018"
// let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday']

// let a = new Date(date)
// console.log(a.toLocaleDateString())
// console.log(days[a.getDay()])
// console.log(a.getDay())











