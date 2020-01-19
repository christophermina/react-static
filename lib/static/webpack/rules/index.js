"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getStagedRules = void 0;

var _jsLoader = _interopRequireDefault(require("./jsLoader"));

var _cssLoader = _interopRequireDefault(require("./cssLoader"));

var _fileLoader = _interopRequireDefault(require("./fileLoader"));

var _jsLoaderExternal = _interopRequireDefault(require("./jsLoaderExternal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var getStagedRules = function getStagedRules(args) {
  return {
    jsLoader: (0, _jsLoader.default)(args),
    jsLoaderExt: (0, _jsLoaderExternal.default)(args),
    cssLoader: (0, _cssLoader.default)(args),
    fileLoader: (0, _fileLoader.default)(args)
  };
};

exports.getStagedRules = getStagedRules;

var _default = function _default(args) {
  return [{
    oneOf: [(0, _jsLoader.default)(args), (0, _jsLoaderExternal.default)(args), (0, _cssLoader.default)(args), (0, _fileLoader.default)(args)]
  }];
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getStagedRules, "getStagedRules", "/Users/chrismina/dev/react-static/src/static/webpack/rules/index.js");
  reactHotLoader.register(_default, "default", "/Users/chrismina/dev/react-static/src/static/webpack/rules/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=index.js.map