function selectionSort(array) {
  let minIndex;
  let temp;

  for (let i = 0; i < array.length; i++) {
    minIndex = i;

    for (let j = i; j < array.length - 1; j++) {
      minIndex = array[minIndex] > array[j + 1] ? j + 1 : minIndex;
    }

    temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }

  return array;
}

console.log(selectionSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]
console.log(selectionSort([2, 4, 5, 1, 3]));     // [1, 2, 3, 4, 5]
console.log(selectionSort([5, 2, 1, 3, 4, 6]));  // [1, 2, 3, 4, 5, 6]

