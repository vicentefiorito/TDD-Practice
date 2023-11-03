import reverseString from "../code/reverseString";

test('hello to olleh',() => {
    expect(reverseString('hello')).toBe('olleh')
})

test('123456abcd to dcba654321',() => {
    expect(reverseString('123456abcd')).toBe('dcba654321')
 })

 test('12345 to not a valid string',() => {
    expect(reverseString(12345)).toBe('not a valid string')
 })