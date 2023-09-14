// let Person = function (name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job
// }
// let zarif = new Person('Zarif Abdullah', 5, 'Student');
// let zarifName = zarif.name;
// let zarifAge = zarif.age;
// let zarifJob = zarif.job;
// //console.log(zarifName);

// const demoText = document.getElementById('demo-text');
// demoText.innerText = `${zarifName} is ${zarifJob} and ${zarifAge} years old.`;

/* ==== Construction Function with Method ===== */

let PersonWithMethod = function (name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.dateOfBirth = function (currentYear) {
        console.log(`${this.name} is born in ${currentYear - this.age}`);
    }
}
let izanWithMethod = new PersonWithMethod('Izan Abdullah', 2, 'Kidding');
izanWithMethod.dateOfBirth(2023);