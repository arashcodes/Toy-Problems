function isSubsequence(str1, str2) {
  let x = 0;
  let res = false;
  for (let i = 0; i < str2.length; i++) {
      if (str2[i] === str1[x]) {
        x++;
      }
      if (x === str1.length - 1) {
        res = true;
      }
  }
  return res;
}

isSubsequence('sing', 'sting')
