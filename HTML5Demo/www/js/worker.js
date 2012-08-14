onmessage = function(event) {
  if (event.data === "start") {
    for (var i = 1; i <= 1000000; i++) {
      postMessage(i);
    }
  } else {
    console.log("ERROR: unexpected message data.");
  }
};