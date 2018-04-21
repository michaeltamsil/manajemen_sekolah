define((require, exports, module) => {
    'use strict'

    const Backbone = require('backbone')
    const template = require('text!./template.html')

    module.exports = Backbone.View.extend({
        template: _.template(template)
    })
})
