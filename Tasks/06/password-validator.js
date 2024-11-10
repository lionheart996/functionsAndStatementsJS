function passwordValidator(password) {
    let isValid = true; // Track if all conditions are met

    // Check length
    if (password.length < 6 || password.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }

    // Check for only letters and digits
    if (!/^[A-Za-z\d]+$/.test(password)) {
        console.log("Password must consist only of letters and digits");
        isValid = false;
    }

    // Check for at least 2 digits
    const digitCount = (password.match(/\d/g) || []).length;
    if (digitCount < 2) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    }

    // If all conditions are met, print "Password is valid"
    if (isValid) {
        console.log("Password is valid");
    }   
}


passwordValidator('logIn')	//Password must be between 6 and 10 characters
                            //Password must have at least 2 digits

passwordValidator('MyPass123')	// Password is valid

passwordValidator('Pa$s$s')	 // Password must consist only of letters and digits
                             //Password must have at least 2 digits