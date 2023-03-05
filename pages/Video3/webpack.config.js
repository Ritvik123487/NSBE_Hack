module.exports = {
    module: {
      rules: [
        {
          test: /\.html$/,
          type: "asset/resource",
          generator: {
            filename: "[name][ext]",
          },
        },
        {
          test: /\.html$/i,
          use: ["html-loader"],
        },
        {
          test: /\.js$/i,
          exclude: /\.file.js$/i,
          loader: "babel-loader",
        },
        {
          test: /\.file.js$/i,
          type: "asset/resource",
        },
        {
          test: /\.css$/i,
          exclude: /\.file.css$/i,
          loader: "css-loader",
        },
        {
          test: /\.file.css$/i,
          type: "asset/resource",
        },
      ],
    },
  };