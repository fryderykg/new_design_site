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
            files: ['src/sass/main.sass', 'src/sass/typography.sass', 'src/sass/variables.sass', 'src/sass/particles.sass'],
            tasks: ['sass'],
            options: {
                spawn: false
            }
        }
    }

  });

  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'watch']);
  // grunt.registerTask('sass', ['sass']);

};
