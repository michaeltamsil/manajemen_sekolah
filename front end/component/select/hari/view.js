define((require, exports, module) => {
    'use strict'

    const LayoutManager = require('layoutmanager'),
        config = require('config')

    module.exports = LayoutManager.extend({
        tagName: 'select',
        className: 'form-control',
        name: 'selectHari',
        attributes: {
            id: 'hari',
            name: 'hari'
        },
        initialize(options) {
            let { parent } = options || {}
            if(parent && parent instanceof LayoutManager){
                parent.on('afterRender', view => {
                    if(this.name)
                        view.insertView(`[component-name="${this.name}"]`, this)
                        this.render()
                })
            }
        },
        afterRender(){
            _.each(config.namaNamaHari, hari => {
                let option = new Option(hari, hari)
                this.$el.append(option)
            })
        },
        setValue(newValue) {
            this.$el.val(newValue)
        },
        getValue(){
            return this.$el.val()
        }
    })
})
