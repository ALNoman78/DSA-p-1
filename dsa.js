//  stateless and stateful

const counter = (amount) => {
    let count = 0;
    count = count + amount

    return count;
}

// console.log(counter(4))
// console.log(counter(2));

const counterTwo = {
    count: 0,

    add(amount) {                     //? inside object all the function is called method
        this.count = this.count + amount
    },
    print() {
        console.log(count);
    },
}

counter.add(3)
counter.add(3)

counter.print()