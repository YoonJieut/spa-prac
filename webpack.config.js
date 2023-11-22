// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const config = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js' // 번들 파일 이름
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
            //babel-loader 세팅
            {
                test: /\.js$/, // .js 확장자로 끝나는 모든 파일
                exclude: /node_modules/, // node_modules 폴더 제외
                use: {
                  loader: 'babel-loader', // babel-loader를 사용하여 변환
                }
            }

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
        config.devtool = 'inline-source-map'; // 소스 맵 활성화
        // * 압축된 번들을 원본 소스코드에 매핑
        // * 디버깅에 압축된 것 대신 원본 소스를 보여준다.
        // * 런타임 오류시 정확한 위치를 파악할 수 있다.
    }
    return config;
};
