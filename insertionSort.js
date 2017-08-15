function insertionSort(arr) {

    for(var i = 1; i < arr.length; i++) {
       
        for(var x = 0; x < arr.length; x++) {

            if(arr[i] < arr[x]) {
                var spliced = arr.splice(i, 1);
                arr.splice(x, 0, spliced[0]);
            }
        }

    }
    return arr;
}

console.log(insertionSort([5,2,13,9,1,55,24,3]));