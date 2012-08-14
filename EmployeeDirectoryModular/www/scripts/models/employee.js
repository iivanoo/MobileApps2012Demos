define(["jQuery", "underscore", "Backbone"], function($, _, Backbone) {

    var Employee = Backbone.Model.extend({

        urlRoot: "http://coenraets.org/backbone/directory/api/employees",

    });

    return Employee;

});