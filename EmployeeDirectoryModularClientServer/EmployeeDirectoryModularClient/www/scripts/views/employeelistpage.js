define(["jQuery", "underscore", "Backbone", "Handlebars", "views/employeelistview", "collections/employeecollection", "text!templates/search-page.html"], function($, _, Backbone, Handlebars, EmployeeListView, EmployeeCollection, template) {

    var EmployeeListPage = Backbone.View.extend({

        template: Handlebars.compile(template),

        render: function(eventName) {
            this.$el.html(this.template(this.model.toJSON()));
            this.listView = new EmployeeListView({
                el: $('ul', this.el),
                model: this.model
            });
            this.listView.render();
            return this;
        },

        events: {
            "keyup .search-query": "search"
        },

        search: function(event) {
            var key = $('.search-query').val();
            console.log('search ' + key);
            this.model.findByName(key);
        }
    });

    return EmployeeListPage;

});