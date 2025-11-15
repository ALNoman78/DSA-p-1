// console.log("Closure working")

//! worst way

// let count = 0

// const counter = (amount) => {
//     count += amount

//     return count
// }

// console.log(counter(5));
// console.log(counter(3));

//? closure function

const createCounter = () => {
    let count = 0;

    return (amount) => {
        count += amount
        return count
    }
}

const counter = createCounter()

console.log(counter(5));
console.log(counter(3));

console.log(90);