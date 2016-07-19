module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "./dist/bundle.js",
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { 
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.ts$/,
                loader: "tslint"
            }
        ]
    },

    tslint: {
        configuration: {
            rules: {
                "class-name": true,
                "comment-format": [true, "check-space"],
                "indent": [true, "spaces"],
                "no-duplicate-variable": true,
                "no-eval": true,
                "no-internal-module": true,
                "no-trailing-whitespace": true,
                "no-var-keyword": true,
                "one-line": [true, "check-open-brace", "check-whitespace"],
                "quotemark": [true, "single"],
                "semicolon": true,
                "triple-equals": [true, "allow-null-check"],
                "typedef-whitespace": [true, {
                    "call-signature": "nospace",
                    "index-signature": "nospace",
                    "parameter": "nospace",
                    "property-declaration": "nospace",
                    "variable-declaration": "nospace"
                }],
                "variable-name": [true, "ban-keywords"],
                "whitespace": [true,
                    "check-branch",
                    "check-decl",
                    "check-operator",
                    "check-separator",
                    "check-type"
                ]
            }
        },
        emitErrors: true,
        failOnHint: true
    }
};