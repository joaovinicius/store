import path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process"

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function OnFirstBuildDonePlugin() {
  let isInitialBuild = true
  return {
    apply: compiler => {
      compiler.hooks.done.tap("OnFirstBuildDonePlugin", () => {
        if (isInitialBuild) {
          isInitialBuild = false
          spawn("node --loader ts-node/esm --watch-path=src/Infrastructure/React apps/web/index.ts", {
            stdio: "inherit",
            shell: true
          })
        }
      })
    }
  }
}

export default {
  target: "web",
  mode: "development",
  entry: {
    "client": path.resolve(__dirname, "src/Infrastructure/React/client.tsx"),
    "hotreload": path.resolve(__dirname, "src/Infrastructure/React/hotreload.ts")
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          enforce: true
        },
      },
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    library: {
      type: "module",
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  experiments: {
    outputModule: true,
  },
  plugins: [OnFirstBuildDonePlugin()],
};
