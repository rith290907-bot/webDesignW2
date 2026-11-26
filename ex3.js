function calculateAvg (arr) {
    let average = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        average = sum / arr.length;
    }
    return average;
}

let num = [85, 90, 78, 92];
console.log(calculateAvg(num));
