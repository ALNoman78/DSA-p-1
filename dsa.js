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
    add(amount) {
        this.count = this.count + amount
    },
    print() {
        console.log(this.count)
    }
}

counterTwo.add(4)
counterTwo.add(3)

counterTwo.print()