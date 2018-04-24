define((require, exports, module) => {
    'use strict'

    //const Backbone = require('backbone')
    const LayoutManager = require('layoutmanager'),
        template = require('text!./template.html'),
        Model = require('./model')

    module.exports = LayoutManager.extend({
        className: 'row',
        template: _.template(template),
        model: new Model(),
        events:{
            'submit': 'submitForm'
        },
        submitForm(e){
            e.preventDefault()

        }
    })
})
