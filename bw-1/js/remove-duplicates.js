function removeDuplicates(arr) {
  let size = arr.length;
  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      if (arr[i] == arr[j]) {
        for (let k = j; k < size; k++) {
          arr[k] = arr[k + 1];
        }
        size--;
        j--;
      }
    }
  }
  arr.length = size;
}

const num = [2, 0, 1, 2, 3, 4, 5, 4, 8, 9];
removeDuplicates(num);
console.log(num);
