define((require, exports, module) => {
    'use strict'

    //const Backbone = require('backbone')
    const LayoutManager = require('layoutmanager')
    const template = require('text!./template.html')

    module.exports = LayoutManager.extend({
        className: 'row',
        template: _.template(template)
    })
})
