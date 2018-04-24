define((require, exports, module) => {
    'use strict'

    const SubRoute = require('backbone.subroute'),
        Radio = require('backbone.radio')

    module.exports = SubRoute.extend({
        initialize(){
            //this.routeModule = {}
            this.channelLayout = Radio.channel('layout')
        },
        routes:{
            '': 'showList',
            'create': 'showCreate',
            'delete': 'showDelete',
            '(:id)': 'showUpdate',
            '(*anything)': 'showNotFound'
        },
        showList(){
            require(['./view'], View => {
                this.channelLayout.request('updateContent', View)
            })
        },
        showCreate() {
            require(['./create/view'], View => {
                this.channelLayout.request('updateContent', View)
            })
        },
        showDelete(){

        },
        showUpdate() {
            require(['./update/view'], View => {
                this.channelLayout.request('updateContent', View)
            })
        },
        showNotFound() {
            alert('show not found')
        }

    })
})
