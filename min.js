var smallest = function(arr) {
  var i = 0;
  var result = arr[0];
  while (i < arr.length) {
    if (arr[i] < result) {
      result = arr[i];
    }
    i++;
  }
  return result;
};

var theSmallest = smallest([10,12,6,3]);
console.log(theSmallest);
