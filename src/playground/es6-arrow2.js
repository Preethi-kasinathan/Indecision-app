const add = (a, b) => {
    return a + b;
};
console.log(add(55, 1));


const multiplier = {
    numbers: [10, 20, 30],
    multiplyby: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyby);
    }
};
console.log(multiplier.multiply());