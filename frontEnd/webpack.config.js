// Webpack-config.js files
var path = require('path');
module.exports ={
    entry:path.resolve(__dirname,'../webContent')+'/cordialCoreScripts/cordialCore.js',
    output:{
        path:path.resolve(__dirname,'../webContent')+'/cordialCoreDist',
        filename:'cordialCoreDist.js',
        publicPath:'/app/'
    },
    module:{
        loaders:[{
            test:/\.js$/,
            //exclude:/node_modules/,
            include:path.resolve(__dirname,'../webContent'),
            loader:'babel-loader',
            query:{
                presets:['react','es2015']
            }
        },
            {
                test:/\.scss$/,
                // exclude:/node_modules/,
                loader:'style-loader ! css-loader ! sass-loader'

            }]

    }

}
