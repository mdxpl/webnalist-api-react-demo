module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {include: /\.json$/, loaders: ["json-loader"]},
            {
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }
            }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};
