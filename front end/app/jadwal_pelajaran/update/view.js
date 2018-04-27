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
            this.model.set('id', window.location.hash.split('/').pop())
            // this.listenTo(this.model, 'sync', ()=> {
            //     let hashSplit = window.location.hash.split('/')
            //     hashSplit.pop()
            //     window.location.hash = `${hashSplit.join('/')}`
            // })
        },
        events:{
            'click [name="add"]': 'addMataPelajaran',
            'click [name="remove"]': 'removeMataPelajaran',
            'submit form': 'submitForm'
        },
        afterRender() {
            let self = this

        const promiseGetDataKelas = new Promise((resolve, reject) => {
            console.log('begin promiseGetDataKelas')
            console.log('begin fetch getDataKelas')
            fn.getDataKelas({
                onSuccess(data){
                    _.each(data, item => {
                        self.$('[name="kelas"]').append(new Option(item.name, item.name))
                    })
                    console.log('end fetch getDataKelas')
                    resolve()
                }
            })
            console.log('end promiseGetDataKelas')
        })

            const promiseGetDataHari = new Promise((resolve, reject) => {
                console.log('begin promiseGetDataHari')
                console.log('begin fetch getDataHari')
                fn.getDataHari({
                    onSuccess(data){
                        _.each(data, nama => {
                            self.$('[name="hari"]').append(new Option(nama, nama))
                        })
                        console.log('end fetch getDataHari')
                        resolve()
                    }
                })
                console.log('end promiseGetDataHari')
            })

            const promiseGetDataMata_Pelajaran = new Promise((resolve, reject) => {
                console.log('begin promiseGetDataMata_Pelajaran')
                console.log('begin fetch getDataMata_Pelajaran')
                fn.getDataMata_Pelajaran({
                    onSuccess(data){
                        _.each(data, item => {
                            self.$('[name="mata_pelajaran[]"]').append(new Option(item.name, item.id))
                        })
                        self.templateMata_Pelajaran =  self.$('[name="mata_pelajaran[]"]').parents('.form-group').clone()
                        console.log('end fetch getDataMata_Pelajaran')
                        resolve()
                    }
                })
                console.log('end promiseGetDataMata_Pelajaran')
            })

            this.model.once('sync', (model, data, response) => {
                Syphon.deserialize(this, data)
                this.model.once('sync', () => {
                    let hashSplit = window.location.hash.split('/')
                    hashSplit.pop()
                    window.location.hash = `${hashSplit.join('/')}`
                })
            })

            console.log('begin promise')
            Promise.all([
                promiseGetDataKelas,
                promiseGetDataHari,
                promiseGetDataMata_Pelajaran])
            .then(() => {
                console.log('start fetch')
                this.model.fetch()
                console.log('start end')
            })
            console.log('end promise')
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
        submitForm(e) {
            e.preventDefault()
            this.model.save(Syphon.serialize(this))
        }
    })
})
