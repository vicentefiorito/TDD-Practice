import calculator from "../code/calculator";
let calc = calculator()

test('add(1,2) is 3',() => {
    expect(calc.add(1,2)).toBe(3)
})

test('substract(3,2) is 1',() => {
    expect(calc.substract(3,2)).toBe(1)
})

test('divide(4,2) is 2',() => {
    expect(calc.divide(4,2)).toBe(2)
})

test('multiply(5,5) is 25',() => {
    expect(calc.multiply(5,5)).toBe(25)
})



