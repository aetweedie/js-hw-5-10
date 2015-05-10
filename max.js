var largest = function(arr) {
  var i = 0;
  var result = arr[0];
  while (i < arr.length) {
    if (arr[i] > result) {
      result = arr[i];
    }
    i++;
  }
  return result;
};

var theLargest = largest([10,12,6,3]);
console.log(theLargest);
