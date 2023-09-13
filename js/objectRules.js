/* =========== Example 1 ============= */

// let myCustomObj = {
//     name: 'Amima Hoque',
//     age: 21,
//     job: 'student',
//     msg: function () {
//         console.log(this);
//     }
// }
// myCustomObj.msg();
// console.log(myCustomObj);

/* =========== Example 2 ============= */

// let myCustomObj = {
//     name: 'Amima Hoque',
//     age: 8,
//     job: 'Student',
//     anotherObj: {
//         name: 'Arkamul Hoque',
//         age: 6,
//         msg: function () {
//             console.log(`${this.name} is ${this.age} years old.`);
//         }
//     }
// }
// myCustomObj.anotherObj.msg();

/* =========== Example 3 ============= */

// let myCustomObj = {
//     name: 'Amima Hoque',
//     age: 8,
//     job: 'Student',
//     anotherObj: {
//         name: 'Arkamul Hoque',
//         age: 6,
//         msg: function () {
//             console.log(`${this.name} is ${this.age} years old.`);
//         }
//     }
// }
// myCustomObj.anotherObj.msg.call(myCustomObj);


/* =========== Example 3 ============= */

// let arkam = {
//     name: 'Arkamul Hoque',
//     dob: 2017,
//     age: function (currentYear) {
//         console.log(`${this, this.name} is ${currentYear - this.dob} years old.`)
//     }
// }

// let zarif = {
//     name: 'Abdullah Zarif',
//     dob: 2018
// }

// arkam.age(2023);
// arkam.age.call(zarif, 2023);


/* =========== Example 4 ============= */

// let myCustomObj = {
//     name: 'Zarif Abdullah',
//     age: 5,
//     job: 'Student',
//     anotherObj: {
//         name: 'Izan Abdullah',
//         age: 1,
//         value: function () {
//             console.log(`My name is ${this.name}.`);
//         }
//     }
// }

// let anotherFunc = myCustomObj.anotherObj.value.bind(myCustomObj);
// anotherFunc();


/* =========== Example 5 ============= */

let zarif = {
    name: 'Zarif Abdullah',
    dob: 2018,
    age: function (currentYear, msg) {
        console.log(`${msg}, ${this.name} is ${currentYear - this.dob} years old.`)
    }
}

let izan = {
    name: 'Izan Abdullah',
    dob: 2021
}

let izanAge = zarif.age.bind(izan, 2023);
let inzaAgeMsg = izanAge('Hello');
//console.log(izanAge);

// let demoText = document.getElementById('demo-text');
// demoText.innerHTML = inzaAgeMsg;