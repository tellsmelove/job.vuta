let mix = require('laravel-mix');
const autoprefixer = require('autoprefixer')
const mqpacker = require('css-mqpacker')
const yargs = require('yargs-parser')(process.argv.slice(2));
const scss_file = yargs.scss ? yargs.scss + '.scss' : 'app.scss';
const js_file = yargs.js ? yargs.js + '.js' : 'app.js';
var name = null;

require('dotenv').config();

if (process.env.NAME) {
    name = process.env.NAME;
} else {
    return cmd_note();
}

if (name) {

    mix.options({
        postCss: [
            autoprefixer({
                browsers: ['last 3 versions', 'iOS >= 8', 'Safari >= 8', 'ie >= 9']
            }),
            mqpacker({
                sort: true
            }),
        ],
        processCssUrls: false
    });

    if (yargs.copy) {
        copy(name);
    }
    if (yargs.server) {
        server(name)
    }
    if (yargs.new) {
        mix.copyDirectory('src/default', 'src/' + name)
    } else {
        mix.sass('src/' + name + '/sass/' + scss_file, 'dist/' + name + '/public/css')
        mix.js('src/' + name + '/js/' + js_file, 'dist/' + name + '/public/js')
    }
} else {
    cmd_note();
}

function cmd_note() {
    return `
    -----------------------------------------------------------------
    | 1 | Please replace .env.example to .env                       |
    -----------------------------------------------------------------
    | 2 | Add value NAME= for project (this is project folder name) |
    -----------------------------------------------------------------
    | 3 | Restart run script                                        |
    -----------------------------------------------------------------
    `
}

function copy(name) {
    mix.copy([
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/bootstrap/dist/css/bootstrap.min.css.map',
        'node_modules/font-awesome/css/font-awesome.css',
        'node_modules/font-awesome/css/font-awesome.css.map',
    ], 'dist/' + name + '/public/css')
        .copy('node_modules/font-awesome/fonts/*', 'dist/' + name + '/public/fonts')
        .copy([
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js.map',
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/jquery/dist/jquery.min.map',
            'node_modules/popper.js/dist/umd/popper.min.js',
            'node_modules/popper.js/dist/umd/popper.min.js.map',
        ], 'dist/' + name + '/public/js')
}

function server(name) {
    mix.browserSync({
        proxy: false,
        port: '3000',
        server: { baseDir: 'dist/' + name + '/' },
        files: [
            './dist/**/*.html',
            './dist/**/public/css/*.css',
            './dist/**/public/js/*.js',
            './src/' + name + '/data.js'
        ],
        reload: true,
        open: false,
    });
}
// mix.webpackConfig({
//     resolve: {
//         alias: {
//             "@": path.resolve(
//                 __dirname,
//                 "src/assets/js"
//             ),
//             "@sass": path.resolve(
//                 __dirname,
//                 "src/assets/sass"
//             ),
//         }
//     }
// });
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

// mix.js('src/app.js', 'dist/').sass('src/app.scss', 'dist/');

// Full API
// mix.js(src, output);
// mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
// mix.preact(src, output); <-- Identical to mix.js(), but registers Preact compilation.
// mix.coffee(src, output); <-- Identical to mix.js(), but registers CoffeeScript compilation.
// mix.ts(src, output); <-- TypeScript support. Requires tsconfig.json to exist in the same folder as webpack.mix.js
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.less(src, output);
// mix.stylus(src, output);
// mix.postCss(src, output, [require('postcss-some-plugin')()]);
// mix.browserSync('my-site.test');
// mix.combine(files, destination);
// mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
// mix.copy(from, to);
// mix.copyDirectory(fromDir, toDir);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public');
// mix.setResourceRoot('prefix/for/resource/locators');
// mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
// mix.babelConfig({}); <-- Merge extra Babel configuration (plugins, etc.) with Mix's default.
// mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
// mix.dump(); <-- Dump the generated webpack config object t the console.
// mix.extend(name, handler) <-- Extend Mix's API with your own components.
// mix.options({
//   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
//   globalVueStyles: file, // Variables file to be imported in every component.
//   processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
//   purifyCss: false, // Remove unused CSS selectors.
//   terser: {}, // Terser-specific options. https://github.com/webpack-contrib/terser-webpack-plugin#options
//   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
// });