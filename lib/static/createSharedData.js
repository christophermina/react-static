"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSharedData;

var _shorthash = _interopRequireDefault(require("shorthash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function createSharedData(data) {
  return {
    hash: _shorthash.default.unique(JSON.stringify(data)),
    data: data
  };
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(createSharedData, "createSharedData", "/Users/chrismina/dev/react-static/src/static/createSharedData.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=createSharedData.js.map