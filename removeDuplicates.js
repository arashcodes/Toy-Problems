var removeDuplicates = function(nums) {
  let left = 0;
  let right = 1;
  
  while (left < nums.length - 1) {
      if (nums[left] === nums[right]) {
          nums.splice(left, 1);
      } else {
       left++;
       right++;           
      }
  }
  console.log(nums);
  return nums.length;
};