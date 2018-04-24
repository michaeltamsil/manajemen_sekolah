define((require, exports, module) => {
    'use strict';

    let
        Marionette = require('marionette'),
        template = require('text!./template.html'),
        Tbody = require('./tbody')

    module.exports = Marionette.View.extend({
        tagName: 'table',
        className: 'table table-hover table-sm table-borderless',
        template: _.template(template),
        regions:{
            body:{
                el: 'tbody',
                replaceElement: true
            }
        },
        onRender(){
            this.showChildView('body', new Tbody({
                collection: this.collection
            }))
        }
    })
})
