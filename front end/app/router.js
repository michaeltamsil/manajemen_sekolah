define((require, exports, module) => {
    'use strict'

    const Backbone = require('backbone')

    module.exports = Backbone.Router.extend({
        //initialize: function(){   // adalah sama
        initialize(){
            this.module = {}
            this.on('route', () => {
                // debugger;
            })

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
        fnNewModule(View){
            this.newModule = new View()
            if(!this.layoutView){
                require(['./layout/view'], View => {
                    this.layoutView = new View()
                    $('body').prepend(this.layoutView.render().$el)
                    this.layoutView.setView('#content', this.newModule)

                })
            }else{
                this.layoutView.setView('#content', this.newModule)
                this.newModule.render()
            }
        },
        showDashboard(){
            require(['./dashboard/view'], View => {
                this.fnNewModule(View)
            })
        },
        showSiswa(){
            require(['./siswa/view'], View => {
                this.fnNewModule(View)
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
