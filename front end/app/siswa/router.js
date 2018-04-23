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
            'detail': 'showDetail',
            'update': 'showUpdate',
            'delete': 'showDelete'
        },
        showList(){
            require(['./view'], View => {
                this.channelLayout.request('updateContent', View)
            })
        },
        showCreate(){
            require(['./create/view'], View => {
                this.channelLayout.request('updateContent', View)
            })
        },
    })
})
