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

let john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if(style ===  'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and Gentlemen! I\'m ' + this.name + ', I\'m a '+
            this.job + ' and I\'m ' + this.age + ' years old.')
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m '+ this.name + ', I\'m a '+
            this.job + ' and I\'m ' + this.age + ' years old. Have a nice '+ timeOfDay)
        }
    }
}
let emily = {
    name: 'Emily',
    age: 35,
    job: 'designer',
}


john.presentation('formal', 'morning')

//CALL method --> method borrowing 
john.presentation.call(emily, 'friendly', 'afternoon')

//Apply method -->it accepts this method and instead of parameters it accepts arrays
//john.presentation.apply(emily, ['formal', 'afternoon'])

//Bind Method -->allows to preset or currying 

let johnFriendly = john.presentation.bind(john, 'friendly')
johnFriendly('morning')
johnFriendly('night')

let emilyFormal = john.presentation.bind(emily, 'formal')
emilyFormal('Afternoon')


let array = [1965, 1950, 1990, 1960, 2006]

function arrCalc(arr, fn) {
    arrResult = []
    for(let i = 0; i < arr.length; i++) {
        arrResult.push(fn(arr[i]))
    }
    return arrResult
}

function calculateAge(el) {
    return 2016 - el
}

function fullAge(limit, el){
    return el >= limit
}

let ages = arrayCalc(array, calculateAge)
let fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);



