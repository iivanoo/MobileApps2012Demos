define(["jQuery", "underscore", "Backbone"], function($, _, Backbone) {

    var Employee = Backbone.Model.extend({

        urlRoot: "http://localhost:8080/EmployeeDirectoryServer/api/employees",

    });

    return Employee;

});