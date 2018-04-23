define((require, exports, module) => {
    'use strict'

    const Backbone = require('backbone')
    let Radio = require('backbone.radio')
    

    module.exports = Backbone.Router.extend({
        //initialize: function(){   // adalah sama
        initialize(){
            this.module = {}
        },
        routes:{
            '':'showDashboard',
            'siswa': 'showSiswa',
            'guru': 'showGuru',
            'kelas': 'showKelas',
            'mata_pejalaran': 'showMata_pelajaran',
            'jadwal_pelajaran': 'showJadwal_pelajaran',
            'raport': 'showRaport'
        },
        start(){
            Backbone.history.start()
        },
        showDashboard(){
            require(['./dashboard/view'], View => {

                let view = new View()
                $('body').prepend(view.$el)
                view.render()
            })
        },
        showSiswa(){
            require(['./siswa/view'], View => {
                let view = new View()
                $('body').prepend(view.$el)
                view.render()
            })
        },
        showGuru(){
            require(['./guru/view'], View => {
                let view = new View()
                $('body').prepend(view.$el)
                view.render()
            })
        },
        showKelas(){
            require(['./kelas/view'], View => {
                let view = new View()
                $('body').prepend(view.$el)
                view.render()
            })
        },
        showMata_pelajaran(){
            require(['./mata_pelajaran/view'], View => {
                let view = new View()
                $('body').prepend(view.$el)
                view.render()
            })
        },
        showJadwal_pelajaran(){
            require(['./jadwal_pelajaran/view'], View => {
                let view = new View()
                $('body').prepend(view.$el)
                view.render()
            })
        },
        showRaport(){
            require(['./raport/view'], View => {
                let view = new View()
                $('body').prepend(view.$el)
                view.render()
            })
        }

    })
})
