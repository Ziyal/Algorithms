function maxSumSubArray(array) {

    var answer = Number.NEGATIVE_INFINITY;

    for(var i = 0; i < array.length; i++) {
        var sum = 0;
        for(var sub_size = i; sub_size < array.length; sub_size++) {

            sum += array[sub_size];
            if(sum > answer) {
                answer = sum;
            }  
        }
    }
    return answer;
}

// function maxSumSubArray(array) {

//     var answer = array[0]
//     var sum = 0;

//     for(var i = 1; i < array.length; i++) {
//         answer = Math.max(answer, array[i])
//     }
//     for(var i = 0; i < array.length; i++) {
//         sum = 0; 
//         if(sum + array[i] > answer) {
//             answer += array[i];
//         } else {
//             answer = Math.max(answer, sum);
//         }
//     }
//     return answer;
// }


console.log(maxSumSubArray([2,9,-17,9,4,-10]))
console.log(maxSumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))


