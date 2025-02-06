/* eslint-disable @typescript-eslint/no-require-imports */
var vi = require("./vi.json");
var ja = require("./ja.json");
var zh = require("./zh.json");
var ko = require("./ko.json");
var en = require("./en.json");

const i18n = {
  translations: {
    vi,
    ja,
    zh,
    ko,
    en,
  },
  defaultLang: "vi",
  useBrowserDefault: true,
  // optional property will default to "query" if not set
  languageDataStore: "localStorage",
};
module.exports = i18n;
