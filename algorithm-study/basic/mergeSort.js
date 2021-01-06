const mergeSort = (array) => {
  if (array.length < 2) {
    return array;
  }

  const result = [];
  const midIndex = Math.floor(array.length / 2);

  const firstArray = mergeSort(array.slice(0, midIndex));
  const secondArray = mergeSort(array.slice(midIndex));

  while (firstArray.length !== 0 && secondArray.length !== 0) {
    if (firstArray[0] < secondArray[0]) {
      result.push(firstArray.shift());
    } else {
      result.push(secondArray.shift());
    }
  }

  while (firstArray.length) result.push(firstArray.shift());
  while (secondArray.length) result.push(secondArray.shift());

  return result;
};

console.log(mergeSort([10, 5, 1, 3, 2, 4, 111, 54, 9]));
