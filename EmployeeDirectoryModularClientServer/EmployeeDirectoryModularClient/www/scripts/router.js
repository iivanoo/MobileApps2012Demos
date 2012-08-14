define(["jQuery", "underscore", "Backbone", "collections/employeecollection", "models/employee", "views/employeeview", "views/employeelistpage"], function($, _, Backbone, EmployeeCollection, Employee, EmployeeView, EmployeeListPage) {

    var AppRouter = Backbone.Router.extend({

        routes: {
            "": "list",
            "list": "list",
            "employees/:id": "employeeDetails"
        },

        initialize: function() {
            $('.back').live('click', function(event) {
                window.history.back();
                return false;
            });
            this.firstPage = true;
            this.searchResults = new EmployeeCollection();
        },

        list: function() {
            var page = new EmployeeListPage({
                model: this.searchResults
            })
            $.mobile.firstPage = page;
            this.changePage(page);
        },

        employeeDetails: function(id) {
            var employee = this.searchResults.get(id);
            this.changePage(new EmployeeView({
                model: employee
            }));
        },

        changePage: function(page) {
            $(page.el).attr('data-role', 'page');
            page.render();
            $('body').append($(page.el));
            var transition = $.mobile.defaultPageTransition;
            // We don't want to slide the first page
            if (this.firstPage) {
                transition = 'none';
                this.firstPage = false;
            }
            $.mobile.changePage($(page.el), {
                changeHash: false,
                transition: transition
            });
        }

    });

    return AppRouter;

});