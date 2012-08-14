// define(["wrapper/zepto"], function($) {
define(["jquery", "./lib/base64"], function($, Base64) {

    var loadMore;
    var catsContainer;
    var url = "http://thecatapi.com/api/images/get.php?format=html&results_per_page=10";
    var xmlHttp;
    var loadMoreText = '<p class="textMore">load more</p>';
    var loadingText = '<p class="textMore">loading...</p>';
    var connectionError;
    var fsRoot;

    function manageConnectionError() {
        console.log("ConnectionError");
        catsContainer.hide();
        connectionError.show();
        loadMore.hide();
    }

    function setupExplore() {
        setupDB();
        loadMore = $('#loadMore').hide();
        connectionError = $('#connectionError').hide();
        catsContainer = $('#catsContainer').hide();
        loadCats();
        loadMore.html(loadMoreText);
        loadMore.on('touchend', function() {
            loadCats();
        });
        connectionError.on('touchend', function() {
            // here we must add an activity indicator
            loadCats();
        })
    }

    function setupDB() {
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fs) {
            fsRoot = fs.root;
        }, onFSError);
    }

    function onFSError(error) {
        console.log(error.code);
    }

    function isConnected() {
        var networkState = navigator.network.connection.type;
        return networkState != Connection.NONE;
    }

    function loadCats() {
        // return false;
        if (!isConnected()) {
            // manage connection error
            manageConnectionError();
        } else {
            catsContainer.show();
            connectionError.hide();
            loadMore.html(loadingText).show();
            $.get(url, function(data) {
                catsContainer.append($(data));
                refineImgs(data);
                loadMore.html(loadMoreText);
            });
        }
    }

    function refineImgs(data) {
        var currentDiv;
        var currentElement;
        var catFav;
        $.each($('#catsContainer > img'), function(index, value) {
            currentElement = $(this);
            currentDiv = $('<article class="catContainer"></article>');
            catsContainer.append(currentDiv);
            currentDiv.append(currentElement);
            catFav = $('<div class="catFav"><img src="./resources/heart-icon.png" alt="' + value.src + '"/></div>');
            catFav.on('touchend', function() {
                saveToFavourites(($(this).find('img').attr('alt')), index);
            });
            currentDiv.append(catFav);
            $(this).addClass("cat");
        });
    }

    function saveToFavourites(url, index) {
        // we firstly save a ref to the image in local storage
        var images = JSON.parse(window.localStorage.getItem("images"));
        if ($.inArray(url, images) == -1) {
            images.push(url);
            window.localStorage.setItem("images", JSON.stringify(images));

            // then we have to save the image locally
            var fileTransfer = new FileTransfer();
            var filePath = fsRoot.fullPath + "/" + index;
            // TODO here the image must be encoded into base64
            fileTransfer.download(url, filePath, function(entry) {
                entry.file(function(file) {}, function(error) {
                    console.log(error.code);
                });
            }, function(error) {
                console.log(error.code);
            })
        }
    }

    function setupFavourites() {
        $('#favourites').bind("favourites", function() {
            var reader = fsRoot.createReader();
            reader.readEntries(function(entries) {
                var i;
                for (i = 0; i < entries.length; i++) {
                    if (entries[i].isFile) {
                        entries[i].file(function(currentFile) {
                            var fileReader = new FileReader();
                            fileReader.onloadend = function(evt) {
                                // var img = $('<img></img>');
                                // img.attr("src", evt.target.result);
                                // $('#favourites').append(img);
                            };
                            fileReader.readAsDataURL(currentFile);
                        }, function(error) {
                            console.log("ERROR " + error.code);
                        });
                    }
                }
            }, function(error) {
                console.log("ERROR " + error.code);
            });
        });
    }

    return {
        setupExplore: setupExplore,
        setupFavourites: setupFavourites
    }
});