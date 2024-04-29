var groupAnagrams = function (strs) {
  // const strsMap = new Map();

  // for (let i = 0; i < strs.length; i++) {
  //   const sortedString = strs[i].split("").sort().join("");

  //   if (strsMap.has(sortedString)) {
  //     strsMap.get(sortedString).push(strs[i]);
  //   } else {
  //     strsMap.set(sortedString, [strs[i]]);
  //   }
  // }
  // const result = [];
  // for (const value of strsMap.values()) {
  //   result.push(value);
  // }

  let result = new Map();

  for (let s of strs) {
    let count = new Array(26).fill(0);

    for (let c of s) {
      count[c.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    console.log(count);

    let key = "";

    for (let i = 0; i < count.length; i++) {
      key += "#" + count[i];
    }
    console.log(key);

    let arr = [];
    if (result[key]) {
      arr = result[key];
    }
    arr.push(s);
    result[key] = arr;
  }
  return Object.values(result);
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
