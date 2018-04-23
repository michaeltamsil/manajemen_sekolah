define((require, exports, module) => {
    'use strict'

    const SubRoute = require('backbone.subroute')

    module.exports = Backbone.SubRoute.extend({
        initialize(){
            this.module = {}
        },
        routes:{
            '': 'showList',
            'create': 'showCreate',
            'detail': 'showDetail',
            'update': 'showUpdate',
            'delete': 'showDelete'
        },
        showList(){

        },
        showCreate(){
            debugger;
        },
    })
})
