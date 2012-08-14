define(["jquery", "hbs!lib/templates/hi"], function($, templHi) {

    function start() {
        $('#mainContainer').html("ciao");
        var context = {name : "Ivano"};
        $('#mainContainer').templHi(context);
    }

    return {
        start: start
    }
});