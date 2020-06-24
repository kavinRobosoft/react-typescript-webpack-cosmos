const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports =  {
    
        entry: 'src/index.tsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index_bundle.js'
        },
        module: {
            rules: [
              { test: /\.(ts|tsx)$/, loader: 'ts-loader' },
              {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                },
              },
              
                  {
                    test: /\.s[ac]ss$/i,
                    use: [
                      // Creates `style` nodes from JS strings
                      'style-loader',
                      // Translates CSS into CommonJS
                      'css-loader?url=false',
                      // Compiles Sass to CSS
                      'sass-loader',
                    ],
                  },
                  {
                    test: /\.(jpg|png)$/,
                    use:[{
                        loader: "file-loader",
                        options:{
                            name:'[name].[ext]',
                            outputPath:'img/',
                            publicPath:'img/'
                        }
                    }]
                     
                  },
                  {
                    test: /\.jpg$/,
                    loader: "file-loader"
                  },
                  {
                    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'file-loader'
                    }
            ]
        },
        node: {
            fs: 'empty'
        },
        resolve: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'src/index.html'
            })
        ]
    
}