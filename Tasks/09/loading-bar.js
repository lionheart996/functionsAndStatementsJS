function loadingBar(numberDivisibleBy10) {
    console.log(`${numberDivisibleBy10}% [${'%'.repeat(numberDivisibleBy10 / 10) + '.'.repeat(10 - numberDivisibleBy10 / 10)}]`)
    if (numberDivisibleBy10 !== 100) {
        console.log('Still loading...')
    } else {
        console.log('100% Complete!')
    }
}


loadingBar(30)	//30% [%%%.......]
                //Still loading...
loadingBar(50)	//50% [%%%%%.....]
                //Still loading...
loadingBar(100)	//100% Complete!
                //[%%%%%%%%%%]