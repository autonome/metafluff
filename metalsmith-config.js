let Metalsmith  = require('metalsmith');
let collections = require('metalsmith-collections');
let layouts     = require('metalsmith-layouts');
let drafts     	= require('metalsmith-drafts');
let markdown    = require('metalsmith-markdown');
let permalinks  = require('metalsmith-permalinks');
let feed  			= require('metalsmith-feed');
let assets 			= require('metalsmith-assets');
let templates   = require('metalsmith-templates');
let metallic    = require('metalsmith-metallic');
let autotoc     = require('metalsmith-autotoc');
let browserSync = require('browser-sync');
let argv        = require('minimist')(process.argv);

// If I run node run deploy --prod, it should not use browser-sync to watch for changes.
// Otherwise, it should.
if (!argv.deploy) {
  browserSync({
    server: 'build',
    files: ['src/*.md', 'layouts/*.html', 'assets/*.css'],
    middleware: function (req, res, next) {
      build(next);
    }
  })
} 
else {
  build(function () {
    console.log('Done building.');
  })
}
 
// Build everything!
function build(callback) {
	Metalsmith(__dirname)         // __dirname defined by node.js:
                              // name of current working directory
		.metadata({                 // add any variable you want
																// use them in layout-files
			sitename: "Dietrich Ayala",
			siteurl: "https://metafluff.com/",
			description: "Website of Dietrich Ayala.",
			generatorname: "Metalsmith",
			generatorurl: "https://metalsmith.io/"
		})
		.source('posts')       // source directory
		.destination('ms-site')   // destination directory
		.clean(true)                // clean destination before
		.use(collections({          // group all blog posts by internally
			posts: 'posts/*/*.md'     // adding key 'collections':'posts'
		}))                         // use `collections.posts` in layouts
		.use(markdown())            // transpile all md into html
		.use(drafts()) 							// Use the drafts plugin
		.use(permalinks({           // change URLs to permalink URLs
			pattern: ':date/:title',  // generate URLs to YYYY/MM/DD/TITLE
			relative: false           // put css only in /css
		}))
		.use(feed({									// configure feeds
			"site_url": "https://metafluff.com",
			"metadata": {
				"site": {
					"title": "Dietrich Ayala",
					"url": "https://metafluff.com",
					"author": "Dietrich Ayala"
				}
			},
			"collection": "posts"
		})) 
		//.use(layouts())           	// wrap layouts around html
		//.use(templates('handlebars')) // use handlebars templates
		.build(function (err) {
			var message = err ? err : 'Build complete';
			console.log(message);
			callback();
		});
}
