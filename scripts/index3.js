function doSomething(msg) {
    return new Promise(
      function (resolve, reject) {
        setTimeout (
          function() {
            console.log(msg);
            resolve();
          },
          1000 );
      }
    );
  }
  
  doSomething("1st Call")
    .then(function() {
      doSomething("2nd Call");
  })
    .then(function() {
      doSomething("3rd Call");
  });