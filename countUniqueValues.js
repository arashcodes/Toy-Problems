function countUniqueValues(arr) {
  if (arr.length === 1) {
      return 1;
  }
  if (arr.length === 0) {
      return 0;
  }
  let left = 0;
  let right = left + 1;
  while(right < arr.length) {
   if (arr[left] === arr[right]) {
       right++;
   } else {
       left++;
       arr[left] = arr[right]; 
   }
  }
  return left + 1;
}

countUniqueValues([1, 1, 2, 3, 4, 4, 5]) // 4