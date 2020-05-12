const mix = require('laravel-mix');
require('laravel-mix-bundle-analyzer');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
// mix.js('resources/js/vadmin/vadmin-maps.js', 'public/js/vadmin')
	// .js('resources/js/vadmin/vadmin.js', 'public/js/vadmin');

const actions = {
	compileStyles: true,
	compileJs: true,
}


if(actions.compileJs)
{

	mix
		.js('resources/vadmin/js/vadmin.js', 'public/js/vadmin')
		.js('resources/web/js/web.js', 'public/js/web')
		// .js('resources/js/vadmin/vadmin-maps.js', 'public/js/vadmin')
		.disableNotifications();

	// Async
	// mix.js('resources/js/vadmin/vadmin.js', 'public/js/vadmin')
	//   .js('resources/js/vadmin/vadmin-maps.js', 'public/js/vadmin')
	//   .disableNotifications()
	//   .webpackConfig({
	//     output: {
	//       filename: '[name].js',
	//       chunkFilename: 'js/chunks/[name].app.js',
	//       publicPath: './../'
	//       } // This public path only work form Vadmin/ routes
	//       // publicPath: '/' }
	//     });
}

if(actions.compileStyles)
{
	mix
		.sass('resources/vadmin/sass/vadmin.sass', 'public/css/vadmin')
		.sass('resources/web/sass/web.sass', 'public/css/web')
		.disableNotifications()
		.options
		({
			processCssUrls: false,
			outputStyle: 'compressed'
		});
}


if ( ! mix.inProduction()) {
	mix.webpackConfig({
		devtool: 'inline-source-map'
	});
}

// JS ANALIZER
// |--------------------------------------------------------------------------
//Uncomment this if you want to analize app.js
if (!mix.inProduction()) {
	mix.bundleAnalyzer();
}

