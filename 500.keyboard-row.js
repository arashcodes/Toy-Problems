/*
 * @lc app=leetcode id=500 lang=javascript
 *
 * [500] Keyboard Row
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  const row1 = 'qwertyuiopQWERTYUIOP'.split('');
  const row2 = 'asdfghjklASDFGHJKL'. split('');
  const row3 = 'zxcvbnmZXCVBNM'.split('');
  
  const set1 = new Set(row1);
  const set2 = new Set(row2);
  const set3 = new Set(row3);
  
  const res = [];
  
  function checkWord(word) {
    let currSet;
    if (set1.has(word[0])) currSet = set1;
    if (set2.has(word[0])) currSet = set2;
    if (set3.has(word[0])) currSet = set3;

    for (let i = 0; i < word.length; i++) {
      if (!currSet.has(word[i])) return false;
    }

    return true;
  }
  
  
  for (let i = 0; i < words.length; i++) {
    if (checkWord(words[i])) res.push(words[i]);
  }
  
  return res;
};
// @lc code=end

