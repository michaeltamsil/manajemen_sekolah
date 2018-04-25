define((require, exports, module) => {
    'use strict'

    const SubRoute = require('backbone.subroute'),
        Radio = require('backbone.radio')

    module.exports = SubRoute.extend({
        initialize(){
            this.channelLayout = Radio.channel('layout')
        },
        routes:{
            '': 'showList',
            'create': 'showCreate',
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
