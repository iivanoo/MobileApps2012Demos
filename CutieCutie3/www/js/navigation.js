// define(["wrapper/zepto"], function($) {

define(["jquery"], function($) {
    var exploreMenu;
    var favouritesMenu;
    var infoMenu;
    var currentView;
    var controller;
    var menuWidth;

    function setupNavigation() {
        exploreMenu = $('#exploreMenu');
        favouritesMenu = $('#favouritesMenu');
        infoMenu = $('#infoMenu');
        currentView = $('#explore');
        controller = $('#controller');
        menuWidth = $('.menu').first().width();
        controller.width(menuWidth);

        exploreMenu.on('touchend', function() {
            navigateTo("explore");
        });
        favouritesMenu.on('touchend', function() {
            navigateTo("favourites");
        });
        infoMenu.on('touchend', function() {
            navigateTo("info");
        });
    }

    function navigateTo(targetView) {
        if (currentView.attr('id') !== targetView) {
            currentView.removeClass("current");
            currentView = $('#' + targetView);
            currentView.trigger(targetView);
            currentView.addClass("current");
            $().scrollTop(0);
            controller.css('left', $('#' + targetView + 'Menu').position().left + 'px');i
        }
    }

    return {
        setupNavigation: setupNavigation
    }
});