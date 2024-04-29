const twoSum = function (nums, target) {
  const numsMap = new Map();

  for (i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (numsMap.has(diff)) {
      return new Array(numsMap.get(diff), i);
    }
    numsMap.set(nums[i], i);
  }

  //   let numNeeded;

  //   for (let i = 0; i < nums.length; i++) {
  //     numNeeded = target - nums[i];
  //     console.log(numNeeded);
  //     if (nums.includes(numNeeded) && nums.indexOf(numNeeded) !== i) {
  //       return [i, nums.indexOf(numNeeded)];
  //     }
  //   }
};

console.log(twoSum([3, 2, 4, 7], 6));
