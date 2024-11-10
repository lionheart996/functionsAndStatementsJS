function matrix (num) {
    let row = (num + ' ').repeat(num).trim();
    for (let i = 0; i < num; i++) {
        console.log(row);
    }
}












matrix(3)	//3 3 3
            //3 3 3
            //3 3 3

matrix(7)	//7 7 7 7 7 7 7
            //7 7 7 7 7 7 7
            //7 7 7 7 7 7 7
            //7 7 7 7 7 7 7
            //7 7 7 7 7 7 7
            //7 7 7 7 7 7 7
            //7 7 7 7 7 7 7

matrix(2)	//2 2
            //2 2