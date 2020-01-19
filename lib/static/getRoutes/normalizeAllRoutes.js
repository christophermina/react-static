"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeAllRoutes;

var _normalizeRoute = _interopRequireDefault(require("./normalizeRoute"));

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

// We recursively loop through the routes and their children and
// return an array of normalised routes.
// Original routes array [{ path: 'path', children: { path: 'to' } }]
// These can be returned as flat routes eg. [{ path: 'path' }, { path: 'path/to' }]
// Or they can be returned nested routes eg. [{ path: 'path', children: { path: 'path/to' } }]
function normalizeAllRoutes() {
  var routes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var config = arguments.length > 1 ? arguments[1] : undefined;
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var existingRoutes = {};
  var hasIndex;
  var has404;

  var recurseRoute = function recurseRoute(route, parent) {
    // if structure is nested (tree === true) normalizedRoute will
    // have children otherwise we fall back to the original route children
    // Normalize the route
    var normalizedRoute = (0, _normalizeRoute.default)(route, parent); // we check an array of paths to see
    // if route path already existings

    var existingRoute = existingRoutes[normalizedRoute.path];

    if (normalizedRoute.children) {
      normalizedRoute.children = normalizedRoute.children.map(function (childRoute) {
        return recurseRoute(childRoute, normalizedRoute);
      }).filter(Boolean);
    }

    var isPageExtension; // If the route exists and is a page route, we need to decorate the
    // page route with this routes information

    if (existingRoute) {
      if (existingRoute.isPage) {
        isPageExtension = true;
        Object.assign(existingRoute, _objectSpread({}, normalizedRoute, {
          component: existingRoute.component
        }));
        normalizedRoute = existingRoute;
      } else if (!config.disableDuplicateRoutesWarning) {
        // Otherwise, we shouldn't have duplicate routes
        console.warn('More than one route in static.config.js is defined for path:', normalizedRoute.path);
      }
    } // Keep track of the route existence


    existingRoutes[normalizedRoute.path] = normalizedRoute; // Keep track of index and 404 routes existence

    if (normalizedRoute.path === '/') {
      hasIndex = true;
    }

    if (normalizedRoute.path === '404') {
      has404 = true;
    }

    if (isPageExtension) {
      return false;
    }

    return normalizedRoute;
  };

  var normalizedRoutes = routes.map(function (route) {
    return recurseRoute(route);
  }).filter(Boolean);

  if (!config.tree) {
    var flatRoutes = [];

    var _recurseRoute = function _recurseRoute(route) {
      if (!opts.incremental || opts.incremental && (route.remove || route.fromConfig)) {
        flatRoutes.push(route);
      }

      if (route.children) {
        route.children.forEach(_recurseRoute);
      }

      route.children = undefined;
    };

    normalizedRoutes.forEach(_recurseRoute);
    normalizedRoutes = flatRoutes;
  }

  return {
    routes: normalizedRoutes,
    hasIndex: hasIndex,
    has404: has404
  };
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(normalizeAllRoutes, "normalizeAllRoutes", "/Users/chrismina/dev/react-static/src/static/getRoutes/normalizeAllRoutes.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=normalizeAllRoutes.js.map