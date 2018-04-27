define((require, exports, module) => {
    'use strict'

    const LayoutManager = require('layoutmanager'),
        template = require('text!./template.html'),
        Model = require('./../model'),
        Syphon = require('backbone.syphon'),
        fn = require('function')

    module.exports = LayoutManager.extend({
        className: 'row',
        template: _.template(template),
        initialize(){
            this.model = new Model()
            this.listenTo(this.model, 'sync', ()=> {
                let hashSplit = window.location.hash.split('/')
                hashSplit.pop()
                window.location.hash = `${hashSplit.join('/')}`
            })
        },
        events:{
            'click [name="add"]': 'addMataPelajaran',
            'click [name="remove"]': 'removeMataPelajaran',
            'submit form': 'submitForm'
        },
        afterRender() {
            let self = this
            fn.getDataMata_Pelajaran({
                onSuccess(data){
                    _.each(data, item => {
                        self.$('[name="mata_pelajaran[]"]').append(new Option(item.name, item.id))
                    })
                    self.templateMata_Pelajaran =  self.$('[name="mata_pelajaran[]"]').parents('.form-group').clone()
                }
            })
        },
        addMataPelajaran(e) {
            if(this.templateMata_Pelajaran){
                let DOM = this.templateMata_Pelajaran.clone()
                $(e.currentTarget).parents('add-remove').after(DOM)
            }
        },
        removeMataPelajaran(e){
            $(e.currentTarget).parents('add-remove').remove()
        },
        submitForm(e){
            e.preventDefault()
            this.model.save(Syphon.serialize(this))
        }
    })
})
