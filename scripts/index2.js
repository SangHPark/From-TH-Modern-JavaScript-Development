function doSomething(msg, callback) {
    setTimeout (
      function() {
        console.log(msg);
        callback();
      },
      1000);
  }
  
  doSomething('1st call', function() {})