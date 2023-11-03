const analyzeArray = (arr) => {
    let average = 0
    arr.forEach(element => {
        average += element 
    });
    average = average/arr.length

    min = Math.min(...arr)
    max = Math.max(...arr)

    return obj = {
        average: average,
        min: min,
        max: max,
        length: arr.length
    }
}

export default analyzeArray

