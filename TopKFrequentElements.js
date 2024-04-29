var topKFrequent = function (nums, k) {
  const count = new Map();
  const freq = new Array(nums.length).fill(0);
  console.log(freq);

  for (let n of nums) {
    count.set(n, 1 + (count.get(n) || 0));
  }

  const iterator = count.entries();

  for (let c in iterator) {
    console.log(iterator.next().value.done);
  }

  console.log(count);

  //   const numsMap = new Map();

  //   for (let n of nums) {
  //     numsMap.set(n, 1 + (numsMap.get(n) || 0));
  //   }

  //   const sortedMap = new Map([...numsMap.entries()].sort((a, b) => b[1] - a[1]));

  //   const result = [];
  //   let count = 0;
  //   const iterator = sortedMap.keys();
  //   while (count < k) {
  //     result.push(iterator.next().value);
  //     count++;
  //   }

  //   return result;
};

topKFrequent([1, 1, 1, 2, 2, 3], 2);
