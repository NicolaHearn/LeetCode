var isAnagram = function (s, t) {
  //   console.log(`$%& sorted equals ${"%&$".split("").sort().join("")}`);
  //   console.log(s.split("").sort() + " and " + t.split("").sort());
  //   console.log(s.split("").sort() === t.split("").sort());
  //   return s.split("").sort() == t.split("").sort();

  //   [...s]
  //     .sort((a, b) => {
  //       return a.localeCompare(b);
  //     })
  //     .join("") ===
  //     [...t]
  //       .sort((a, b) => {
  //         return a.localeCompare(b);
  //       })
  //       .join("");
  // };

  if (s.length !== t.length) {
    return false;
  } else {
    const countS = new Map();
    const countT = new Map();

    for (let i = 0; i < s.length; i++) {
      //   countS.set("a", 1);
      countS.set(s[i], 1 + (countS.get(s[i]) || 0));
      countT.set(t[i], 1 + (countT.get(t[i]) || 0));
    }
    console.log(countS);
    console.log(countT);

    for (let [key, value] of countS) {
      if (countS.get(key) !== countT.get(key, 0)) {
        return false;
      }
    }
  }
  return true;
};

isAnagram("cact", "tacc");
isAnagram("d", "red");

// console.log(isAnagramHash("car", "car"));
