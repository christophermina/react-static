"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _babelPreset = _interopRequireDefault(require("../../../../babel-preset"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// we check which babel config file exists in the project root
var readBabelConfig = function readBabelConfig(root) {
  var babelFiles = ["".concat(root, "/.babelrc"), "".concat(root, "/.babelrc.js"), "".concat(root, "/babel.config.js")];
  var extendsFile = {};
  babelFiles.forEach(function (file) {
    try {
      _fsExtra.default.statSync(file);

      extendsFile = {
        extends: file
      };
    } catch (err) {// dont do anything
    }
  });
  return extendsFile;
};

var _default = function _default(_ref) {
  var config = _ref.config,
      stage = _ref.stage;
  var babelFile = {};
  var isRelativePath = config.paths.DIST.startsWith(config.paths.ROOT);

  if (!isRelativePath) {
    babelFile = readBabelConfig(config.paths.ROOT);
  }

  return {
    test: /\.(js|jsx|mjs)$/,
    include: [config.paths.SRC, /react-static-templates\.js/, /react-static-browser-plugins\.js/],
    use: [// 'thread-loader',
    {
      loader: 'babel-loader',
      options: _objectSpread({}, babelFile, {
        root: config.paths.ROOT,
        presets: [[_babelPreset.default, {
          modules: false
        }]],
        cacheDirectory: isRelativePath ? stage !== 'prod' : config.paths.TEMP,
        compact: stage === 'prod',
        highlightCode: true
      })
    }]
  };
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(readBabelConfig, "readBabelConfig", "/Users/chrismina/dev/react-static/src/static/webpack/rules/jsLoader.js");
  reactHotLoader.register(_default, "default", "/Users/chrismina/dev/react-static/src/static/webpack/rules/jsLoader.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=jsLoader.js.map