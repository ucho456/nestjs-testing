const nums = [1, 1, 2];

const func = (nums) => {
  const lenMap = new Map();
  let result;
  nums.some((n) => {
    lenMap.set(n, (lenMap.get(n) || 0) + 1);
    if (lenMap.get(n) > nums.length / 2) {
      result = n;
      return true;
    }
  });
  return result;
};

console.log(func(nums));
