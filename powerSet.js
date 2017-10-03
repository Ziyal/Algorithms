// Cracking the Coding Interview
// Question 8.4

function powerSet(set, index = 0) {

    var allSubsets = [];

    if(set.length === index) {
        allSubsets.push([]);
    } 
    else {
        allSubsets = powerSet(set, index +1);
        item = set[index];

        var moreSubsets = [];
        
        for(var i = 0; i < index || i > index; i++) {
            var newSub = [];
            newSub.push(item);
            moreSubsets.push(newSub);
        }
        allSubsets.push(moreSubsets)
    }

    return allSubsets;

}

console.log("Power Set: ", powerSet([1, 2, 3]));
