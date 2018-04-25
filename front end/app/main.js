const
    pathLibs = '/libs/',
    pathLibsCommon = '/libscommon/'



require.config({
    paths:{
        'jquery': `${pathLibs}jquery-3.3.1.min`,
        'underscore': `${pathLibs}underscore-1.8.3.min`,
        'require': `${pathLibs}require-2.3.5.min`,
        'bootstrap':`${pathLibs}bootstrap.bundle-4.1.0.min`,
        'backbone':`${pathLibs}backbone-1.3.3.min`,
        'backbone.radio': `${pathLibs}backbone.radio.min`,
        'backbone.subroute': `${pathLibs}backbone.subroute-0.4.6.min`,
        'backbone.syphon': `${pathLibs}backbone.syphon-0.8.0.min`,
        'marionette': `${pathLibs}backbone.marionette-3.5.1.min`,
        'layoutmanager':`${pathLibs}backbone.layoutmanager-1.0.0`,
        'subroute': `${pathLibs}backbone.subroute-0.4.6.min`,
        'text': `${pathLibs}text-2.0.15`,
        'config': `${pathLibsCommon}config`,
        'function': `${pathLibsCommon}function`,
        'component': './../component'
    },
    shim:{
        jquery: {
            export: 'jQuery'
        },
        underscore: {
            export: '_'
        },
        'text': {
            deps: ['require']
        },
        bootstrap: {
            deps: ['jquery'],
            exports: '$.bootstrap'
        },
        backbone: {
            deps: ['underscore', 'bootstrap'],
            exports: 'Backbone'
        },
        'backbone.radio':{
            deps: ['backbone'],
            exports: 'Radio'
        },
        'backbone.subroute': {
            deps: ['backbone'],
            exports: 'SubRoute'
        },
        'backbone.syphon': {
            deps: ['backbone'],
            exports: 'Syphon'
        },
        'layoutmanager': {
            deps: ['backbone'],
            exports: 'LayoutManager'
        }
    },
    callback() {
        requirejs(['./start'], start => {
            start()
        })
    }
})
