"use strict";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/* eslint-disable import/no-dynamic-require */
var plugins = require(process.env.REACT_STATIC_PLUGINS_PATH).default;

var _require = require('./browser'),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept(process.env.REACT_STATIC_PLUGINS_PATH, function () {
    registerPlugins(require(process.env.REACT_STATIC_PLUGINS_PATH).default);
  });
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(plugins, "plugins", "/Users/chrismina/dev/react-static/src/bootstrapPlugins.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=bootstrapPlugins.js.map