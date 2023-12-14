/* eslint-env node */

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
  devServer: {
    proxy: {
      "/ls/example/": {
        target: "ws://127.0.0.1:3000",
        ws: true,
      },
    },
    static: [
      {
        directory: "/usr/include",
        publicPath: "/usr/include",
      },
    ],
    onAfterSetupMiddleware: function (devServer) {
      if (!devServer) {
        throw new Error("webpack-dev-server is not defined");
      }

      devServer.app.get("/page/*", function (req, res) {
        res.sendFile(__dirname.concat("/dist/index.html"));
      });
    },
  },
};
