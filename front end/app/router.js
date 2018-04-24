define((require, exports, module) => {
    'use strict'

    const Backbone = require('backbone'),
        Radio = require('backbone.radio')

    module.exports = Backbone.Router.extend({
        //initialize: function(){   // adalah sama
        initialize(){
            this.routerModule = {}
            this.channelLayout = Radio.channel('layout')
            this.channelLayout.reply('updateContent', this.fnNewModule, this)
        },
        routes:{
            '':'showDashboard',
            'siswa(/*subrouter)': 'loadRouterSiswa',
            'guru': 'showGuru',
            'kelas': 'showKelas',
            'mata_pelajaran': 'showMata_Pelajaran',
            'jadwal_pelajaran': 'showJadwal_Pelajaran',
            'raport': 'showRaport',
            '(*not_found)': 'showNot_Found'
        },
        start(){
            Backbone.history.start()
        },
        fnNewModule(View){
            this.newModule = new View()
            if(!this.layoutView){
                require(['./layout/view'], View => {
                    this.layoutView = new View()
                    this.layoutView.setView('#content', this.newModule)
                    $('body').prepend(this.layoutView.render().$el)
                })
            }else{
                let previousView = this.layoutView.getView('#content')
                previousView && previousView.remove()
                this.layoutView.setView('#content', this.newModule)
                this.newModule.render()
            }
        },
        showDashboard(){
            require(['./dashboard/view'], View => {
                this.fnNewModule(View)
            })
        },
        loadRouterSiswa(){
            // require(['./siswa/view'], View => {
            //     this.fnNewModule(View)
            // })
            if(!this.routerModule.siswa){
                require(['./siswa/router'], Router => {
                    this.routerModule.siswa = new Router(`siswa`,{
                        createTrailingSlashRoutes: true
                    })
                })
            }
        },
        showGuru(){
            require(['./guru/view'], View => {
                this.fnNewModule(View)
            })
        },
        showKelas(){
            require(['./kelas/view'], View => {
                this.fnNewModule(View)
            })
        },
        showMata_Pelajaran(){
            require(['./mata_pelajaran/view'], View => {
                this.fnNewModule(View)
            })
        },
        showJadwal_Pelajaran(){
            require(['./jadwal_pelajaran/view'], View => {
                this.fnNewModule(View)
            })
        },
        showRaport(){
            require(['./raport/view'], View => {
                this.fnNewModule(View)
            })
        },
        showNot_Found(){
            require(['./not_found/view'], View => {
                this.fnNewModule(View)
            })
        }
    })
})
