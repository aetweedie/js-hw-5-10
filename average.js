var average = function(arr){
  var i      = 0,
      result = 0;
  while(i < arr.length){
    result = result + arr[i];
    i ++;
  }
  return result / arr.length;
};


var myTotal = average([100,20,30]);
console.log(myTotal);
