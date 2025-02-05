/* eslint-disable @typescript-eslint/no-require-imports */
var vi = require("./vi.json");
var ja = require("./ja.json");

const i18n = {
  translations: {
    vi,
    ja,
  },
  defaultLang: "vi",
  useBrowserDefault: true,
  // optional property will default to "query" if not set
  languageDataStore: "localStorage",
};
module.exports = i18n;
