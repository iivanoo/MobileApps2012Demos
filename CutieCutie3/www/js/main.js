require(["navigation", "cats"], function(navigation, cats) {
    document.addEventListener("deviceready", run, false);

    function run() {
        navigation.setupNavigation();
        cats.setupExplore();
        cats.setupFavourites();
    }
});