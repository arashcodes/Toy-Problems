function validAnagram(s1, s2){
  // add whatever parameters you deem necessary - good luck!
  if (s1.length !== s2.length) {
      return false;
  }
  if (s1 === '' && s2 === '') {
      return true
  }
  let lookup = {};
  for (let i = 0; i < s1.length; i++) {
    let letter = s1[i];
    lookup[letter] = (lookup[letter] || 0) + 1;
  }
  for (let i = 0; i < s2.length; i++) {
    let letter = s2[i];
    if (!lookup[letter]) {
      return false;
    }
    lookup[letter] -= 1;
  }
  return true;
}

validAnagram('hey', 'ehy')