fib = function(howMany){
  //howMany is the number of itterations you want to see
    for(i = 0, y = 1, z = 0; z < howMany ; i = y, y = x, z ++ ){
        x = i + y;
        console.log(x);
    }
};

fib(10);
