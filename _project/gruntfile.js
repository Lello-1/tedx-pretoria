module.exports = function(grunt) {

	// Loads all the relevant grunt plugins for use in the project.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-play');

	// Initialises grunt.
	grunt.initConfig({
		play: {
		  fanfare: {
		    file: 'sounds/fanfare.mp3'
		  },
		  purr: {
		    file: 'sounds/purr.aiff'
		  },
		  blow: {
		    file: 'sounds/blow.aiff'
		  },
		  morse: {
		    file: 'sounds/morse.aiff'
		  },
		  glass: {
		    file: 'sounds/glass.aiff'
		  }
		},
		uglify: {
			options: {
				// wrap: "Build",
				mangle: false,
				compress: false, // true or false or {}
				beautify: true, // true or false or {}
				preserveComments: 'all', // true or 'all' or 'some'
				sourceMap : true,
				wrap:true
				// sourceMapRoot: "",
				// banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
			},
			my_target: {
				files: {

					'../wwwroot/js/template.js': ['../_dev/js/template/*.js']

				} //files
			} //mytarget
			// },
		}, //uglify
		compass: {
			dev: {
				options: {
					config: "config.rb"
				} //options
			} //dev
		}, //compass
		watch: {
			options: { livereload: true},
			scripts: {
				files: [
					'../_dev/js/template/*.js'
				],
				// tasks: ["uglify", 'play:purr']
				tasks: ["uglify"]
			}, //scripts
			sass: {
				files: ["../_dev/scss/*.scss"],
				// tasks: ["compass:dev", 'play:blow']
				tasks: ["compass:dev"]
			}
		}
	}); // initConfig
	grunt.registerTask("default", "watch"); // Registers a default task to run with grunt

}; // exports