define((require, exports, module) => {
    'use strict'

    const LayoutManager = require('layoutmanager'),
        template = require('text!./template.html'),
        Model = require('./../model'),
        Syphon = require('backbone.syphon'),
        ComponentSelectHari = require('component/select/hari/view'),
        ComponentSelectKelas = require('component/select/kelas/view')

    module.exports = LayoutManager.extend({
        className: 'row',
        template: _.template(template),
        initialize(){
            this.component = {}
            this.model = new Model()
            this.listenTo(this.model, 'sync', ()=> {
                let hashSplit = window.location.hash.split('/')
                hashSplit.pop()
                window.location.hash = `${hashSplit.join('/')}`
            })
            this.component.selectHari = new ComponentSelectHari({parent: this })
            this.component.selectKelas = new ComponentSelectKelas({parent: this })
        },
        events:{
            'submit form': 'submitForm'
        },
        submitForm(e){
            e.preventDefault()
            this.model.save(Syphon.serialize(this))
        }
    })
})
