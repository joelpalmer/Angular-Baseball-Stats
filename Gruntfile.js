module.exports = function(grunt) {
    grunt.initConfig({
        jshint: ['Gruntfile.js'],

        less: {
            compile: {
                files: {
                    'styles/css/compiled.css': 'styles/css/layout.less'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('timestamp', function(){
    	var options = this.options({
    		file: '.timestamp'
    	});
    	var timestamp = +new Date();
    	var contents = timestamp.toString();
    	grunt.file.write(options.file, contents);

    });
};
