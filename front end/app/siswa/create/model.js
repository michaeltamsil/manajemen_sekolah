define((require, exports, module) => {
    'use strict'

    const Backbone = require('backbone')

    module.exports = Backbone.Model.extend({
        urlRoot: `${urlAPI}siswa`
    })
})
