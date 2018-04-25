define((require, exports, module) => {
    'use strict'

    const LayoutManager = require('layoutmanager'),
        config = require('config'),
        fn = require('function')

    module.exports = LayoutManager.extend({
        tagName: 'select',
        className: 'form-control',
        name: 'selectKelas',
        attributes: {
            id: 'kelas',
            name: 'kelas'
        },
        initialize(options) {
            let self = this
            let { parent } = options || {}
            if(parent && parent instanceof LayoutManager){
                parent.on('afterRender', view => {

                    if(this.name){
                        view.insertView(`[component-name="${this.name}"]`, this)
                        this.render()

                        fn.getDataKelas({
                            onSuccess(data){
                                _.each(data, item => {
                                    let option = new Option(item.name, item.name)
                                    self.$el.append(option)
                                })
                            }
                        })
                    }
                })
            }
        }
    })
})
