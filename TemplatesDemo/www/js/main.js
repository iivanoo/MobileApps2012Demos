require(["test"], function(test) {
    document.addEventListener("deviceready", run, false);

    function run() {
        require = {
            // I change the path as to not duplicate the hbs.js and handlebars plugin.
            // Normally, just drop it in the same place as require.js and it'll work fine.
            // Essentially just ignore this.
            paths: {
                'hbs': '../hbs',
                'Handlebars': '../Handlebars'
            }
        };
        test.start();
    }
});