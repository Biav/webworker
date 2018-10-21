self.onmessage = function(e){
    console.log("Web Worker "+ e);

    var sum = 1;

    for(var i = 1; i < 10000000000; i++ ) {

        sum += i;

    }

    self.postMessage(sum);
}