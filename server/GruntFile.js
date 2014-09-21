module.exports = function(grunt) {
  grunt.initConfig({

    // configure nodemon
  	nodemon: {
      dev: {
        script: 'server.js',
        ignore: ['node_modules/**']
      }
    }
  });

  // load nodemon
  grunt.loadNpmTasks('grunt-nodemon');

  // register the nodemon task when we run grunt
  grunt.registerTask('default', ['nodemon']);  
};