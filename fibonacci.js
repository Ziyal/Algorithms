function fibonacci(num) {

    if(num > 1) {
        return fibonacci(num-1) + fibonacci(num-2);
    } 
    else {
        return num;
    }

}

console.log(fibonacci(8));