
require.config({
    paths: {
        jQuery: '../libs/jquery/jquery-loader',
        jQueryMobile: '../libs/jquery.mobile/jquery.mobile-loader',
        underscore: '../libs/underscore/underscore-loader',
        Backbone: '../libs/backbone/backbone-loader',
        order: '../libs/require/order-1.0.5',
        text: '../libs/require/text-1.0.6',
        async: '../libs/require/async',
        PhoneGap: '../libs/phonegap/phonegap-loader',
        Handlebars: '../libs/handlebars/Handlebars',
        templates: '../templates'
    }
});

require(['order!jQuery'], function($) {

    // jQueryMobile configuration
    $(document).bind("mobileinit", function() {
        $.mobile.autoInitializePage = false;
        $.mobile.linkBindingEnabled = false;
        $.mobile.hashListeningEnabled = false;
        $.mobile.pushStateEnabled = false;
        $.mobile.pageContainer = $("body");

        // Remove page from DOM when it's being replaced, otherwise the DOM will contain all of them
        $('div[data-role="page"]').live('pagehide', function(event, ui) {
            $(event.currentTarget).remove();
        });
    });

    // We launch the App
    // jQueryMobile is referenced in order to start its initialization
    require(['underscore', 'Backbone', 'router', 'jQueryMobile'], function(_, Backbone, AppRouter, jQueryMobile) {
        
        document.addEventListener("deviceready", run, false);
        run();

        function run() {
            app = new AppRouter();
            Backbone.history.start();
        }
    })
});