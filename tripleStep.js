// Cracking the Coding Interview
// Question 8.1

// Brute force method. Makes more calls than necessary
function countStairs(stairs) {
    if(stairs < 0) {
        return 0;
    }
    else if(stairs === 0){
        return 1;
    }
    else {
        return countStairs(stairs-1) + countStairs(stairs-2) + countStairs(stairs-3);
    }
}

// Top down (or memorization) method. 
function countStairsTD(stairs) {
    return helper(stairs, [stairs+1]);
}

function helper(stairs, memo) {
    if(stairs < 0) {
        return 0;
    } else if (stairs === 0) {
        return 1;
    }

    if(!memo[stairs]) {
        memo[stairs] = helper(stairs-1, memo) + helper(stairs-2, memo) + helper(stairs-3, memo);
    }
    return memo[stairs];
}

console.log("BRUTE FORCE: ", countStairs(10));
console.log("TOP DOWN: ", countStairsTD(10));
