let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let k = 3;

// rotate array to the right k - steps

function rotateArray(nums, k) {
  const size = nums.length;

  if (k > size) {
    k %= size;
  }

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  return nums;
}

function reverse(nums, left, right) {
  while (left < right) {
    let temp = nums[left];
    nums[left++] = nums[right];
    nums[right--] = temp;
  }
}

const rotatedArray = rotateArray(arr1, 9);

// console.log(JSON.stringify(rotatedArray));

// find first non-repeating element in an array
// [8, 7, 6, 8, 4, 7, 2, 4] => 6

const arr2 = [8, 7, 6, 8, 4, 7, 2, 4];

function firstUnique(nums) {
  let flag;
  for (let i = 0; i < nums.length; i++) {
    flag = false;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] == nums[j] && i != j) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      return nums[i];
    }
  }
}

// console.log("first unique =>", firstUnique(arr2));

const arr3 = [8, 7, 6, 8, 4, 7, 2, 4];

function removeDuplicates(nums) {
  let size = nums.length;
  for (let i = 0; i < size; i++) {
    const element = nums[i];
    for (let j = i + 1; j < size; j++) {
      if (element == nums[j]) {
        for (let k = j; k < size; k++) {
          nums[k] = nums[k + 1];
        }
        size--;
        j--;
      }
    }
  }
  nums.length = size;
}

removeDuplicates(arr3);
console.log("array after removing duplicates =>", JSON.stringify(arr3));
