function doSomething(msg) {
    return new Promise((resolve, reject) => {
        setTimeout (
          () => {
            console.log(msg);
            resolve();
          },
          1000 );
      }
    );
  }
  
  doSomething("1st Call")
    .then(() => {
      doSomething("2nd Call");
  })
    .then(() => {
      doSomething("3rd Call");
  });