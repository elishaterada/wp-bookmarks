module.exports = function( grunt ) {

    // Project configuration
    grunt.initConfig( {
        pkg:    grunt.file.readJSON( 'package.json' ),
        concat: {
            options: {
                stripBanners: true,
                banner: '/*! <%= pkg.title %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
                    ' * <%= pkg.homepage %>\n' +
                    ' * Copyright (c) <%= grunt.template.today("yyyy") %>;' +
                    ' * Licensed GPLv2+' +
                    ' */\n'
            },
            scripts: {
                src: ['js/**/*.js'],
                dest: 'dist/js/wp-bookmarks.js'
            }
        },
        jshint: {
            all: [
                'Gruntfile.js',
                'js/**/*.js',
            ],
            options: {
                curly:   true,
                eqeqeq:  true,
                immed:   true,
                latedef: true,
                newcap:  true,
                noarg:   true,
                sub:     true,
                undef:   true,
                boss:    true,
                eqnull:  true,
                globals: {
                    exports: true,
                    module:  false
                }
            }
        },
        uglify: {
            all: {
                files: {
                    'dist/js/wp-bookmarks.min.js': ['dist/js/wp-bookmarks.js']
                },
                options: {
                    banner: '/*! <%= pkg.title %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
                        ' * <%= pkg.homepage %>\n' +
                        ' * Copyright (c) <%= grunt.template.today("yyyy") %>;' +
                        ' * Licensed GPLv2+' +
                        ' */\n',
                    mangle: {
                        except: ['jQuery']
                    }
                }
            }
        },
        test:   {
            files: ['js/test/**/*.js']
        },
        less:   {
            all: {
                files: {
                    'dist/css/wp-bookmarks.css': 'less/*.less'
                }
            }
        },
        cssmin: {
            options: {
                banner: '/*! <%= pkg.title %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
                    ' * <%= pkg.homepage %>\n' +
                    ' * Copyright (c) <%= grunt.template.today("yyyy") %>;' +
                    ' * Licensed GPLv2+' +
                    ' */\n'
            },
            minify: {
                expand: true,
                cwd: 'dist/css/',
                src: ['wp-bookmarks.css'],
                dest: 'dist/css/',
                ext: '.min.css'
            }
        },
        jst: {
            compile: {
                options: {
                    //namespace: "anotherNameThanJST",      //Default: 'JST'
                    prettify: false,                        //Default: false|true
                    amdWrapper: false,                      //Default: false|true
                    templateSettings: {
                    },
                    processName: function(filename) {
                        //Shortens the file path for the template.
                        return filename.slice(filename.indexOf("tmpls"), filename.length);
                    }
                },
                files: {
                    "dist/js/templates.js": ["tmpls/**/*.html"]
                }
            }
        },
        watch:  {
            less: {
                files: ['less/*.less'],
                tasks: ['less', 'cssmin'],
                options: {
                    debounceDelay: 500
                }
            },
            scripts: {
                files: ['js/*.js'],
                tasks: ['jshint', 'concat', 'uglify'],
                options: {
                    debounceDelay: 500
                }
            },
            templates: {
                files: ['tmpls/*.html'],
                tasks: ['jst']
            }
        }
    } );

    // Load other tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jst');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask( 'default', ['jshint', 'jst', 'concat', 'uglify', 'less', 'cssmin'] );
    grunt.util.linefeed = '\n';
};
