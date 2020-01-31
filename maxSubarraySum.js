function maxSubarraySum(array, n){
  if (n > array.length) { return null };
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += array[i]
  }
  tempSum = maxSum;
  for (let i = n; i < array.length; i++) {
    tempSum = tempSum -  array[i - n] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}