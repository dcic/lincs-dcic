App.View.Pages = Backbone.View.extend({

    tagName: 'div',

    className: 'content',

    initialize: function() {
        $('#content').append(this.el);
    },

    renderPage: function(newPage) {
        $('.page').hide();
        var $page = $('#' + newPage);
        if ($page.length) {
            $page.show();
            return;
        }

         _.each(this.model.toJSON(), function(row) {
            if (row.directory === newPage) {
                var page = new App.View.Page({
                    id: newPage,
                    model: new App.Model.Resource(row),
                    parent: this
                });
                page.$el.show();
                return false;
            }
        }, this);
    }
});
