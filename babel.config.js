module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    [
      "module-resolver",
      {
        cwd: "babelrc",
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        root: ["./"],
        alias: {
          "*": ".",
          "@root": "./",
          "@src": "./src",
          "@components": "./src/components",
          "@screens": ["./src/screens"],
          "@routers": ["./src/routers"],
          "@utils": ["./src/utils"]
        }
      }
    ]
  ]
}
