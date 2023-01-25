const path = require("path")

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "public"),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: "ts-loader",
                    options: {}
                },
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts"]
    }
}
