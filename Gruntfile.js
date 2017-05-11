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
    }

  });

  grunt.registerTask('build', [
    'clean',
    'copy',
    'less'
  ]);
};
