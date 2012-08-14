define(["jQuery", "underscore", "Backbone", "Handlebars", "views/employeelistitemview"], function($, _, Backbone, Handlebars, EmployeeListItemView, template) {

    var EmployeeListView = Backbone.View.extend({

        template: Handlebars.compile(template),

        initialize: function() {
            this.model.bind("reset", this.render, this);
            this.model.bind("change", this.render, this);
            this.model.bind("destroy", this.render, this);
            this.model.bind("add", this.render, this);
        },

        render: function(eventName) {
            $(this.el).empty();
            $('#welcome').remove();
            _.each(this.model.models, function(employee) {
                $(this.el).append(new EmployeeListItemView({
                    model: employee
                }).render().el);
            }, this);
            $('#myList').listview('refresh');
            return this;
        }
    });

    return EmployeeListView;

});