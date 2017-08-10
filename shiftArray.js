function shiftArray(arr, x) {

    var temp = 0;
    var counter = x;

    while(counter > 0) {
        for(var i = 0; i < arr.length; i++) {
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;

        }
        counter--;
    }
    return arr;
}

console.log(shiftArray([1,2,3,4,5,6], 2));