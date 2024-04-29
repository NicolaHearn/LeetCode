var containsDuplicate = function (nums) {
  const setCheck = new Set([]);
  for (let i = 0; i < nums.length; i++) {
    if (setCheck.has(nums[i])) {
      return true;
    }
    setCheck.add(nums[i]);
  }
  return false;
};
module.exports = { containsDuplicate };
