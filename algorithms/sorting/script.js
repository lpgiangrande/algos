//bubble sort

function bubbleSort(array) {
  const length = array.length;
  // Outer loop iterates from 0 to length - 2 because we need to compare adjacent elements
  // and the last element doesn't have an adjacent element
  for (let i = 0; i < length - 1; i++) {
    // Inner loop iterates from 0 to length - i - 2 because the largest i elements
    // have already been sorted and don't need to be compared again
    for (let j = 0; j < length - i - 1; j++) {
      // Compare adjacent elements and swap them if they are out of order
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  // Return the sorted array
  return array;
}

console.log(bubbleSort([1, 90, 3, 2, 67]));

// Quick sort 

function quickSort(array, left, right) {
  // If left index is greater than or equal to the right index, return the array
  if (left >= right) {
    return array;
  }

  // Choose a pivot element (in this case, the element at the midpoint of the array)
  const pivotIndex = Math.floor((left + right) / 2);
  const pivot = array[pivotIndex];

  // Partition the array around the pivot element and get the new pivot index
  const newPivotIndex = partition(array, left, right, pivot);

  // Recursively sort the left and right subarrays
  quickSort(array, left, newPivotIndex - 1);
  quickSort(array, newPivotIndex, right);

  // Return the sorted array
  return array;
}

function partition(array, left, right, pivot) {
  // Loop until left index is greater than right index
  while (left <= right) {
    // Move left index to the right while array[left] is less than the pivot
    while (array[left] < pivot) {
      left++;
    }
    // Move right index to the left while array[right] is greater than the pivot
    while (array[right] > pivot) {
      right--;
    }
    // If left index is less than or equal to right index, swap array[left] and array[right]
    if (left <= right) {
      const temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      // Move both indices inward
      left++;
      right--;
    }
  }
  // Return the new pivot index
  return left;
}
let arr = [5, 2, 8, 3, 9, 1];
quickSort(arr, 0, arr.length - 1);
console.log(arr);

// Merge sort :