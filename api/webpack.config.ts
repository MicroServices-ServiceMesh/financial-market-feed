import { resolve } from 'path'; 
import { Configuration, IgnorePlugin } from 'webpack'; 
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin'; 
const ZipPlugin = require('zip-webpack-plugin');

const config: Configuration = {
  //Start bundling from app.ts
  entry: {
    app: './src/app.ts',
  },
  
  // use ts-loader to transform typescript file to javascript
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ],
  },

  resolve: {
        //specify the order of resolution of two file have same name but different extensions
        extensions: ['.js', '.ts']
  }, 
    
  //Compile for usage in a Node.js service
  target: 'node',

  //use source maps to aid development
  devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',

  //set the mode based on the node environment. mode == production is an optimized and fast build
  mode: process.env.NODE_ENV === 'production'? 'production':'development',

  plugins: [
    new IgnorePlugin({
            //Do not bundle the below dependencies
            checkResource(resource: any) { 
                const lazyImports = [ 
                    '@nestjs/microservices', 
                    '@nestjs/microservices/microservices-module', 
                    '@nestjs/websockets/socket-module', 
                    'cache-manager', 
                    'class-validator', 
                    'class-transformer', 
                    'class-transformer/storage', 
                    'fastify-swagger', 
                ]; 
                if (!lazyImports.includes(resource)) { 
                    return false; 
                } 
                try { 
                    resolve(resource); 
                } catch (err) { 
                    return false; 
                } 
                return true; 
            } 
    }),
       //package everything into a zip file
        new ZipPlugin({ 
            filename: 'app.zip', 
            include: ['app.js'] 
        }) 
  ],
  //Finally specify where we should output the final bundle 
  output: { 
        filename: '[name].js', 
        libraryTarget: 'commonjs2', 
        path: resolve(__dirname, 'dist'), 
  }, 
}; 
export default config;