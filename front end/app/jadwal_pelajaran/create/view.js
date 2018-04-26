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
            'submit form': 'submitForm'
        },
        afterRender() {
            let self = this
            fn.getDataKelas({
                onSuccess(dataKelas){
                    _.each(dataKelas, (kelas) => {
                        self.$('[name="kelas"]').append(new Option(kelas.name, kelas.name))
                    })
                }
            })

            fn.getDataHari({
                onSuccess(data_hari){
                    _.each(data_hari, (hari) => {
                        self.$('[name="hari"]').append(new Option(hari, hari))
                    })
                }
            })

            fn.getDataMata_Pelajaran({
                onSuccess(data_mata_pelajaran){
                    _.each(data_mata_pelajaran, mata_pelajaran => {
                        self.$('[name="mata_pelajaran"]').append(new Option(mata_pelajaran.name, mata_pelajaran.name))
                    })
                }
            })

        },
        submitForm(e) {
            e.preventDefault()
            this.model.save(Syphon.serialize(this))
        }
    })
})
