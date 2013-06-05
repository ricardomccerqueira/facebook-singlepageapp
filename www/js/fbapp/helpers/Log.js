(function(){
    var preservedConsoleLog = console.log;

    console.log = function() {
      if(Fbapp.Globals.DEBUG === true){
        var timestamp = new Date().getTime();
        preservedConsoleLog.apply(console, arguments);
      }
    };
})();