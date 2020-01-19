"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeRoute;

var _utils = require("../../utils");

var _utils2 = require("../../browser/utils");

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

function normalizeRoute(route) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _parent$path = parent.path,
      parentPath = _parent$path === void 0 ? '/' : _parent$path;

  if (!route.path) {
    if (route.is404) {
      throw new Error("route.is404 has been deprecated. Use `path: '404'` instead! Route: ".concat(JSON.stringify(route)));
    }

    throw new Error("No path defined for route: ".concat(JSON.stringify(route)));
  }

  var originalRoutePath = (0, _utils.pathJoin)(route.path);
  var routePath = (0, _utils.pathJoin)(parentPath, route.path);

  if (typeof route.noIndex !== 'undefined') {
    console.warn("=> Warning: Route ".concat(route.path, " is using 'noIndex'. Did you mean 'noindex'?"));
  }

  var normalizedRoute = _objectSpread({}, route, {
    path: (0, _utils2.getRoutePath)(routePath),
    originalPath: originalRoutePath,
    noindex: typeof route.noindex !== 'undefined' ? route.noindex : parent.noindex,
    hasGetProps: !!route.getData,
    fromConfig: !route.isPage
  });

  return normalizedRoute;
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(normalizeRoute, "normalizeRoute", "/Users/chrismina/dev/react-static/src/static/getRoutes/normalizeRoute.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=normalizeRoute.js.map