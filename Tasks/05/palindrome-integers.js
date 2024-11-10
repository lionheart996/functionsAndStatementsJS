function checkIfPalindrome(arrayOfIntegers) {
    for (let integer of arrayOfIntegers) {
        let str = integer.toString(); // Convert integer to string
        let reversedStr = str.split('').reverse().join(''); // Reverse the string
        if (str === reversedStr) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}


checkIfPalindrome([123,323,421,121])	// false \n true \n false \n true	      	

checkIfPalindrome([32,2,232,1010])	    // false \n true \n true \n false