var Bean = require('ble-bean');
Bean.discover(function(bean) {
  console.log(bean);
  bean.connectAndSetup(function(){
    setInterval(function() {
      bean.requestAccell(function() {
        // console.log(arguments)
      });
    }, 100)
  });

  bean.on("accell", function(x, y, z, valid){
    var status = valid ? "valid" : "invalid";
    console.log("received " + status + " accell\tx:\t" + x + "\ty:\t" + y + "\tz:\t" + z );
  });
});
