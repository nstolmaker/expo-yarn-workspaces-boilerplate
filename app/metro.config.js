const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

module.exports = config;

// const { createMetroConfiguration } = require("expo-yarn-workspaces");
const path = require("path");

// module.exports = createMetroConfiguration(__dirname);
// module.exports.watchFolders = [
//     path.resolve(__dirname, ".."),
//     // path.resolve(__dirname, "..", "node_modules"),
//     // path.resolve(__dirname, "../packages", "api"),
//     // path.resolve(__dirname, "../packages", "sdk-core"),
//   ];

  module.exports.resolver = { 
    alias: {
        "react": path.resolve('./node_modules/react'),
        "react-dom": path.resolve('./node_modules/react-dom'),
        "react-native": path.resolve('./node_modules/react-native')
    }
}

// // extraNodeModules: {
// //     "react-native-reanimated":
// //       "/path/to/mobile/node_modules/react-native-reanimated",
// //   },
// module.exports.transformer = {
//         getTransformOptions: async () => ({
//           transform: {
//             experimentalImportSupport: false,
//             inlineRequires: false,
//           },
//         }),
// }
// //   module.exports.resolver = { sourceExts: ['jsx', 'js', 'ts', 'tsx', 'cjs', 'json'] }

// // module.exports.resolver = {
// //     extraNodeModules: new Proxy({}, {
// //       get: (target, name) => path.join(process.cwd(), `node_modules/${name}`),
// //     }),
// // };