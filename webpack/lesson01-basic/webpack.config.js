const path = require('path');
const webpack = require('webpack')

const config = {
    entry: './src/index.js', // diem bat dau
    output: {
        path: path.resolve(__dirname, 'build'), // tao thu muc build ngoai cung va trong thu muc co chua file bundle.js
        filename: 'bundle.js'
    }
}

module.exports = config;