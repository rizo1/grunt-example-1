   module.exports = function(grunt) {
		
	//configure tasks
	grunt.initConfig({
				
		pkg: grunt.file.readJSON('package.json'),
		
		cssmin : {
		   combine: {
				files: {
				  'output.min.css': ['css/*.css']
				}  
			}

		},
		
		watch: {
			css: {
				files: ['css/*.css'],
				tasks: ['cssmin']
			}
		},
		 
	});
		
	//Load Plugin
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
		
	//Register Task
	grunt.registerTask('default', ['cssmin']);

};