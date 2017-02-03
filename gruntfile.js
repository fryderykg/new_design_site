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
            files: ['src/sass/main.sass', 'src/sass/typography.sass', 'src/sass/variables.sass', 'src/sass/particles.sass', 'src/sass/grid.sass'],
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
    }

  });

  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'watch']);
  // grunt.registerTask('sass', ['sass']);

};