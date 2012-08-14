define(["jQuery", "underscore", "Backbone", "models/employee"], function($, _, Backbone, Employee) {

    var EmployeeCollection = Backbone.Collection.extend({

        model: Employee,

        url: "http://localhost:8080/EmployeeDirectoryServer/api/employees",

        findByName: function(key) {
            var url = (key == '') ? 'http://localhost:8080/EmployeeDirectoryServer/api/employees' : "http://localhost:8080/EmployeeDirectoryServer/api/employees/search/" + key;
            console.log('findByName: ' + key);
            var self = this;
            $.ajax({
                url: url,
                dataType: "json",
                success: function(data) {
                    console.log("search success: " + data.length);
                    self.reset(data);
                }
            });
        }
    });

    return EmployeeCollection;

});