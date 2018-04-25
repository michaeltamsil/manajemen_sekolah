define((require, exports, module) => {
    'use strict'

    const Backbone = require('backbone')

    module.exports = Backbone.Model.extend({
        urlRoot: `${urlAPI}mata_pelajaran`,
        initialize(){
            this.on('error', (model, response) => {
                alert(response.statusText)
            })
        }
    })
})
