/**
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
   Output: [1,2,3,6,9,8,7,4,5]

    Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
    Output: [1,2,3,4,8,12,11,10,9,5,6,7]
    Constraints:

    m == matrix.length
    n == matrix[i].length
    1 <= m, n <= 10
    -100 <= matrix[i][j] <= 100

 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

//handle right matrix to move to column
//handle left matrix to move to next column
//handle to move to bottom
//handle to move to up

var spiralOrder = function (matrix) {
    let result = []

    while (matrix.length) {
        let up = matrix.shift()
        let bottom = (matrix.pop() || []).reverse()

        let left = []
        let right = []

        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i].length > 0) {
                right.push(matrix[i].pop())
            }
            if (matrix[i].length > 0) {
                left.unshift(matrix[i].shift())
            }
        }
        result.push(...up, ...right, ...bottom, ...left)
    }
    return result
};