function factorialDivision(num1, num2) {
    let firstFactorial = 1
    let secondFactorial = 1
    for (let i = 2; i <= num1; i++) {
        firstFactorial *= i;
    }
    for (let i = 2; i <= num2; i++) {
        secondFactorial *= i;
    }
    let division = firstFactorial / secondFactorial;
    console.log(`${division.toFixed(2)}`)
}



factorialDivision(5,2) // 60.00
factorialDivision(6,2) // 360.00
