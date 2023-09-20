const path = require("path");

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, isProduction ? "build" : "dist"),
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", "..."],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
    config.output = {
      path: path.resolve(__dirname, "build"),
    };
  } else {
    config.mode = "development";
    config.output = {
      path: path.resolve(__dirname, "dist"), //
    };
  }
  return config;
};
