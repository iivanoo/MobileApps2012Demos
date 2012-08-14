define(["jQuery", "underscore", "Backbone", "Handlebars", "text!templates/employee-list-item.html"], function($, _, Backbone, Handlebars, template) {

    var EmployeeListItemView = Backbone.View.extend({

        tagName: "li",

        template: Handlebars.compile(template),

        initialize: function() {
            this.model.on("change", this.render, this);
        },

        render: function(eventName) {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return EmployeeListItemView;

});