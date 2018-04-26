define((require, exports, module) => {
    'use strict'
    const $ = require('jquery'),
        config = require('config')

    module.exports = {
        async getDataKelas(options) {
            let result = []
            try {
                result = await $.ajax({
                    url: `${config.urlAPI}kelas`,
                })
                options && options.onSuccess && options.onSuccess(result)

            } catch (error) {
                console.error(error)
            }
        },
        async getDataMata_Pelajaran(options) {
            let result = []
            try {
                result = await $.ajax({
                    url: `${config.urlAPI}mata_pelajaran`,
                })
                options && options.onSuccess && options.onSuccess(result)

            } catch (error) {
                console.error(error)
            }
        }
    }
});
