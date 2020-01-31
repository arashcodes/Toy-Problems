function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
  const arr = arguments;
  const lookup = {};
  for (let i = 0; i < arr.length; i++) {
      if (lookup[arr[i]] === undefined) {
          lookup[arr[i]] = 1;
      } else {
       return true;   
      }

  }
  return false;
}

// areThereDuplicates('a', 'b', 'c', 'b');
areThereDuplicates(1, 2, 3);