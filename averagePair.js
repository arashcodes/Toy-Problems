function averagePair(array, target){
  if (array.length === 0) { return false }
  let left = 0;
  let right = array.length - 1;
  for (let i = 0; i < array.length; i++) {
    while(left < right) {
      if ((array[left] + array[right] / 2) === target) {
        return true;
      }
      left++;
      right--;
    }
    return false;
  }
}

averagePair([1, 2, 3], 2.5)
