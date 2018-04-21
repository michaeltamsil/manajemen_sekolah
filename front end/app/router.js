define((require, exports, module) => {
    'use strict'

    const Backbone = require('backbone')

    module.exports = Backbone.Router.extend({
        // sama
        //initialize: function(){
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

        },
        showGuru(){

        },
        showKelas(){

        },
        showMata_pelajaran(){

        },
        showJadwal_pelajaran(){

        },
        showRaport(){

        }

    })
})
