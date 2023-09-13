// let a = 10;
// let b = 20;

// console.log(`Before Swap: Value of a: ${a} and Value of b: ${b}`);

// function swap(a, b) {
//     console.log(`Before Swap inside function: Value of a: ${a} and Value of b: ${b}.`);

//     let temp = a;
//     a = b;
//     b = temp;

//     console.log(`After Swap inside function: Value of a: ${a} and Value of b: ${b}.`)
// }

// swap(a, b);
// console.log(`After Swap: Value of a: ${a} and Value of b: ${b}.`)


/* ======== Above programme with Object Data Type ======== */

let object = {
    a: 100,
    b: 200
}
console.log(`Before Swap: Value of a: ${object.a} and Value of b: ${object.b}`);

function swap(x) {
    console.log(`Before Swap inside function: Value of a: ${x.a} and Value of b: ${x.b}.`);

    let temp = x.a;
    x.a = x.b;
    x.b = temp;

    console.log(`After Swap inside function: Value of a: ${x.a} and Value of b: ${x.b}.`)
}

swap(object);
console.log(`After Swap: Value of a: ${object.a} and Value of b: ${object.b}.`)