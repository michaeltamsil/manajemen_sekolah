define((require, exports, module) => {
    'use strict'

    const LayoutManager = require('layoutmanager'),
    template = require('text!./template.html'),
    Navbar = require('./navbar/view'),
    Sidebar = require('./sidebar/view')
    Content = require('./content/view')

    module.exports = LayoutManager.extend({
        id: 'layout',
        template: _.template(template),
        views:{
            "#navbar": new Navbar(),
            "#sidebar": new Sidebar(),
            "#content": new Content()
        }
    })
})
