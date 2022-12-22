const path = require('path');

module.exports = {
    mode: 'development',
    entry: './app/app.jsx',
    output: {
        path: path.resolve(__dirname, './public'),
        publicPath: '/public/',
        filename: 'bundle.js'  // filename will be created
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, '/'),
        },
        port: 8081,
        open: true
    },
    module: {
        rules: [ // loader for jsx
            {
                test: /\.jsx?$/, // declare typefiles
                exclude: /(node_modules)/, // exclude from handling
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react'] // plugins to use
                }
            }
        ]
    }
}