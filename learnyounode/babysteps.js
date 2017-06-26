// Baby steps - accepts one or more numbers as command-line argument and logs the sum of those numbers 

    logArray = process.argv;
    console.log(logArray.length);
    sum = 0;
    for (i = 2; i < logArray.length; i++) {
        //console.log(logArray[i]);
        sum += +logArray[i];
    }
    console.log(sum);