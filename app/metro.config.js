const { createMetroConfiguration } = require("expo-yarn-workspaces");

module.exports = createMetroConfiguration(__dirname);
// module.exports.watchFolders = [
//     path.resolve(__dirname, "..", "node_modules"),
//     path.resolve(__dirname, "../packages", "api"),
//     path.resolve(__dirname, "../packages", "sdk-core"),
//   ];