const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require("path");

// Expo CLI will await this method so you can optionally return a promise.
module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // If you want to add a new alias to the config.
//   config.resolve.alias['@streem/*'] = './packages/*';
  config.resolve.alias["@streem/sdk-core"] = path.resolve(__dirname, "./packages", "sdk-core", "lib")
  config.resolve.alias["@streem/api"] = path.resolve(__dirname, "./packages", "api", "lib")


  // Maybe you want to turn off compression in dev mode.
  if (config.mode === 'development') {
    config.devServer.compress = false;
  }

  // Or prevent minimizing the bundle when you build.
  if (config.mode === 'production') {
    config.optimization.minimize = false;
  }

  config.watch = true;

  // Finally return the new config for the CLI to use.
  return config;
};




// const { createWebpackConfigAsync } = require('expo-yarn-workspaces/webpack');
// const path = require("path");

// module.exports = async function(env, argv) {
//     const config = await createWebpackConfigAsync(env, argv);

//     // this is the metro property name, donno if we need a webpack equiv
//     // config.watchFolders = [
//     //     // path.resolve(__dirname, ".."),
//     //     path.resolve(__dirname, "./packages", "api"),
//     //     path.resolve(__dirname, "./packages", "sdk-core"),
//     // ];
//     config.resolve = { 
//         // alias: {},
//         alias: { 
//             '../Utilities/Platform': './node_modules/react-native-web/dist/exports/Platform',
//         //     "@streem/*": "./packages/*",
//         //     "@test/*": "./packages/*",
//          },
//         modules: [path.resolve(__dirname, 'packages/sdk-core'), path.resolve(__dirname, 'packages/api'), 'node_modules'],
//         // blockList: exclusionList([/sdk-core[\/\\]node_modules[/\\]react-native-reanimated[/\\].*/, /api[\/\\]node_modules[/\\]react-native-reanimated[/\\].*/]),
//         // alias: {
//         //     "react": path.resolve('./node_modules/react'),
//         //     "react-dom": path.resolve('./node_modules/react-dom'),
//         //     "react-native": path.resolve('./node_modules/react-native')
//         // },
//         // extraNodeModules: new Proxy({}, {
//         // get: (target, name) => path.join(process.cwd(), `./node_modules/${name}`),
//         // }),
//     }


//   return config;
// };

