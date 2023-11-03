const calculator = () => {
    const add = (a,b) => {
        return a + b
    }

    const substract = (a,b) => {
        return a - b
    }

    const divide = (a,b) => {
        return a / b
    }

    const multiply = (a,b) => {
        return a * b
    }
    return {add,substract,divide,multiply}
}

const calc = calculator()
console.log(calc.add(3,4))
console.log(calc.substract(4,3))
console.log(calc.divide(4,2))
console.log(calc.multiply(2,2))