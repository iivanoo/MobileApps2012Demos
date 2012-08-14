var loadMore;
var catsContainer;
var url = "http://thecatapi.com/api/images/get.php?format=html&results_per_page=10";
var xmlHttp;
var loadMoreText = '<p class="textMore">load more...</p>';
var loadingText = '<p class="textMore">loading...</p>';
var mainContainer;

function onBodyLoad() {
    document.addEventListener("deviceready", run, false);
}

function run() {
    mainContainer = $('#mainContainer');
    setupNavigation();
    loadMore = $('#loadMore');
    catsContainer = $('#catsContainer');
    loadCats();
    loadMore.html(loadMoreText);
    loadMore.on('touchend', function() {
        loadCats();
    });
}

function loadCats() {
    loadMore.html(loadingText);
    $.get(url, function(data) {
        catsContainer.append($(data));
        refineImgs(data);
        loadMore.html(loadMoreText);
    });
}

function refineImgs(data) {
    var currentDiv;
    var currentElement;
    $.each($('#catsContainer > img'), function(index, value) {
        currentElement = $(this);
        currentDiv = $('<article class="catContainer"></article>');
        catsContainer.append(currentDiv);
        currentDiv.append(currentElement);
        currentDiv.append(getCatDescription(value));
        $(this).addClass("cat");
    });
}

function getCatDescription(value) {
    return $('<div class="catDescription">' + value.src + '</div>');
}