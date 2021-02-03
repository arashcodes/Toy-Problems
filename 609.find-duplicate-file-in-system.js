/*
 * @lc app=leetcode id=609 lang=javascript
 *
 * [609] Find Duplicate File in System
 */

// @lc code=start
/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
  const res = [];
  const contentToPaths = new Map();
  let temp, path, fileName, content, currVal;
  
  for (let ele of paths) {
    temp = ele.split(' ');
    path = temp[0];
    
    for (let i = 1; i < temp.length; i += 1) {
      fileName = getInfo(temp[i])[0];
      content = getInfo(temp[i])[1];
      
      if (!contentToPaths.get(content)) {
        contentToPaths.set(content, [path + '/' + fileName])
      } else {
        currVal = contentToPaths.get(content);
        currVal.push(path + '/' + fileName);
        contentToPaths.set(content, currVal);
      }
    }
  }
  
  for (let [key, val] of contentToPaths) {
    if (val.length > 1) res.push(val);
  }
  
  return res;
};

function getInfo(str) {
  const res = str.split('(');
  
  return [res[0], res[1].slice(0, -1)];
}
// @lc code=end

