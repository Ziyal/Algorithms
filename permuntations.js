function p3 (arr) {
    var returnArr = [];
    for(var i = 0; i < arr.length; i++) {
        for(var h = 0; h < arr.length; h++) {
            if(h===i) {
                continue;
            }
            var newArr = [];
            newArr.push(arr[i]);
            newArr.push(arr[h]);
            for(var x = 0; x < arr.length; x++) {
                if(x === i || x === h) {
                    continue;
                }
                newArr.push(arr[x]);
                
            }
            returnArr.push(newArr);
        }
    }
    return returnArr;
}

// console.log(p3([0,1,2]))

function p4 (arr) {
    var bArr = [];
    for(var i = 0; i < arr.length; i++) {
        var temp = arr[i];
        arr[i] = arr[0];
        arr[0] = temp;
        var arr2 = [];
        for(var h = 1; h < arr.length; h++) {
            arr2.push(arr[h]);
        }
        if( arr2.length > 3){
            var arr3 = p4(arr2)
        }
        else{
            var arr3 = p3(arr2);
        }
        for(var x = 0; x < arr3.length; x++) {
            arr3[x].unshift(arr[0]);
        }
        bArr = bArr.concat(arr3);
    }
    return bArr;
}

console.log(p4([0,1,2,3, 4]))