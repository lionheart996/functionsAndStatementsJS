function checkIfPerfect(num) {
    let sum = 1;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) sum += i;
    }
    if (sum === num) {
        console.log('We have a perfect number!')
    } else {
        console.log('It\'s not so perfect.')
    }
}

checkIfPerfect(8)
checkIfPerfect(6)	 //We have a perfect number!
checkIfPerfect(28)	 //We have a perfect number!
checkIfPerfect(1236498)	 //It's not so perfect.