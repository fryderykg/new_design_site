/**
 * Created by FryderykG on 26.01.17.
 */
module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'built/css/main.css': 'src/sass/main.sass'
        }
      }
    },

    watch: {
        scripts: {
            files: ['src/sass/main.sass', 'src/sass/typography.sass', 'src/sass/variables.sass', 'src/sass/particles.sass', 'src/sass/grid.sass', 'src/sass/navbar.sass'],
            tasks: ['sass'],
            options: {
                spawn: false
            }
        }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'src/img',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'built/img/'
        }]
      }
    },
    concat: {
      options: {
        separator: '\n'
      },
      dist: {
        src: ['src/js/script.js', 'src/js/send_mail.js', 'src/js/particles_config.js'],
        dest: 'built/js/output.js'
      }
    }

  });

  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'watch']);
  // grunt.registerTask('sass', ['sass']);

};
