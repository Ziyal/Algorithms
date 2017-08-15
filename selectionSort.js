function selectionSort(arr) {

    var temp = 0;
    var min_idx = Number.POSITIVE_INFINITY;

    for(var i = 0; i < arr.length; i++) {

        min_idx = i;
        for(var x = i+1; x < arr.length; x++) {
            if(arr[x] < arr[min_idx]) {
                min_idx = x;
            }
        }

        temp = arr[i];
        arr[i] = arr[min_idx];
        arr[min_idx] = temp;
        console.log(arr);
    }

    return arr;
}

console.log(selectionSort([5,2,13,9,1,55,24,3]));