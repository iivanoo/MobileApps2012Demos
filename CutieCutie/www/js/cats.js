var loadMore;
var mainContainer;
var url = "http://thecatapi.com/api/images/get.php?format=html&results_per_page=15";
var xmlHttp;
var loadMoreText = '<p class="textMore">load more...</p>';
var loadingText = '<p class="textMore">loading...</p>';

function onBodyLoad() {
  document.addEventListener("deviceready", run, false);
}

function run() {
  loadMore = $('#loadMore');
  mainContainer = $('#mainContainer');
  loadCats();
  loadMore.html(loadMoreText);
  loadMore.bind('touchend', function() {
    loadCats();
  });
  //getMap();
}

/*function getMap() {
  var win = function(position) {
      var url = "http://maps.google.com/maps/api/staticmap?center=" + position.coords.latitude + "," + position.coords.longitude + "&zoom=13&size=320x480&maptype=roadmap&sensor=true";
      document.getElementById('map').setAttribute('src', url);
    };
  var fail = function(e) {
      alert('ERROR' + e);
    };
  navigator.geolocation.getCurrentPosition(win, fail);
}*/

function loadCats() {
  loadMore.html(loadingText);
  $.get(url, function(data) {
    mainContainer.append($(data));
    refineImgs(data);
    loadMore.html(loadMoreText);
  });
}

function refineImgs(data) {
  var currentDiv;
  $.each($('#mainContainer > img'), function(index, value) {
    currentDiv = $('<div class="catContainer"></div>');
    mainContainer.append(currentDiv);
    currentDiv.append($(this));
    $(this).addClass("cat");
  });
}