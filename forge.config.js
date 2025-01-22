import { FusesPlugin } from "@electron-forge/plugin-fuses";
import { FuseV1Options, FuseVersion } from "@electron/fuses";

export const packagerConfig = {
  asar: true,
  executableName: "cemigtimer",
  config: {
    options: {
      icon: "./assets/iconTemplate.png",
      productName: "Cemig Timer",
    },
  },
};
export const rebuildConfig = {};
export const makers = [
  {
    name: "@electron-forge/maker-squirrel",
    config: {
      options: {
        icon: "./assets/iconTemplate.png",
        productName: "Cemig Timer",
      },
    },
  },
  {
    name: "@electron-forge/maker-zip",
    platforms: ["darwin"],
    config: {
      options: {
        icon: "./assets/iconTemplate.png",
        productName: "Cemig Timer",
      },
    },
  },
  {
    name: "@electron-forge/maker-deb",
    platforms: ["linux"],
    config: {
      options: {
        icon: "./assets/iconTemplate.png",
        productName: "Cemig Timer",
      },
    },
  },
  {
    name: "@electron-forge/maker-rpm",
    platforms: ["linux"],
    config: {
      options: {
        icon: "./assets/iconTemplate.png",
        productName: "Cemig Timer",
      },
    },
  },
];
export const plugins = [
  {
    name: "@electron-forge/plugin-auto-unpack-natives",
    config: {},
  },
  new FusesPlugin({
    version: FuseVersion.V1,
    [FuseV1Options.RunAsNode]: false,
    [FuseV1Options.EnableCookieEncryption]: true,
    [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
    [FuseV1Options.EnableNodeCliInspectArguments]: false,
    [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
    [FuseV1Options.OnlyLoadAppFromAsar]: true,
  }),
];
