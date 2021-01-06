const quickSort = (array) => {
  if (array.length < 2) return array;

  const pivot = [array.shift()];
  const firstArray = [];
  const secondArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) firstArray.push(array[i]);
    else secondArray.push(array[i]);
  }

  return quickSort(firstArray).concat(pivot, quickSort(secondArray));
};

console.log(quickSort([10, 4, 3, 66, 81, 110, 1]));
