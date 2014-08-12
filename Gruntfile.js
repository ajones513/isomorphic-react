module.exports = function (grunt) {

    grunt.initConfig({
        react: {
            all: {
                files: [
                    {
                        expand: true,
                        cwd: 'static',
                        src: '**/*.jsx',
                        dest: 'static',
                        ext: '.js'
                    }
                
                ]
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-react');
};