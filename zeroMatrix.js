// Cracking the Coding Interview
// 1.8
// 
// Time Complexity: O(y*x)

function zeroMatrix(matrix) {

    // Create arrays for rows and columns filled with false boolean
    var row = new Array(matrix.length);
    var col = new Array(matrix[0].length);

    row.fill(false);
    col.fill(false);

    // Find the zeros and log that in row and col arrays
    for(var y = 0; y < row.length; y++) {
        for(var x = 0; x < col.length; x++) {
            if(matrix[y][x] === 0) {
                row[y] = true;
                col[x] = true;
            }
        }
    }

    // Go through matrix and use data in row and col variables to change to zeros
    for(var y = 0; y < row.length; y++) {
        for(var x = 0; x < col.length; x++) {
            if(col[x] || row[y]) {
                matrix[y][x] = 0;
            }
        }
    }
    
    return matrix;
}


var testmatrix = [
    [1,1,1,1,1,1,0,1],
    [1,1,1,1,1,1,1,1],
    [1,1,1,0,1,1,1,1],
    [1,1,1,1,1,1,1,1]
];

console.log(zeroMatrix(testmatrix));