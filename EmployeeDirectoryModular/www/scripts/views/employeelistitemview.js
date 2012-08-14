define(["jQuery", "underscore", "Backbone", "Handlebars", "text!templates/employee-list-item.html"], function($, _, Backbone, Handlebars, template) {

    var EmployeeListItemView = Backbone.View.extend({

        tagName: "li",

        template: Handlebars.compile(template),

        initialize: function() {
            this.model.bind("change", this.render, this);
            this.model.bind("destroy", this.close, this);
        },

        render: function(eventName) {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return EmployeeListItemView;

});