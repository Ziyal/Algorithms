function bubbleSort(arr) {

    var temp = 0;

    for(var i = 0; i < arr.length; i++) {
        for(var x = 0; x < arr.length; x++) {
            if(arr[x+1] < arr[x]) {
                temp = arr[x+1];
                arr[x+1] = arr[x];
                arr[x] = temp;
            }
        }
    }

    return arr;
}

console.log(bubbleSort([5,2,13,9,1,55,24,3]))