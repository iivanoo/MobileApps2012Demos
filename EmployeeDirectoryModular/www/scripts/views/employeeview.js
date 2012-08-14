define(["jQuery", "underscore", "Backbone", "Handlebars", "text!templates/employee-details.html"], function($, _, Backbone, Handlebars, template) {


    var EmployeeView = Backbone.View.extend({

        template: Handlebars.compile(template),

        render: function(eventName) {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return EmployeeView;

});