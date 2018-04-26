define((require, exports, module) => {
    'use strict'

    const LayoutManager = require('layoutmanager'),
        config = require('config'),
        fn = require('function'),
        name= 'mata_pelajaran'

    module.exports = LayoutManager.extend({
        tagName: 'select',
        className: 'form-control',
        name,
        attributes: {
            id: name,
            name
        },
        initialize(options) {
            let self = this
            let { parent } = options || {}
            if(parent && parent instanceof LayoutManager){
                parent.on('afterRender', view => {

                    if(this.name){
                        view.insertView(`[component-select-name="${this.name}"]`, this)
                        this.render()

                        fn.getDataMata_Pelajaran({
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
