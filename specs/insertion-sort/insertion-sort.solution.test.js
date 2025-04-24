/*
  Insertion sort!
  
  Be sure to call your function insertionSort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
*/
// function insertionSort(nums) {
//   for (let i = 1; i < nums.length; i++) {
//     let numberToInsert = nums[i]; // the numberToInsert number we're looking to insert
//     let j; // the inner counter

//     // loop from the right to the left
//     for (j = i - 1; nums[j] > numberToInsert && j >= 0; j--) {
//       // move numbers to the right until we find where to insert
//       nums[j + 1] = nums[j];
//     }

//     // do the insertion
//     nums[j + 1] = numberToInsert;
//   }
//   return nums;
// }

function insertionSort(nums) {
  // pseudocode
  // outer loop from i=1 to nums.length.
  // start from i=1 because the leftmost element is array of length 1, which is considered sorted
  // inner loop starts at i-1 to 0, as long as the tempVar is smaller than the element we are comparing to

  // this is wrong because after the first swap, the comparison is being done on the wrong elements
  // for (let i = 1; i < nums.length; i++) {
  //   for (let j = i - 1; j >= 0 && nums[j] > nums[i]; j--) {
  //     let tempVar = nums[j];
  //     nums[j] = nums[i];
  //     nums[i] = tempVar;
  //   }
  // }

  for (let i = 1; i < nums.length; i++) {
    let tempVar = nums[i];
    let j; // has to declare j here to avoid error later outside of inner loop
    for (j = i - 1; j >= 0 && nums[j] > tempVar; j--) {
      // has to compare with tempVar instead of nums[i] because we are modifying array in situ
      // basically we are shifting the array up one index on each inner loop
      nums[j + 1] = nums[j];
    }
    nums[j + 1] = tempVar;
  }
}

// unit tests
// do not modify the below code
test("insertion sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  insertionSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
