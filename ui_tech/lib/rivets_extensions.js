define(['rivets'], function (rivets){
    rivets.binders['input-value'] = {
        publishes: true,
        bind: function(el) {
            return $(el).on('input', this.publish);
        },
        unbind: function(el) {
            return $(el).off('input', this.publish);
        },
        routine: function(el, value) {
            var el = $(el);
            if (value != el.val()) {
                el.val(value != null ? value : '');
            }
        }
    }; 

});
