/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const boxes = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    const rows = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    const cols = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            
            const digit = board[i][j];
            const k = Math.floor(j / 3) + (Math.floor(i / 3) * 3);
            
            if (digit !== '.') {
                if (boxes[k][digit] || rows[i][digit] || cols[j][digit]) {
                    return false;
                }
                boxes[k][digit] = rows[i][digit] = cols[j][digit] = true;
            }
        }
    }
    return true;
};
// @lc code=end

