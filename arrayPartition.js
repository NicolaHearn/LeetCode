var arrayPairSum = function (nums) {
  return nums
    .sort((a, b) => a - b)
    .filter((a, i) => !(i % 2))
    .reduce((a, b) => a + b, 0);

  //   const numsSort = nums.sort((a, b) => a - b);

  //   let resultsArray = [];
  //   for (let i = 0; i < numsSort.length; i++) {
  //     if (i % 2 === 0) {
  //       let results = [Math.min(numsSort[i], numsSort[i] + 1)];
  //       resultsArray.push(results);
  //     }
  //   }
  //   return resultsArray
  //     .flat()
  //     .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

console.log(arrayPairSum([5, 6, 11, 9, 2, 3, 1, 1]));
