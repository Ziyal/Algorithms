// Using extra array
function shiftArray(arr, x) {
    var newArr = [];

    for(var i = arr.length-x; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    for(var i = 0; i < arr.length-x; i++) {
        newArr.push(arr[i]);
    }

    return newArr;
}

console.log(shiftArray([1,2,3,4,5,6], 2));


// In place +++ In progress

// function shiftArray(arr, x) {

//     var temp = 0;
//     var counter = x;

//     while(counter > 0) {
//         for(var i = 0; i < arr.length; i++) {
//             temp = arr[i];
//             arr[i] = arr[i+1];
//             arr[i+1] = temp;

//         }
//         counter--;
//     }
//     return arr;
// }