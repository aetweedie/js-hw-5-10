var subtract = function(arr){
  var i      = 0,
      result = 0;
  while(i < arr.length){
    result = result - arr[i];
    i ++;
  }
  return result;
};

var myTotal = subtract([10,14,60]);
console.log(myTotal);
