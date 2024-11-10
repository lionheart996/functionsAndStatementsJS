function findOddAndEvenSums (number) {
    let numberIntoString = number.toString()
    let numberIntoArray = numberIntoString.split('')
    
    let oddSum = 0
    let evenSum = 0
    for ( let i = 0; i < numberIntoArray.length; i++)
        if (Number(numberIntoArray[i]) % 2 === 0) {
            evenSum += Number(numberIntoArray[i])
        } else {
            oddSum += Number(numberIntoArray[i])
        }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}



findOddAndEvenSums(1000435)	             // Odd sum = 9, Even sum = 4
findOddAndEvenSums(3495892137259234)	 // Odd sum = 54, Even sum = 22