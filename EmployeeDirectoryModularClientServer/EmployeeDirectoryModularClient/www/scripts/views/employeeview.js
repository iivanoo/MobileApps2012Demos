define(["jQuery", "underscore", "Backbone", "Handlebars", "text!templates/employee-details.html"], function($, _, Backbone, Handlebars, template) {

    var EmployeeView = Backbone.View.extend({

        template: Handlebars.compile(template),

        events: {
        	"click #deleteButton":"deleteEmployee"
    	},

        deleteEmployee: function(event) {
        	event.preventDefault();
        	this.model.destroy({
            	success:function () {
                	// navigator.notification.alert('Employee deleted!');
                	alert('Employee deleted!');
                	window.history.back();
            	}
        	});	
        },

        render: function(eventName) {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return EmployeeView;

});