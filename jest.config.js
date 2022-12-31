module.exports = {
  testEnvironment: "miniflare",
  testMatch: ["**/*.spec.ts"],
  transform: {
    "^.+\\.ts?$": "esbuild-jest",
  },
  moduleNameMapper: {
    "jsonpath-plus":
      "<rootDir>/node_modules/jsonpath-plus/dist/index-node-cjs.cjs",
  },
};