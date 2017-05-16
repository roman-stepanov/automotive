'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    clean: {
      build: ['_build']
    },

    copy: {
      build: {
        files: [{
          expand: true,
          src: [
            '*.html'
          ],
          dest: '_build'
        }]
      },
      html: {
        files: [{
          expand: true,
          src: [
            'css/**.css',
            'fonts/**/*.{woff,woff2}',
            'img/**.{png,jpg,gif,svg}',
            'js/**.js',
            '*.html'
          ],
          dest: '_build'
        }]
      }
    },

    less: {
      style: {
        files: {
          '_build/css/style.css': 'less/style.less'
        }
      }
    },

    postcss: {
      style: {
        options: {
          processors: [
            require('autoprefixer')({
              browsers: [
                'last 1 version',
                'last 2 Chrome versions',
                'last 2 Firefox versions',
                'last 2 Opera versions',
                'last 2 Edge versions'
              ]
            })
          ]
        },
        src: '_build/css/style.css'
      }
    }

  });

  grunt.registerTask('build', [
    'clean',
    'copy',
    'less',
    'postcss'
  ]);
};
