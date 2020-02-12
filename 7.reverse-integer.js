/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let num;
    if (x < 0) {
        num = -x;
    } else {
        num = x;
    }
    const str = num.toString();
    let strArr = str.split('');
    strArr.reverse();
    let res = '';
    for (let i = 0; i < strArr.length; i++) {
        res += strArr[i]
    }
    if (res > (Math.pow(2, 31) - 1) || res < Math.pow(-2, 31)) { return 0; }
    if (x < 0) {
        return -(parseInt(res))    
    }
    return parseInt(res)
};
// @lc code=end

