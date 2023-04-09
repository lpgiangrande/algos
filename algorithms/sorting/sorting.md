# Sorting algo

## Buuble sort : ascending or decending order

1. Starting from the first element, compare each pair of adjacent elements in the list.
2. If the elements are in the wrong order (i.e. the first element is greater than the second), swap them.
3. Move to the next pair of elements and repeat step 2.
4. Continue this process until the end of the list is reached.
5. Repeat the process for all elements in the list, but ignore the last element on each pass since it will be correctly sorted.

Bubble Sort is not an efficient algorithm for large datasets and has an average and worst-case time complexity of O(n^2). However, it is easy to understand and implement, making it useful for small datasets or as a starting point for learning sorting algorithms.

## Quick sort

The Quick Sort algorithm works by **dividing an array into two subarrays around a pivot element, then recursively sorting the subarrays**. The partition function is used to determine the new pivot index after each iteration.

- recursion : Recursion is a programming technique in which a function calls itself repeatedly until a certain condition is met.<br>
  The function breaks down a problem into smaller sub-problems and solves each of them by recursively calling itself.

Here's a step-by-step example of Quick Sort in action, using the array [5, 2, 8, 3, 9, 1]:

1. Choose a pivot element. In this case, the element at index 2 (which has the value 8) is chosen as the pivot.
2. Partition the array around the pivot. The left subarray will contain all elements less than the pivot, and the right subarray will contain all elements greater than the pivot:
   [5, 2, 3, 1] | 8 | [9]
3. Recursively sort the left and right subarrays:
   Left subarray: [5, 2, 3, 1]
   Choose a pivot element. In this case, the element at index 1 (which has the value 2) is chosen as the pivot.
   Partition the array around the pivot:
   [1] | 2 | [5, 3]
   Recursively sort the left and right subarrays:
   Left subarray: [1] (already sorted)
   Right subarray: [5, 3]
   Choose a pivot element. In this case, the element at index 1 (which has the value 3) is chosen as the pivot.
   Partition the array around the pivot:
   [3] | 5 | []
   Recursively sort the left and right subarrays:
   Left subarray: [3] (already sorted)
   Right subarray: [5] (already sorted)
