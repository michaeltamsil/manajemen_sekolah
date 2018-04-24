define((require, exports, module) => {
    'use strict'

    //const Backbone = require('backbone')
    const LayoutManager = require('layoutmanager'),
        template = require('text!./template.html'),
        Table = require('./table/table'),
        Collection = require('./collection')

    module.exports = LayoutManager.extend({
        template: _.template(template),
        initialize() {
            this.table = new Table({
                collection: new Collection()
            })
            this.on('cleanup', () => {
                this.table.remove()
            })
        },
        afterRender() {
            //this.$('')

            this.table.render()
            this.table.collection.fetch()
        }
    })
})
