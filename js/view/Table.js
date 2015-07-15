App.View.Table = Backbone.View.extend({

    tagName: 'table',

    className: 'table display',

    initialize: function(options) {
        $('#content').append(this.el);
        var template = App.renderTemplate('thead');
        this.$el.append(template);
        _.each(this.model.toJSON(), function(cell, i) {
            if (cell.status === 'ready') {
                this.$el.append( App.renderTemplate('row', cell) );
            }
        }, this);
        this.$el.DataTable({
            'deferRender': true
        });
    }
});
