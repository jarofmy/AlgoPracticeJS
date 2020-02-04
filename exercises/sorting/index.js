// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  // for i = o < arr length, for j = 0 to arr length - 1
  // if arr[j] > arr[j+1], swap elements at j and j + 1
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if(arr[j] > arr[j+1]) {
        const lesser = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    };
  };
  return arr;
};

function mergeSort(arr) {
  // Divide arr into chunks until size 1, then sent 2 halves into merge
  if(arr.length === 1) {
    return arr;
  }

  let midpoint = Math.floor(arr.length / 2);
  let left = arr.slice(0, midpoint);
  let right = arr.slice(midpoint);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  // Initialize results array
  // while there are still elements in both arrays
  // if first item of left < first item of right, shift element from left into results
  // else shift the elemtns from right into results
  // add remainder array into results and return
  const results = [];
  while (left.length && right.length) {
    if(left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
