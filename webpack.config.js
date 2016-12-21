module.exports = {
    entry: __dirname + '/src/heading.js',
    output: {
        path: __dirname + '/dist',
        filename: 'heading.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'  ,
            query: {
                presets: ['es2015']
            }
        }]
    }
};
