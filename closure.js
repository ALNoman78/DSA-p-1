console.log("Closure working")

const counter = (amount) => {
    let count = 0
    count += amount

    return count
}

console.log(counter(5));
console.log(counter(3));