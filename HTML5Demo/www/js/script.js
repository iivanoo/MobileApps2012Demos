var startButton;
var stopButton;
var worker;
var currentCount;

function onBodyLoad() {
  document.addEventListener("deviceready", run, false);
}

function run() {

  // see http://docs.jquery.com/Plugins/Validation for more details on validation
  $("form").validate();
  $("form").submit(function() {
    console.log($("input[name=name]").val());
    console.log($("input[name=surname]").val());
    console.log($("input[name=email]").val());
    return false;
  });

  // Web Workers part
  startButton = $("#start");
  startButton.click(function() {
    toggleButtons();
    worker = new Worker("./js/worker.js");
    worker.onmessage = manageMessage;
    worker.postMessage("start");
  });

  stopButton = $("#stop");
  stopButton.attr("disabled", "disabled");
  stopButton.click(function() {
    toggleButtons();
    worker.terminate();
  });

  currentCount = $("#currentCount");
}

// update the counter on the main page
function manageMessage(event) {
  currentCount.html(event.data);
  if (event.data === 1000000) {
    toggleButtons();
  }
}

// it switches the enabled/disabled statuses of the start and stop buttons
function toggleButtons() {
  if (startButton.attr("disabled") === "disabled") {
    startButton.removeAttr("disabled");
    stopButton.attr("disabled", "disabled");
  } else {
    startButton.attr("disabled", "disabled");
    stopButton.removeAttr("disabled");
  }
}