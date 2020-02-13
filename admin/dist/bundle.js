/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/component/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/vue-router/dist/vue-router.esm.js":
/*!*********************************************************!*\
  !*** ../node_modules/vue-router/dist/vue-router.esm.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
  * vue-router v3.1.5
  * (c) 2020 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if ( true && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

function isExtendedError (constructor, err) {
  return (
    err instanceof constructor ||
    // _name is to support IE9 too
    (err && (err.name === constructor.name || err._name === constructor._name))
  )
}

function extend (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

var View = {
  name: 'RouterView',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    // used by devtools to display a router-view badge
    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      var vnodeData = parent.$vnode ? parent.$vnode.data : {};
      if (vnodeData.routerView) {
        depth++;
      }
      if (vnodeData.keepAlive && parent._directInactive && parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      var cachedData = cache[name];
      var cachedComponent = cachedData && cachedData.component;
      if (cachedComponent) {
        // #2301
        // pass props
        if (cachedData.configProps) {
          fillPropsinData(cachedComponent, data, cachedData.route, cachedData.configProps);
        }
        return h(cachedComponent, data, children)
      } else {
        // render previous empty view
        return h()
      }
    }

    var matched = route.matched[depth];
    var component = matched && matched.components[name];

    // render empty node if no matched route or no config component
    if (!matched || !component) {
      cache[name] = null;
      return h()
    }

    // cache component
    cache[name] = { component: component };

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // register instance in init hook
    // in case kept-alive component be actived when routes changed
    data.hook.init = function (vnode) {
      if (vnode.data.keepAlive &&
        vnode.componentInstance &&
        vnode.componentInstance !== matched.instances[name]
      ) {
        matched.instances[name] = vnode.componentInstance;
      }
    };

    var configProps = matched.props && matched.props[name];
    // save route and configProps in cachce
    if (configProps) {
      extend(cache[name], {
        route: route,
        configProps: configProps
      });
      fillPropsinData(component, data, route, configProps);
    }

    return h(component, data, children)
  }
};

function fillPropsinData (component, data, route, configProps) {
  // resolve props
  var propsToPass = data.props = resolveProps(route, configProps);
  if (propsToPass) {
    // clone to prevent mutation
    propsToPass = data.props = extend({}, propsToPass);
    // pass non-declared props as attrs
    var attrs = data.attrs = data.attrs || {};
    for (var key in propsToPass) {
      if (!component.props || !(key in component.props)) {
        attrs[key] = propsToPass[key];
        delete propsToPass[key];
      }
    }
  }
}

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (true) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
     true && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  params = params || {};
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));

    // Fix #2505 resolving asterisk routes { name: 'not-found', params: { pathMatch: '/not-found' }}
    if (params.pathMatch) { params[0] = params.pathMatch; }

    return filler(params, { pretty: true })
  } catch (e) {
    if (true) {
      // Fix #3072 no warn if `pathMatch` is string
      warn(typeof params.pathMatch === 'string', ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  } finally {
    // delete the 0 if it was added
    delete params[0];
  }
}

/*  */

function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next._normalized) {
    return next
  } else if (next.name) {
    next = extend({}, raw);
    var params = next.params;
    if (params && typeof params === 'object') {
      next.params = extend({}, params);
    }
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = extend({}, next);
    next._normalized = true;
    var params$1 = extend(extend({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params$1;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params$1, ("path " + (current.path)));
    } else if (true) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var noop = function () {};

var Link = {
  name: 'RouterLink',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(
      this.to,
      current,
      this.append
    );
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback =
      globalActiveClass == null ? 'router-link-active' : globalActiveClass;
    var exactActiveClassFallback =
      globalExactActiveClass == null
        ? 'router-link-exact-active'
        : globalExactActiveClass;
    var activeClass =
      this.activeClass == null ? activeClassFallback : this.activeClass;
    var exactActiveClass =
      this.exactActiveClass == null
        ? exactActiveClassFallback
        : this.exactActiveClass;

    var compareTarget = route.redirectedFrom
      ? createRoute(null, normalizeLocation(route.redirectedFrom), null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location, noop);
        } else {
          router.push(location, noop);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) {
        on[e] = handler;
      });
    } else {
      on[this.event] = handler;
    }

    var data = { class: classes };

    var scopedSlot =
      !this.$scopedSlots.$hasNormal &&
      this.$scopedSlots.default &&
      this.$scopedSlots.default({
        href: href,
        route: route,
        navigate: handler,
        isActive: classes[activeClass],
        isExactActive: classes[exactActiveClass]
      });

    if (scopedSlot) {
      if (scopedSlot.length === 1) {
        return scopedSlot[0]
      } else if (scopedSlot.length > 1 || !scopedSlot.length) {
        if (true) {
          warn(
            false,
            ("RouterLink with to=\"" + (this.to) + "\" is trying to use a scoped slot but it didn't provide exactly one child. Wrapping the content with a span element.")
          );
        }
        return scopedSlot.length === 0 ? h() : h('span', {}, scopedSlot)
      }
    }

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var aData = (a.data = extend({}, a.data));
        aData.on = aData.on || {};
        // transform existing events in both objects into arrays so we can push later
        for (var event in aData.on) {
          var handler$1 = aData.on[event];
          if (event in on) {
            aData.on[event] = Array.isArray(handler$1) ? handler$1 : [handler$1];
          }
        }
        // append new listeners for router-link
        for (var event$1 in on) {
          if (event$1 in aData.on) {
            // on[event] is always a function
            aData.on[event$1].push(on[event$1]);
          } else {
            aData.on[event$1] = handler;
          }
        }

        var aAttrs = (a.data.attrs = extend({}, a.data.attrs));
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('RouterView', View);
  Vue.component('RouterLink', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  if (true) {
    // warn if routes do not include leading slashes
    var found = pathList
    // check for missing leading slash
      .filter(function (path) { return path && path.charAt(0) !== '*' && path.charAt(0) !== '/'; });

    if (found.length > 0) {
      var pathNames = found.map(function (path) { return ("- " + path); }).join('\n');
      warn(false, ("Non-nested routes must include a leading slash character. Fix the following routes: \n" + pathNames));
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (true) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(
        path || name
      )) + " cannot be a " + "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions =
    route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(path, parent, pathToRegexpOptions.strict);

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props:
      route.props == null
        ? {}
        : route.components
          ? route.props
          : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (true) {
      if (
        route.name &&
        !route.redirect &&
        route.children.some(function (child) { return /^\/?$/.test(child.path); })
      ) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
            "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
            "the default child route will not be rendered. Remove the name from " +
            "this route and use the name of the default child route for named " +
            "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias) ? route.alias : [route.alias];
    for (var i = 0; i < aliases.length; ++i) {
      var alias = aliases[i];
      if ( true && alias === path) {
        warn(
          false,
          ("Found an alias with the same value as the path: \"" + path + "\". You have to remove that alias. It will be ignored in development.")
        );
        // skip in dev to make it work
        continue
      }

      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    }
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if ( true && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
          "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (
  path,
  pathToRegexpOptions
) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (true) {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(
        !keys[key.name],
        ("Duplicate param keys in route with path: \"" + path + "\"")
      );
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (
  path,
  parent,
  strict
) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */



function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (true) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
      return _createRoute(record, location, redirectedFrom)
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
      ? originalRedirect(createRoute(record, location, null, router))
      : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (true) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (true) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (true) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      // Fix #1994: using * with props: true generates a param named 0
      params[key.name || 'pathMatch'] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */

// use User Timing api (if present) for more accurate key precision
var Time =
  inBrowser && window.performance && window.performance.now
    ? window.performance
    : Date;

function genStateKey () {
  return Time.now().toFixed(3)
}

var _key = genStateKey();

function getStateKey () {
  return _key
}

function setStateKey (key) {
  return (_key = key)
}

/*  */

var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  // Fix for #2195 Add optional third attribute to workaround a bug in safari https://bugs.webkit.org/show_bug.cgi?id=182678
  // Fix for #2774 Support for apps loaded from Windows file shares not mapped to network drives: replaced location.origin with
  // window.location.protocol + '//' + window.location.host
  // location.host contains the port and location.hostname doesn't
  var protocolAndPath = window.location.protocol + '//' + window.location.host;
  var absolutePath = window.location.href.replace(protocolAndPath, '');
  window.history.replaceState({ key: getStateKey() }, '', absolutePath);
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (true) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior.call(
      router,
      to,
      from,
      isPop ? position : null
    );

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll
        .then(function (shouldScroll) {
          scrollToPosition((shouldScroll), position);
        })
        .catch(function (err) {
          if (true) {
            assert(false, err.toString());
          }
        });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

var hashStartsWithNumberRE = /^#\d/;

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    // getElementById would still fail if the selector contains a more complicated query like #main[data-attr]
    // but at the same time, it doesn't make much sense to select an element with an id and an extra selector
    var el = hashStartsWithNumberRE.test(shouldScroll.selector) // $flow-disable-line
      ? document.getElementById(shouldScroll.selector.slice(1)) // $flow-disable-line
      : document.querySelector(shouldScroll.selector);

    if (el) {
      var offset =
        shouldScroll.offset && typeof shouldScroll.offset === 'object'
          ? shouldScroll.offset
          : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState =
  inBrowser &&
  (function () {
    var ua = window.navigator.userAgent;

    if (
      (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
      ua.indexOf('Mobile Safari') !== -1 &&
      ua.indexOf('Chrome') === -1 &&
      ua.indexOf('Windows Phone') === -1
    ) {
      return false
    }

    return window.history && 'pushState' in window.history
  })();

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      // preserve existing history state as it could be overriden by the user
      var stateCopy = extend({}, history.state);
      stateCopy.key = getStateKey();
      history.replaceState(stateCopy, '', url);
    } else {
      history.pushState({ key: setStateKey(genStateKey()) }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
           true && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

var NavigationDuplicated = /*@__PURE__*/(function (Error) {
  function NavigationDuplicated (normalizedLocation) {
    Error.call(this);
    this.name = this._name = 'NavigationDuplicated';
    // passing the message to super() doesn't seem to work in the transpiled version
    this.message = "Navigating to current location (\"" + (normalizedLocation.fullPath) + "\") is not allowed";
    // add a stack property so services like Sentry can correctly display it
    Object.defineProperty(this, 'stack', {
      value: new Error().stack,
      writable: true,
      configurable: true
    });
    // we could also have used
    // Error.captureStackTrace(this, this.constructor)
    // but it only exists on node and chrome
  }

  if ( Error ) NavigationDuplicated.__proto__ = Error;
  NavigationDuplicated.prototype = Object.create( Error && Error.prototype );
  NavigationDuplicated.prototype.constructor = NavigationDuplicated;

  return NavigationDuplicated;
}(Error));

// support IE9
NavigationDuplicated._name = 'NavigationDuplicated';

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (
  location,
  onComplete,
  onAbort
) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(
    route,
    function () {
      this$1.updateRoute(route);
      onComplete && onComplete(route);
      this$1.ensureURL();

      // fire ready cbs once
      if (!this$1.ready) {
        this$1.ready = true;
        this$1.readyCbs.forEach(function (cb) {
          cb(route);
        });
      }
    },
    function (err) {
      if (onAbort) {
        onAbort(err);
      }
      if (err && !this$1.ready) {
        this$1.ready = true;
        this$1.readyErrorCbs.forEach(function (cb) {
          cb(err);
        });
      }
    }
  );
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    // after merging https://github.com/vuejs/vue-router/pull/2771 we
    // When the user navigates through history through back/forward buttons
    // we do not want to throw the error. We only throw it if directly calling
    // push/replace. That's why it's not included in isError
    if (!isExtendedError(NavigationDuplicated, err) && isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) {
          cb(err);
        });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort(new NavigationDuplicated(route))
  }

  var ref = resolveQueue(
    this.current.matched,
    route.matched
  );
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' &&
            (typeof to.path === 'string' || typeof to.name === 'string'))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) {
            cb();
          });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(
    activated,
    'beforeRouteEnter',
    function (guard, _, match, key) {
      return bindEnterGuard(guard, match, key, cbs, isValid)
    }
  )
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
      next(cb);
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (
    instances[key] &&
    !instances[key]._isBeingDestroyed // do not reuse being destroyed instance
  ) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */

var HTML5History = /*@__PURE__*/(function (History) {
  function HTML5History (router, base) {
    var this$1 = this;

    History.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (supportsScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History ) HTML5History.__proto__ = History;
  HTML5History.prototype = Object.create( History && History.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = decodeURI(window.location.pathname);
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */

var HashHistory = /*@__PURE__*/(function (History) {
  function HashHistory (router, base, fallback) {
    History.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History ) HashHistory.__proto__ = History;
  HashHistory.prototype = Object.create( History && History.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(
      supportsPushState ? 'popstate' : 'hashchange',
      function () {
        var current = this$1.current;
        if (!ensureSlash()) {
          return
        }
        this$1.transitionTo(getHash(), function (route) {
          if (supportsScroll) {
            handleScroll(this$1.router, route, current, true);
          }
          if (!supportsPushState) {
            replaceHash(route.fullPath);
          }
        });
      }
    );
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(
      location,
      function (route) {
        pushHash(route.fullPath);
        handleScroll(this$1.router, route, fromRoute, false);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(
      location,
      function (route) {
        replaceHash(route.fullPath);
        handleScroll(this$1.router, route, fromRoute, false);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(cleanPath(base + '/#' + location));
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  // empty path
  if (index < 0) { return '' }

  href = href.slice(index + 1);
  // decode the hash but not the search or hash
  // as search(query) is already decoded
  // https://github.com/vuejs/vue-router/issues/2708
  var searchIndex = href.indexOf('?');
  if (searchIndex < 0) {
    var hashIndex = href.indexOf('#');
    if (hashIndex > -1) {
      href = decodeURI(href.slice(0, hashIndex)) + href.slice(hashIndex);
    } else { href = decodeURI(href); }
  } else {
    href = decodeURI(href.slice(0, searchIndex)) + href.slice(searchIndex);
  }

  return href
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */

var AbstractHistory = /*@__PURE__*/(function (History) {
  function AbstractHistory (router, base) {
    History.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History ) AbstractHistory.__proto__ = History;
  AbstractHistory.prototype = Object.create( History && History.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(
      location,
      function (route) {
        this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
        this$1.index++;
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(
      location,
      function (route) {
        this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(
      route,
      function () {
        this$1.index = targetIndex;
        this$1.updateRoute(route);
      },
      function (err) {
        if (isExtendedError(NavigationDuplicated, err)) {
          this$1.index = targetIndex;
        }
      }
    );
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */



var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (true) {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

   true && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // set up app destroyed handler
  // https://github.com/vuejs/vue-router/issues/2639
  app.$once('hook:destroyed', function () {
    // clean out app from this.apps array once destroyed
    var index = this$1.apps.indexOf(app);
    if (index > -1) { this$1.apps.splice(index, 1); }
    // ensure we still have a main app or null if no apps
    // we do not release the router so it can be reused
    if (this$1.app === app) { this$1.app = this$1.apps[0] || null; }
  });

  // main app previously initialized
  // return as we don't need to set up new history listener
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

  // $flow-disable-line
  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      this$1.history.push(location, resolve, reject);
    })
  } else {
    this.history.push(location, onComplete, onAbort);
  }
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

  // $flow-disable-line
  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      this$1.history.replace(location, resolve, reject);
    })
  } else {
    this.history.replace(location, onComplete, onAbort);
  }
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  current = current || this.history.current;
  var location = normalizeLocation(
    to,
    current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.1.5';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = (VueRouter);


/***/ }),

/***/ "./public/component/app.js":
/*!*********************************!*\
  !*** ./public/component/app.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./public/component/router.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./public/component/store.js");
/* harmony import */ var _glc_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glc/header.js */ "./public/component/glc/header.js");
/* harmony import */ var _glc_nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./glc/nav.js */ "./public/component/glc/nav.js");
/* harmony import */ var _loc_newsbord_news_table_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loc/newsbord/news-table.js */ "./public/component/loc/newsbord/news-table.js");






// import 'es6-promise/auto'
new Vue({
  store: _store__WEBPACK_IMPORTED_MODULE_1__["store"],
  router: _router__WEBPACK_IMPORTED_MODULE_0__["default"],
  components: {
    'component-header': _glc_header_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    'component-nav': _glc_nav_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    'news-bord': _loc_newsbord_news_table_js__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  template: `
  <div>
        <component-header></component-header>
        <component-nav v-bind:comcode='this.$store.state.comcode'></component-nav>
        <router-view></router-view>
  </div>
  `,
  created(){
      this.$store.state.id = sessionStorage.ID
      this.$store.state.Name = sessionStorage.name
      this.$store.state.Class = sessionStorage.Class
      this.$store.state.Activation = sessionStorage.Activation
      this.$store.state.comcode = sessionStorage.comcode
  }
 

}).$mount('#app')


/***/ }),

/***/ "./public/component/glc/del-modal.js":
/*!*******************************************!*\
  !*** ./public/component/glc/del-modal.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eventbus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventbus.js */ "./public/component/glc/eventbus.js");


const DelteModal = {
    props: ['tb'],
    template: `<div class="pop-window fade" id="modal-del">
                <div class="alert">
                    <div class="alert_con">
                        <i class="material-icons red">error_outline</i>
                        <p>{{ment}}</p>
                        <p>{{ment2}}</p>
                    </div>
                    <div class="modal_foot">
                        <span  class="b_red">확인</span>
                        <span v-on:click='ModalClose' class="b_sgrey">취소</span>
                    </div>
                </div>
            </div>`,
    data() {
        return {
            idx: null,
            thisTarget: null,
            Data: null,
            ment: '정말로 삭제 하시겠습니까?',
            ment2:'(삭제후엔 복구가 불가능합니다)'
        }
    },
    created() {
        _eventbus_js__WEBPACK_IMPORTED_MODULE_0__["default"].$on('News', (Data) => {
            this.ment = '보도자료를 삭제합니다'
            console.log(Data)
        })
        _eventbus_js__WEBPACK_IMPORTED_MODULE_0__["default"].$on('consul', (Data) => {
            this.ment = '상담내역을 삭제합니다'
            console.log('상담신청삭제' + Data)
        })
        _eventbus_js__WEBPACK_IMPORTED_MODULE_0__["default"].$on('NewsImg', (Data) => {
            this.ment = '메인 이미지를 삭제합니다'
            console.log('이미지삭제' + Data)
        })
        _eventbus_js__WEBPACK_IMPORTED_MODULE_0__["default"].$on('account_del', (Data) => {
            this.ment = '사용자 계정을 삭제합니다'

            console.log('사용자계정 삭제' + Data)
        })
        _eventbus_js__WEBPACK_IMPORTED_MODULE_0__["default"].$on('account_use', (Data) => {
            this.ment = '사용자 계정 접근을 중단합니다'
            this.ment2 = ''

            console.log('사용자 계정 비승인' + Data)
        })
    },
    methods: {
        ModalClose() {
            const Modal = document.getElementById('modal-del')
            Modal.style.opacity = '0';

            setTimeout(() => {
                Modal.style.display = 'none';
            }, 100);
        }

    }
}

/* harmony default export */ __webpack_exports__["default"] = (DelteModal);

/***/ }),

/***/ "./public/component/glc/etc-modal.js":
/*!*******************************************!*\
  !*** ./public/component/glc/etc-modal.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eventbus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventbus.js */ "./public/component/glc/eventbus.js");


const etcModal = {
    template: `<div class="pop-window fade" id="modal-etc">
                <div class="alert">
                    <div class="alert_con">
                        <i class="material-icons blue">error_outline</i>
                        <p>패스워드 변경</p>
                        <ul class='inputs' v-if="this.mode === 'chpw'">
                            <form>
                            <li>
                                <input type='password' id='reqpassword' placeholder='변경하실 패스워드'>
                            </li>
                            <li>
                                <input type='password' id='reqpassword_re' placeholder='변경하실 패스워드 확인'>
                            </li>
                            </form>
                        </ul>
                        <ul class='inputs' v-else-if="this.mode === 'cflag'">
                            <form>
                            <li>
                                <select disabled>
                                    <option>배정팀(비활성화)</option>
                                </select>
                            </li>
                            <li>
                         
                                <select>
                                    <option>배정할 상담사</option>
                                </select>
                            </li>
                         
                            </form>
                        </ul>
                    </div>

                    <div class="modal_foot">
                        <span class="b_blue" @click='PostData' v-if="mode === 'chpw'">확인</span>
                        <span class="b_blue" @click=' shareData' v-else-if="mode === 'cflag'">확인</span>
                        <span v-on:click='ModalClose' class="b_sgrey">취소</span>
                    </div>
                </div>
            </div>`,
    data() {
        return {
            idx: null,
            Data: null,
            mode: null
        }
    },
    created() {
        _eventbus_js__WEBPACK_IMPORTED_MODULE_0__["default"].$on('changePw', (Data) => {
            console.log('패스워드 변경')
            this.mode = 'chpw';
        })

        _eventbus_js__WEBPACK_IMPORTED_MODULE_0__["default"].$on('shareCflag', (Data) => {
            console.log('상담사배정')
            this.mode = 'cflag';
            console.log(Data)
        })


    },
  
    methods: {
        ModalClose() {
            const Modal = document.getElementById('modal-etc')
            Modal.style.opacity = '0';

            setTimeout(() => {
                Modal.style.display = 'none';
            }, 100);
        },
        shareData(){

        },
        PostData(a) {
            const reqPassword = document.getElementById('reqpassword')
            const reqPasswordRe = document.getElementById('reqpassword_re')
            if (reqPassword.value == reqPasswordRe.value) {
                console.log('일치2')
            } else {
                console.log('불일치')
            }
            // if(this.mode == 'user'){
            //     eventBus.$on('idx',(Data)=>{
            //         this.Data = Data.Data
            //     })
            // }
        },

    }
}

/* harmony default export */ __webpack_exports__["default"] = (etcModal);
2

/***/ }),

/***/ "./public/component/glc/eventbus.js":
/*!******************************************!*\
  !*** ./public/component/glc/eventbus.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const EventBus = new Vue();
/* harmony default export */ __webpack_exports__["default"] = (EventBus);

/***/ }),

/***/ "./public/component/glc/header.js":
/*!****************************************!*\
  !*** ./public/component/glc/header.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../router */ "./public/component/router.js");


const HeaderComponent = {
    template: `<header class="head_wrap">
    <div class="head_bi">
        <h1>금강관리자 프로토타임</h1>
        </div>
            <div class="head_info">
                <span class="btn_out" v-on:click="DestorySessionData">로그아웃</span>
            </div>
</header>`,
    methods:{
        DestorySessionData(){
            var y = confirm("로그아웃 하시겠습니까?");
            if (y == true) {
                sessionStorage.clear();
                _router__WEBPACK_IMPORTED_MODULE_0__["default"].push({
                    path: '/',
                    name: 'login'
                  })
            }
        }
    }

}

/* harmony default export */ __webpack_exports__["default"] = (HeaderComponent);

/***/ }),

/***/ "./public/component/glc/list-numbering.js":
/*!************************************************!*\
  !*** ./public/component/glc/list-numbering.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eventbus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventbus.js */ "./public/component/glc/eventbus.js");



const listNumber = {
    props: ['DataLength','nowpage'],
    template: `<div class="page">
                <span class="none" v-if="start === 1"><i class="material-icons vam">navigate_before</i></span>
                <span v-else v-on:click='FrontList'><i class="material-icons vam">navigate_before</i></span>

                <span class="nobtn" v-for = "j in limit" v-if = 'j <= limit && j >= start' v-on:click='NextPage(j,j+1)'>{{j}}</span>

                <span v-on:click='NextList' v-if='DataLength > 10 && limit < DataLength '><i class="material-icons vam">navigate_next</i></span>
                <span class='none' v-else><i class="material-icons vam">navigate_next</i></span>

            </div>`,
    data(){
        return{
            thisNumber:null,
            thisIndex:0,
            start:1,
            limit:10,
            lists:null              
        }
    },
    created(){

        this.thisNumber = this.DataLength
        if(this.DataLength <= 10){
            this.limit = this.DataLength
        }
        _eventbus_js__WEBPACK_IMPORTED_MODULE_0__["default"].$on('ListLength',(Data)=>{
        })

        _eventbus_js__WEBPACK_IMPORTED_MODULE_0__["default"].$on('UpdateList',(Data)=>{
            this.limit = Data.DataLength;
            this.thisNumber = Data.nowpage
        })

    },
    mounted(){
        this.thisNumber = this.nowpage
        const NoBtn = document.querySelectorAll('.nobtn')
        if(NoBtn.length>0){
            NoBtn[0].className = 'nobtn on'
        }
    },
    updated(){
        const NoBtn = document.querySelectorAll('.nobtn')
        if(NoBtn.length>0){
            NoBtn[0].className = 'nobtn on'
        }

    },
    methods:{
        ActivationBtn(j){

            const NoBtn = document.querySelectorAll('.nobtn')
            const LimitNo = this.limit - 10;
            for(let i = 0; i < NoBtn.length; i++){
                NoBtn[i].className = 'nobtn'
            }

            if(this.limit == this.DataLength){
                NoBtn[j%10-1].className = 'nobtn on'
            }
            
            else{
                NoBtn[j-1-LimitNo].className = 'nobtn on'
            }
        },
        NextPage(i,ThisIndex){
            if(this.thisIndex+1 < ThisIndex){
                this.thisNumber+=10;
                this.thisIndex = i
                this.ActivationBtn(i)
            }
            else if(this.thisIndex+1 > ThisIndex){
                this.thisNumber-=10;
                this.thisIndex = i
                this.ActivationBtn(i)
            }
            _eventbus_js__WEBPACK_IMPORTED_MODULE_0__["default"].$emit('NextPage',i-1)    

        },
        NextList(){
            this.start+=10;
            if(this.limit+10 > this.DataLength){
                this.limit = this.DataLength
                
            }
            else{
                this.limit+=10;
                this.ActivationBtn(this.start)
            }
            this.NextPage(this.start,this.start+1)

        },
        FrontList(){
            
            this.start-=10;
            this.limit = Math.ceil((this.limit-10)/10)*10

            if(this.start == 1){
                this.limit = 10;
            }

            this.NextPage(this.start,this.start+1)
            this.ActivationBtn(this.start)

        }

    }
  
}

/* harmony default export */ __webpack_exports__["default"] = (listNumber);

/***/ }),

/***/ "./public/component/glc/nav.js":
/*!*************************************!*\
  !*** ./public/component/glc/nav.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eventbus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventbus */ "./public/component/glc/eventbus.js");

const NavComponent = {
    props:['comcode'],
    template: `<nav>
                    <ul>
                        <router-link tag='li' to='/consul' v-if="comcodeData==='1'">
                            <b class="caret fr"></b>
                            상담신청
                        </router-link>
                        
                        <router-link tag='li' to='/cflag' v-if="comcodeData==='100'">
                            <b class="caret fr"></b>
                            배정받은상담
                        </router-link>
                        <router-link tag='li' to='/userview' v-if="comcodeData==='1'">
                            <b class="caret fr"></b>
                            사용자관리
                        </router-link>
                        <router-link tag='li' to='/newsbord' v-if="comcodeData==='1'">
                            <b class="caret fr"></b>
                            보도자료
                        </router-link>
                        <router-link tag='li' to='/1' v-if="comcodeData==='1'">
                            <b class="caret fr"></b>
                            조감도관리
                        </router-link>

                        <router-link tag='li' to='/2' v-if="comcodeData==='1'">
                            <b class="caret fr"></b>
                            엑셀파일 관리/입주의향서
                        </router-link>

                        <router-link tag='li' to='/4' v-if="comcodeData==='1'">
                            <b class="caret fr"></b>
                            현장사진/드론영상
                        </router-link>
                    </ul>
                </nav>`,
    data() {
        return {
            comcodeData:sessionStorage.comcode
        }
    },
    created(){
        _eventbus__WEBPACK_IMPORTED_MODULE_0__["default"].$on('nav',(Data)=>{
            this.comcodeData = Data
        })
    }
   
}

/* harmony default export */ __webpack_exports__["default"] = (NavComponent);

/***/ }),

/***/ "./public/component/glc/save-modal.js":
/*!********************************************!*\
  !*** ./public/component/glc/save-modal.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eventbus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventbus.js */ "./public/component/glc/eventbus.js");


const saveModal = {
    template: `<div class="pop-window fade" id="modal-alert">
                <div class="alert">
                    <div class="alert_con">
                        <i class="material-icons blue">error_outline</i>
                        <p>{{ment}}</p>
                    </div>
                    <div class="modal_foot">
                        <span class="b_blue">확인</span>
                        <span v-on:click='ModalClose' class="b_sgrey">취소</span>
                    </div>
                </div>
            </div>`,
    data() {
        return {
            idx: null,
            Data:null,
            mode:null,
            ment:"보도자료를 등록 하시겠습니까?"
        }
    },
    mounted(){
        _eventbus_js__WEBPACK_IMPORTED_MODULE_0__["default"].$on('new',(Data)=>{
            this.ment = '보도자료를 등록 하시겠습니까?'
            this.mode = 'new'
        })
        _eventbus_js__WEBPACK_IMPORTED_MODULE_0__["default"].$on('updateNews',(Data)=>{
            this.ment = '보도자료를 수정 하시겠습니까?'
            this.mode = 'update'
        })
        _eventbus_js__WEBPACK_IMPORTED_MODULE_0__["default"].$on('account_use',(Data)=>{
            this.ment = '계정 사용을 승인합니다'
            this.mode = 'acc'
        })
       

    },

    methods: {
        ModalClose() {
            const Modal = document.getElementById('modal-alert')
            Modal.style.opacity = '0';

            setTimeout(() => {
                Modal.style.display = 'none';
            }, 100);
        },
        GetData(a) {
            // if(this.mode == 'user'){
            //     eventBus.$on('idx',(Data)=>{
            //         this.Data = Data.Data
            //     })
            // }
        },
        // PostData(){
        //     if(this.mode == 'user'){
        //         let baseURI = 'api/user.proc.php'

        //         axios.post(`${baseURI}`, {
        //             mode:'user_update',
        //             idx:this.Data.Idx,
        //             chId:this.Data.ChId,
        //             chPw:this.Data.ChPw,
        //             chPhone:this.Data.ChPhone
        //         })
        //         .then((result) => {
        //             if(result.data.phpResult == 'ok'){
        //                 alert('변경이완료되었습니다')
        //                 this.ModalClose();
        //                 eventBus.$emit('userInfo',"change")
        //             }
        //         })
        //         .catch(err => console.log('Login: ', err));
        //     }
        
        // }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (saveModal);

/***/ }),

/***/ "./public/component/loc/cosul/consil-table-share.js":
/*!**********************************************************!*\
  !*** ./public/component/loc/cosul/consil-table-share.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glc_list_numbering_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../glc/list-numbering.js */ "./public/component/glc/list-numbering.js");
/* harmony import */ var _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../glc/eventbus.js */ "./public/component/glc/eventbus.js");




const shareConsulView = {
    template: `
        <div class="con_wrap">
        <div class='content consul_bord'>
            <h2>배정된상담신청</h2>
    <div class='table_wrap consul_wrap'>
                <div class='filters'>
                    <span>배정자료</span><b>{{this.results.length}}건</b>
                    <select v-on:change="searchCate($event)">
                        <option value='전체'>전체</option>
                        <option value='삼성'>삼성</option>
                        <option value='천안'>천안</option>
                        <option value='부동산'>부동산</option>
                    </select>


                </div>
                <table class='consul_tb'>
                    <thead>
                        <tr>
                            <td></td>
                            <td>번호</td>
                            <td>분류</td>
                            <td>고객명</td>
                            <td>전화번호</td>
                            <td>소속</td>
                            <td>담당</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for='(result,i) in results' v-if='i < limit && i >= start'>
                            <td><input type="checkbox" id="checkbox_1" value="" /></td>
                            <router-link tag='td' class='tb_cursor' v-bind:to = "'consul/consulview/'+result.idx" >{{i+1}}</router-link>
                            <router-link tag='td' class='tb_cursor' v-bind:to = "'consul/consulview/'+result.idx" >{{result.cate}}</router-link>
                            <router-link tag='td' class='tb_cursor' v-bind:to = "'consul/consulview/'+result.idx" >{{result.reqName}}</router-link>
                            <router-link tag='td' class='tb_cursor' v-bind:to = "'consul/consulview/'+result.idx" >{{result.reqPhone}}</router-link>
                            <router-link tag='td' class='tb_cursor' v-bind:to = "'consul/consulview/'+result.idx" >{{result.Class}}</router-link>
                            <router-link tag='td' class='tb_cursor' v-bind:to = "'consul/consulview/'+result.idx" >{{result.Cflag}}</router-link>
                        </tr>
                    </tbody>
                </table>
                <list-number v-bind:nowpage = 'this.limit-10' v-bind:DataLength='Math.ceil((this.results.length)/10)'></list-number>
            </div>
            <div>
            </div>
        </div>
    </div>`,
    components: {
        'list-number': _glc_list_numbering_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    },
    data() {
        return {
            lists: Array,
            results: Array,
            start: 0,
            limit: 10
        }
    },

    created() {
        this.lists = [{
                idx: 0,
                cate: '삼성',
                reqName: '개발자',
                reqPhone: '01023866487',
                Class: "금강",
                Cflag: '김다우'
            },
            {
                idx: 0,
                cate: '삼성',
                reqName: '개발자',
                reqPhone: '01023866487',
                Class: "금강",
                Cflag: '김다우'
            }
        ]

        // db에서 가져온데이터를 this.lists에 담아야함


    },
    mounted() {
        this.results = this.lists;
        _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_1__["default"].$emit('UpdateList', {
            DataLength: Math.ceil((this.results.length) / 10),
            nowpage: this.limit - 10
        })
        _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_1__["default"].$on('NextPage', (Data) => {
            this.start = Data * 10;
            this.limit = (Data * 10) + 10
        })
    },
    methods: {
        searchCate(event) {
            const lists = this.lists;
            const targetData = event.target.value;
            const result = lists.filter((x) => {
                return x.cate == targetData
            })

            this.results = result;
            if (targetData == '전체') {
                this.results = this.lists;
            }

            this.start = 0;
            this.limit = 10;
            _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_1__["default"].$emit('UpdateList', {
                DataLength: Math.ceil((this.results.length) / 10),
                nowpage: this.limit - 10
            })
        }

    }
}

/* harmony default export */ __webpack_exports__["default"] = (shareConsulView);

/***/ }),

/***/ "./public/component/loc/cosul/consul-table.js":
/*!****************************************************!*\
  !*** ./public/component/loc/cosul/consul-table.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glc_list_numbering_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../glc/list-numbering.js */ "./public/component/glc/list-numbering.js");
/* harmony import */ var _glc_etc_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../glc/etc-modal */ "./public/component/glc/etc-modal.js");
/* harmony import */ var _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../glc/eventbus.js */ "./public/component/glc/eventbus.js");




const ConsulView = {
    template: `<div class='table_wrap consul_wrap'>
                <share-modal></share-modal>
                <div class='filters'>
                    <span>상담신청 건</span><b>{{this.results.length}}건</b>
                    <select v-on:change="searchCate($event)">
                        <option value='전체'>전체</option>
                        <option value='삼성'>삼성</option>
                        <option value='천안'>천안</option>
                        <option value='부동산'>부동산</option>
                    </select>
                    <span class='share_btn b_blue' @click='OpenEtcModal'>상담사 배정</span>

                </div>
                <table class='consul_tb'>
                    <thead>
                        <tr>
                            <td></td>
                            <td>번호</td>
                            <td>분류</td>
                            <td>고객명</td>
                            <td>전화번호</td>
                            <td>소속</td>
                            <td>담당</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for='(result,i) in results' v-if='i < limit && i >= start'>
                            <td><input type="checkbox" id="checkbox_1" v-on:click='SelectData($event,result.idx)' value="" /></td>
                            <router-link tag='td' class='tb_cursor' v-bind:to = "'consul/consulview/'+result.idx" >{{i+1}}</router-link>
                            <router-link tag='td' class='tb_cursor' v-bind:to = "'consul/consulview/'+result.idx" >{{result.cate}}</router-link>
                            <router-link tag='td' class='tb_cursor' v-bind:to = "'consul/consulview/'+result.idx" >{{result.reqName}}</router-link>
                            <router-link tag='td' class='tb_cursor' v-bind:to = "'consul/consulview/'+result.idx" >{{result.reqPhone}}</router-link>
                            <router-link tag='td' class='tb_cursor' v-bind:to = "'consul/consulview/'+result.idx" >{{result.Class}}</router-link>
                            <router-link tag='td' class='tb_cursor' v-bind:to = "'consul/consulview/'+result.idx" >{{result.Cflag}}</router-link>
                        </tr>
                    </tbody>
                </table>
                <list-number v-bind:nowpage = 'this.limit-10' v-bind:DataLength='Math.ceil((this.results.length)/10)'></list-number>
            </div>`,
    components: {
        'list-number': _glc_list_numbering_js__WEBPACK_IMPORTED_MODULE_0__["default"],
        'share-modal': _glc_etc_modal__WEBPACK_IMPORTED_MODULE_1__["default"]
    },
    data() {
        return {
            lists: Array,
            results: Array,
            start: 0,
            limit: 10,
            SelectDataArray:[]
        }
    },

    created() {
        const baseURI = 'api/getdata.consult.php';
        axios.post(`${baseURI}`, {
            })
            .then((result) => {
                    if (result.data.phpResult == 'ok') {
                        this.lists = result.data.result
                        this.results = this.lists;
                    }
            })
            .catch(err => console.log('Login: ', err));
        // this.lists = [
        //     {
        //         idx:0,
        //         cate:'삼성',
        //         reqName:'개발자',
        //         reqPhone:'01023866487',
        //         Class:"금강",
        //         Cflag:'김다우'
        //     },
        //     {
        //         idx:1,
        //         cate:'삼성',
        //         reqName:'개발자',
        //         reqPhone:'01023866487',
        //         Class:"금강",
        //         Cflag:'김다우'
        //     }
        // ]
    },
    mounted() {
        // this.results = this.lists;
        _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["default"].$emit('UpdateList', {
            DataLength: Math.ceil((this.results.length) / 10),
            nowpage: this.limit - 10
        })
        _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["default"].$on('NextPage', (Data) => {
            this.start = Data * 10;
            this.limit = (Data * 10) + 10
        })
    },
    methods: {
        SelectData(event,Data){
            if(event.target.checked == true){
                this.SelectDataArray.push(Data)
            }else{
                this.SelectDataArray.splice(this.SelectDataArray.indexOf(Data),1);
            }
        },
        searchCate(event) {
            const lists = this.lists;
            const targetData = event.target.value;
            const result = lists.filter((x) => {
                return x.cate == targetData
            })

            this.results = result;
            if (targetData == '전체') {
                this.results = this.lists;
            }

            this.start = 0;
            this.limit = 10;
            _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["default"].$emit('UpdateList', {
                DataLength: Math.ceil((this.results.length) / 10),
                nowpage: this.limit - 10
            })
        },
        OpenEtcModal() {
            if(this.SelectDataArray.length < 1){
                alert('자료를 선택해주세요')

            }
            else{
                const Modal = document.getElementById('modal-etc')
                Modal.style.display = 'block';
                setTimeout(() => {
                    Modal.style.opacity = '1';
                }, 100);
                _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["default"].$emit('shareCflag', this.SelectDataArray)
            }
        }

    }
}

/* harmony default export */ __webpack_exports__["default"] = (ConsulView);

/***/ }),

/***/ "./public/component/loc/cosul/consul-view.js":
/*!***************************************************!*\
  !*** ./public/component/loc/cosul/consul-view.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glc_del_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../glc/del-modal.js */ "./public/component/glc/del-modal.js");
/* harmony import */ var _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../glc/eventbus.js */ "./public/component/glc/eventbus.js");



const ConsulView = {
    props: ['idx'],
    template: `<div class="con_wrap">
            <div class='content'>
            <h2>상담신청</h2>
                    <delte-modal></delte-modal>
                    <div class="info_wrap">
                        <div class="order">
                            <table class='consul_tb'>
                            <tr>
                                    <th>분류</th>
                                    <td>{{list.cate}}</td>
                                </tr>
                                <tr>
                                    <th>상담신청일</th>
                                    <td>{{list.InsertDate}}</td>
                                </tr>
                                <tr>
                                    <th>성함</th>
                                    <td>{{list.reqName}}</td>
                                </tr>
                                <tr>
                                    <th>연락처</th>
                                    <td>{{list.reqPhone}}</td>
                                </tr>
                                <tr>
                                    <th>상담 내용</th>
                                    <td>{{list.reqMemo}}</td>
                                </tr>
                                <tr>
                                    <th>담당</th>
                                    <td>{{list.Class}}/{{list.Cflag}}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="btn_wrap">
                        <span class="b_red" v-on:click="OpenDelteModal(list.idx,'consul')">삭제</span>
                        <router-link to="/consul" class="b_sgrey" tag='span'>목록</router-link>
                    </div> 
                </div>
            </div>`,
    components: {
        'delte-modal': _glc_del_modal_js__WEBPACK_IMPORTED_MODULE_0__["default"]
    },
    data() {
        return {
            list:Array
            // list: {
            //     idx: 0,
            //     cate: '삼성',
            //     InsertDate: '2020-02-11',
            //     reqName: '개발자',
            //     reqPhone: '01023866487',
            //     reqMemo: '상담내용상담내영',
            //     Class: "금강",
            //     Cflag: '김다우'
            // }
        }
    },
    created() {
        const baseURI = 'api/getdata.consult.php';
        axios.post(`${baseURI}`, {
            idx:this.idx
            })
            .then((result) => {
                    if (result.data.phpResult == 'ok') {
                        this.list = result.data.result[0]
                    }
            })
            .catch(err => console.log('Login: ', err));
    },
    methods: {
        OpenDelteModal(Data, mode) {
            const Modal = document.getElementById('modal-del')
            Modal.style.display = 'block';
            setTimeout(() => {
                Modal.style.opacity = '1';
            }, 100);
            _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_1__["default"].$emit(mode, Data)
        }
        // GetData() {
        //     const baseURI = 'api/consul.data.php';
        //     axios.post(`${baseURI}`, {
        //             mode: 'list',
        //             idx: this.idx
        //         })
        //         .then((result) => {

        //             const ResultData = result.data.result[0]
        //             if (result.data.phpResult == 'ok') {
        //                 this.list = ResultData;
        //             }

        //         })
        //         .catch(err => console.log('Login: ', err));

        // }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (ConsulView);

/***/ }),

/***/ "./public/component/loc/cosul/consul.js":
/*!**********************************************!*\
  !*** ./public/component/loc/cosul/consul.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consul_table_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consul-table.js */ "./public/component/loc/cosul/consul-table.js");


const Consul = {
    template:`
    <div class="con_wrap">
        <div class='content consul_bord'>
            <h2>상담신청</h2>
            <consul-table></consul-table>
            <div>
            </div>
        </div>
    </div>`,
    components:{
        'consul-table':_consul_table_js__WEBPACK_IMPORTED_MODULE_0__["default"]
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Consul);

/***/ }),

/***/ "./public/component/loc/login/login_page.js":
/*!**************************************************!*\
  !*** ./public/component/loc/login/login_page.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../router */ "./public/component/router.js");
/* harmony import */ var _glc_eventbus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../glc/eventbus */ "./public/component/glc/eventbus.js");




const LoginPage = {
    template: `  <div class="con_wrap login_page">
    <div class="login_wrap">
        <!-- Login area -->
        <div class="login_box">
            <div class="login_bi">
                <h1>금강로그인페이지</h1></div>
            <div class="login_input">
                <div class="mb10">
                    <i class="material-icons">person</i>
                    <input type="text" placeholder="아이디" id='login_id'>
                </div>
                <div>
                    <i class="material-icons">lock</i>
                    <input type="password" placeholder="비밀번호" id='login_pw'>
                </div>
                <div class="mt40">
                    <button type="submit" id="" class="btn_admin" v-on:click="loginAcc">관리자
                        로그인</button>
                    <button type="submit" id="" class="btn_pw">비밀번호 찾기</button>
                </div>
            </div>
        </div>
</div>`,
    created(){
        if(sessionStorage.length == 0){
            console.log(this.$store.state.id)
            _router__WEBPACK_IMPORTED_MODULE_0__["default"].push({path:'/'}).catch (err => {})
        }
        else{
            console.log(sessionStorage)
            _router__WEBPACK_IMPORTED_MODULE_0__["default"].push({path:'/consul'}).catch (err => {})
        }
        },
    methods: {
        loginAcc(){
            const userId = document.getElementById('login_id')
            const userPw = document.getElementById('login_pw')
            // if(userId.value == ""){
            //     alert('아이디를 입력세요')
            //     userId.focus()
            // }
            // else if(userPw.value == ""){
            //     alert('패스워드를 입력해주세요')
            //     userPw.focus()
            // }
            this.$store.state.id = 'testAcc123'
            this.$store.state.Name = '개발자'
            this.$store.state.Class = '금강'
            this.$store.state.Activation = '1'
            this.$store.state.comcode = 100

            sessionStorage.setItem("name", this.$store.state.Name);
            sessionStorage.setItem("ID",  this.$store.state.id);
            sessionStorage.setItem("Class",  this.$store.state.Class);
            sessionStorage.setItem("Activation",  this.$store.state.Activation);
            sessionStorage.setItem("comcode",  this.$store.state.comcode);


            // sessionStorage.setItem("userPhone", result.data.userPhone);

            // console.log(this.$store.state.id)
            //로그인세션
            if(sessionStorage.comcode == 100){
                _router__WEBPACK_IMPORTED_MODULE_0__["default"].push({name:'cflag' ,path:'/cflag'})
                .catch (err => {})

            }
            else{
                _router__WEBPACK_IMPORTED_MODULE_0__["default"].push({name:'consul' ,path:'/consul'})
                .catch (err => {})
            }
           _glc_eventbus__WEBPACK_IMPORTED_MODULE_1__["default"].$emit('nav',sessionStorage.comcode)
        


        }

    }
}

/* harmony default export */ __webpack_exports__["default"] = (LoginPage);

/***/ }),

/***/ "./public/component/loc/newsbord/news-table.js":
/*!*****************************************************!*\
  !*** ./public/component/loc/newsbord/news-table.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glc_list_numbering_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../glc/list-numbering.js */ "./public/component/glc/list-numbering.js");
/* harmony import */ var _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../glc/eventbus.js */ "./public/component/glc/eventbus.js");



const newsTable = {
    template: `<div class='table_wrap'>
                <div class='filters'>
                    <span>총 게시물수</span><b>{{this.results.length}}건</b>
                    <select v-on:change="searchCate($event)">
                        <option value='전체'>전체</option>
                        <option value='삼성'>삼성</option>
                        <option value='천안'>천안</option>
                        <option value='부동산'>부동산</option>
                    </select>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>번호</td>
                            <td>분류</td>
                            <td>미리보기</td>
                            <td>제목</td>
                            <td>조회</td>
                        </tr>
                    </thead>
                    <tbody>
                        <router-link class='new_view_tr' tag='tr' v-for='(result,i) in results' v-bind:to = "'/newsbord/newbordview/'+result.idx" v-if='i < limit && i >= start'>
                            <td>{{i+1}}</td>
                            <td>{{result.cate}}</td>
                            <td>
                                <img v-bind:src='result.img' v-if="result.img!=''" alt='미리보기'>
                                <img src='images/dev_img2.png' v-else alt='미리보기'>
                            </td>
                            <td>{{result.title}}</td>
                            <td>{{result.join}}</td>
                        </router-link>
                    </tbody>
                </table>
                <list-number v-bind:nowpage = 'this.limit-10' v-bind:DataLength='Math.ceil((this.results.length)/10)'></list-number>
                <div class="foot_btn">
                    <router-link to='newsbord/newbordview/new' class="b_add b_blue">등록</router-link>
                </div>

            </div>`,
    components: {
        'list-number': _glc_list_numbering_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    },
    data() {
        return {
            lists: Array,
            results: Array,
            start: 0,
            limit: 10
        }
    },
    created() {
        // db에서 가져온데이터를 this.lists에 담아야함
        this.lists = [
            {
                idx: 0,
                img: "",
                title: '천안 북부지역 개발의 선두 천안성거산업단지 올해 첫 삽 뜬다',
                join: 340,
                cate: "삼성",
                img: "images/dev_img.png"

            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도 착공",
                join: 340,
                cate: "천안",
                img: "images/dev_img.png"

            }, {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도 착공",
                join: 340,
                cate: "천안"
            }, {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도 착공",
                join: 340,
                cate: "천안"
            }, {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도 착공",
                join: 340,
                cate: "천안"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도",
                join: 340,
                cate: "부동산"
            },
            {
                idx: 0,
                img: "",
                title: '천안 북부지역 개발의 선두 천안성거산업단지 올해 첫 삽 뜬다',
                join: 340,
                cate: "삼성"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도 착공",
                join: 340,
                cate: "천안"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도",
                join: 340,
                cate: "부동산"
            },
            {
                idx: 0,
                img: "",
                title: '천안 북부지역 개발의 선두 천안성거산업단지 올해 첫 삽 뜬다',
                join: 340,
                cate: "삼성"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도 착공",
                join: 340,
                cate: "천안"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도",
                join: 340,
                cate: "부동산"
            },
            {
                idx: 0,
                img: "",
                title: '천안 북부지역 개발의 선두 천안성거산업단지 올해 첫 삽 뜬다',
                join: 340,
                cate: "삼성"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도 착공",
                join: 340,
                cate: "천안"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도",
                join: 340,
                cate: "부동산"
            },
            {
                idx: 0,
                img: "",
                title: '천안 북부지역 개발의 선두 천안성거산업단지 올해 첫 삽 뜬다',
                join: 340,
                cate: "삼성"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도 착공",
                join: 340,
                cate: "천안"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도",
                join: 340,
                cate: "부동산"
            },
            {
                idx: 0,
                img: "",
                title: '천안 북부지역 개발의 선두 천안성거산업단지 올해 첫 삽 뜬다',
                join: 340,
                cate: "삼성"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도 착공",
                join: 340,
                cate: "천안"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도",
                join: 340,
                cate: "부동산"
            },
            {
                idx: 0,
                img: "",
                title: '천안 북부지역 개발의 선두 천안성거산업단지 올해 첫 삽 뜬다',
                join: 340,
                cate: "삼성"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도 착공",
                join: 340,
                cate: "천안"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도",
                join: 340,
                cate: "부동산"
            }, {
                idx: 0,
                img: "",
                title: '천안 북부지역 개발의 선두 천안성거산업단지 올해 첫 삽 뜬다',
                join: 340,
                cate: "삼성"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도 착공",
                join: 340,
                cate: "천안"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도",
                join: 340,
                cate: "부동산"
            },
            {
                idx: 0,
                img: "",
                title: '천안 북부지역 개발의 선두 천안성거산업단지 올해 첫 삽 뜬다',
                join: 340,
                cate: "삼성"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도 착공",
                join: 340,
                cate: "천안"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도",
                join: 340,
                cate: "부동산"
            }
        ]
    },
    mounted() {
        this.results = this.lists;
        _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_1__["default"].$emit('UpdateList', {
            DataLength: Math.ceil((this.results.length) / 10),
            nowpage: this.limit - 10
        })
        _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_1__["default"].$on('NextPage', (Data) => {
            this.start = Data * 10;
            this.limit = (Data * 10) + 10
        })
    },
    methods: {
        searchCate(event) {
            const lists = this.lists;
            const targetData = event.target.value;
            const result = lists.filter((x) => {
                return x.cate == targetData
            })
            this.results = result;
            if (targetData == '전체') {
                this.results = this.lists;
            }
            this.start = 0;
            this.limit = 10;
            _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_1__["default"].$emit('UpdateList', {
                DataLength: Math.ceil((this.results.length) / 10),
                nowpage: this.limit - 10
            })
        }

    }
}

/* harmony default export */ __webpack_exports__["default"] = (newsTable);

/***/ }),

/***/ "./public/component/loc/newsbord/newsbord.js":
/*!***************************************************!*\
  !*** ./public/component/loc/newsbord/newsbord.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _news_table_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-table.js */ "./public/component/loc/newsbord/news-table.js");

const NewsBord = {
    template:`
    <div class="con_wrap">
        <div class='content new_bord'>
            <h2>보도 자료</h2>
                <news-bord></news-bord>
        </div>
    </div>`,
    components:{
        'news-bord' : _news_table_js__WEBPACK_IMPORTED_MODULE_0__["default"]
    }
    // components:{
        // 'news-bord':newsTable
    // }
}

/* harmony default export */ __webpack_exports__["default"] = (NewsBord);




/***/ }),

/***/ "./public/component/loc/newsbord/newview.js":
/*!**************************************************!*\
  !*** ./public/component/loc/newsbord/newview.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glc_save_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../glc/save-modal.js */ "./public/component/glc/save-modal.js");
/* harmony import */ var _glc_del_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../glc/del-modal.js */ "./public/component/glc/del-modal.js");
/* harmony import */ var _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../glc/eventbus.js */ "./public/component/glc/eventbus.js");




const NewsView = {
    props: ['id'],
    template: `
    <div class="con_wrap">
        <save-modal></save-modal>
        <delte-modal></delte-modal>
        <div class='content new_bord'>
            <h2 v-if = "id ==='new'">보도 자료 등록</h2>
            <h2 v-else>보도 자료</h2>
            <div class="panel mody">
            <ul>
                <li><h5>작성자</h5></li>
                <li class='harf'>
                    <input type='text' v-if="id === 'new' || list.writer === ''"/>
                    <input type='text' v-else v-bind:value='list.writer'/>
                </li>
                <li><h5>분류</h5></li>
                <li class='harf'>
                    <select v-if="id === 'new' || list.cate === ''">
                        <option value=''>분류</option>
                        <option value='삼성'>삼성</option>
                        <option value='천안'>천안</option>
                        <option value='부동산'>부동산</option>
                        <option value='기타'>기타</option>
                    </select>
                    <select v-else>
                        <option v-if="list.cate === ''" value='' selected>분류</option>
                        <option v-else value=''>분류</option>

                        <option v-if="list.cate === '삼성'" value='삼성' selected>삼성</option>
                        <option v-else value='삼성'>삼성</option>

                        <option v-if="list.cate === '천안'" value='천안' selected>천안</option>
                        <option v-else value='천안'>천안</option>

                        <option v-if="list.cate === '부동산'" value='부동산' selected>부동산</option>
                        <option v-else value='부동산'>부동산</option>

                        <option v-if="list.cate === '기타'" value='기타' selected>기타</option>
                        <option v-else value='기타'>기타</option>

                    </select>
                </li>
                <li><h5>제목</h5></li>
                <li>
                    <input type='text' v-if="id === 'new'" value=''/>
                    <input type='text' v-else v-bind:value='list.title'/>
                </li>
                <li><h5>링크</h5></li>
                <li>
                    <input type='text' v-if="id === 'new'" value=''/>
                    <input type='text' v-else v-bind:value='list.link'/>
                </li>
                <li><h5>대표이미지</h5></li>
                <li>
                <div class="input-file" v-if="id ==='new' || list.img === ''">
                    <input type="text" readonly="readonly" class="file-name" /> 
                    <label for="upload01" class="file-label">파일 업로드</label> 
                    <input type="file" name="" id="upload01" class="file-upload" ref="mainimg" />
                </div>

                <div class="input-file" v-else>
                    <a href='list.img' target='blank'>{{list.img}}</a>
                    <label for="upload01" class="file-label b_red" v-on:click="OpenDelteModal(list.idx,'NewsImg')">
                        파일 삭제
                    </label>
                </div>
                </li>
                <li><h5>내용</h5></li>
                <li>
                    <textarea>에디터활용해야함... 어떤거로할지</textarea>
                </li>
            </ul>
            </div>

            <div class="btn_wrap">
                <span class="b_red" v-if="id != 'new'" v-on:click="OpenDelteModal(list.idx,'News')">삭제</span>
                <span class="b_blue" v-if="id === 'new'" v-on:click="OpenSaveModal('new','new')">등록</span>
                <span class="b_blue" v-else v-on:click="OpenSaveModal(list.idx,'updateNews')">수정</span>
                <router-link tag='span' to='/newsbord' class="b_sgrey">목록</span>
            </div>

        </div>
    </div>`,
    components:{
        'save-modal':_glc_save_modal_js__WEBPACK_IMPORTED_MODULE_0__["default"],
        'delte-modal':_glc_del_modal_js__WEBPACK_IMPORTED_MODULE_1__["default"]
    },
    data() {
        return {
            list: {
                idx: 0,
                writer:"개발자",
                img: "images/dev_img.png",
                link:'http://123213',
                title: '천안 북부지역 개발의 선두 천안성거산업단지 올해 첫 삽 뜬다',
                join: 340,
                cate: "천안",
                desc:""
            }

        }
    },
    created() {
        this.fileUploderStyle()

    },
    methods: {
        fileUploderStyle() {
            (function ($) {
                var $fileBox = null;
                $(function () {
                    init();
                })

                function init() {
                    $fileBox = $('.input-file');
                    fileLoad();
                }

                function fileLoad() {
                    $.each($fileBox,
                        function (ids) {
                            var $this = $fileBox.eq(ids),
                                $btnUpload = $this.find('[type="file"]'),
                                $label = $this.find('.file-label');
                            $btnUpload.on('change', function () {
                                var $target = $(this),
                                    fileName = $target.val(),
                                    $fileText = $target.siblings('.file-name');
                                $fileText.val(fileName);
                            })
                            $btnUpload.on('focusin focusout',
                                function (e) {
                                    e.type == 'focusin' ? $label.addClass('file-focus') : $label.removeClass('file-focus');
                                })
                        })
                }
            })(jQuery);
        },
        OpenSaveModal(Data,mode) {
            const Modal = document.getElementById('modal-alert')
            Modal.style.display = 'block';
            setTimeout(() => {
                Modal.style.opacity = '1';
            }, 100);
            _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["default"].$emit(mode,Data)
        },

        OpenDelteModal(Data,mode) {
            const Modal = document.getElementById('modal-del')
            Modal.style.display = 'block';
            setTimeout(() => {
                Modal.style.opacity = '1';
            }, 100);
            _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["default"].$emit(mode,Data)
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (NewsView);

/***/ }),

/***/ "./public/component/loc/user/component/user_info.js":
/*!**********************************************************!*\
  !*** ./public/component/loc/user/component/user_info.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glc_eventbus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../glc/eventbus */ "./public/component/glc/eventbus.js");

const userInfo = {
    props:['userData','dataIndex'],
    template:`
    <tr class='user_info'>
        <td><input type='checkbox' class='user_tool_check' v-on:click="PostDataUserTool($event,this.value)"></td>
        <td>{{list.userName}}</td>
        <td>{{list.userId}}</td>
        <td>{{list.Class}}</td>
        <td>{{list.userPhone}}</td>
        <td>{{list.DataCount}}</td>
        <td v-if="list.Activation === 1">정상</td>
        <td v-else>비승인</td>
    </tr>`,
    data(){
        return{
            list:Array,
        }
    },
    created(){
        this.list = this.userData;
    },
    methods:{
        PostDataUserTool(event,thisValue){
            let CheckedValue = event.target.checked;
            const userToolCheck = document.querySelectorAll('.user_tool_check')
            if(CheckedValue == true){
                _glc_eventbus__WEBPACK_IMPORTED_MODULE_0__["default"].$emit('GetUsertool', this.list)
                for(let i = 0; i<userToolCheck.length; i++){
                    userToolCheck[i].checked = false
                }
                event.target.checked = true
            }
        }
    }
}
/* harmony default export */ __webpack_exports__["default"] = (userInfo);

/***/ }),

/***/ "./public/component/loc/user/component/user_tool.js":
/*!**********************************************************!*\
  !*** ./public/component/loc/user/component/user_tool.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glc_eventbus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../glc/eventbus */ "./public/component/glc/eventbus.js");
/* harmony import */ var _glc_del_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../glc/del-modal */ "./public/component/glc/del-modal.js");
/* harmony import */ var _glc_etc_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../glc/etc-modal */ "./public/component/glc/etc-modal.js");
/* harmony import */ var _glc_save_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../glc/save-modal */ "./public/component/glc/save-modal.js");






const userTool = {
    props:['userData'],
    template:`<div class='user_tool'>
        <del-modal></del-modal>
        <etc-modal></etc-modal>
        <save-modal></save-modal>
        <h4>선택된데이터 </h4>
        <ul>
            <li>이름:  <span>{{list.userName}}</span></li>
            <li>연락처 <span>{{list.userPhone}}</span></li>
            <li>소속: <span>{{list.Class}}</span></li>
            <li>아이디: <span>{{list.userId}}</span></li>
            <li>상태: <span v-if="list.Activation === 1">정상</span><span v-else-if ="list.Activation===0">비승인</span></li>

        </ul>
        <div class='tb_box'>
            <table>
                <thead>
                    <tr>
                        <td>번호</td>
                        <td>고객명</td>
                        <td>연락처</td>
                        <td>분류</td>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <td>성함</td>
                        <td>성함</td>
                        <td>성함</td>
                        <td>성함</td>
                    </tr>
                    <tr>
                        <td>성함</td>
                        <td>성함</td>
                        <td>성함</td>
                        <td>성함</td>
                    </tr>
                    <tr>
                        <td>성함</td>
                        <td>성함</td>
                        <td>성함</td>
                        <td>성함</td>
                    </tr>
                    <tr>
                        <td>성함</td>
                        <td>성함</td>
                        <td>성함</td>
                        <td>성함</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class='btns'>
            <span class='b_blue'@click="OpenEtcModal(this.idx,'account_del')">패스워드 변경</span>

            <span class='b_red' v-if="list.Activation === 1" @click="OpenDelteModal(this.idx,'account_beactive')">계정 접속 제한</span>
            <span class='b_blue' v-else-if ="list.Activation === 0" @click="OpenSaveModal(this.idx,'account_use')">계정 접속 승인</span>

            <span class='b_red' @click="OpenDelteModal(this.idx,'account_del')">계정 삭제</span>

        </div>

    </div>`,
    components:{
        'del-modal':_glc_del_modal__WEBPACK_IMPORTED_MODULE_1__["default"],
        'etc-modal':_glc_etc_modal__WEBPACK_IMPORTED_MODULE_2__["default"],
        'save-modal':_glc_save_modal__WEBPACK_IMPORTED_MODULE_3__["default"]
    },
    data(){
        return{
            list:Array
        }
    },
    created(){
        _glc_eventbus__WEBPACK_IMPORTED_MODULE_0__["default"].$on('GetUsertool', (Data)=>{
            this.list = Data
        })
    },
    methods:{
        OpenSaveModal(Data, mode) {
            if(this.list.length == 1){
                alert('계정을 선택해주세요')
            }
            else{
                const Modal = document.getElementById('modal-alert')
                Modal.style.display = 'block';
                setTimeout(() => {
                    Modal.style.opacity = '1';
                }, 100);
                _glc_eventbus__WEBPACK_IMPORTED_MODULE_0__["default"].$emit(mode, Data)
            }
        },
        OpenDelteModal(Data, mode) {
            if(this.list.length == 1){
                alert('계정을 선택해주세요')
            }
            else{

                const Modal = document.getElementById('modal-del')
                Modal.style.display = 'block';
                setTimeout(() => {
                    Modal.style.opacity = '1';
                }, 100);
                _glc_eventbus__WEBPACK_IMPORTED_MODULE_0__["default"].$emit(mode, Data)
            }
        },
        OpenEtcModal(Data) {
            if(this.list.length == 1){
                alert('계정을 선택해주세요')
            }
            else{
                const Modal = document.getElementById('modal-etc')
                Modal.style.display = 'block';
                setTimeout(() => {
                    Modal.style.opacity = '1';
                }, 100);
                _glc_eventbus__WEBPACK_IMPORTED_MODULE_0__["default"].$emit('changePw', this.list.idx)
            }
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (userTool);

/***/ }),

/***/ "./public/component/loc/user/user.main.js":
/*!************************************************!*\
  !*** ./public/component/loc/user/user.main.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_user_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/user_info */ "./public/component/loc/user/component/user_info.js");
/* harmony import */ var _component_user_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/user_tool */ "./public/component/loc/user/component/user_tool.js");
/* harmony import */ var _glc_list_numbering__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../glc/list-numbering */ "./public/component/glc/list-numbering.js");




const userMain = {
    template: `<div class="con_wrap">
    <div class='content user_bord'>
        <h2>사용자관리</h2>
        <user-tool></user-tool>
        <table class='user_tb'>
        <thead>
            <tr>
                <td></td>
                <td>이름</td>
                <td>아이디</td>
                <td>소속</td>
                <td>연락처</td>
                <td>배분건수</td>
                <td>상태</td>
            </tr>
        </thead>
        <tbody>
        <user-info v-for = 'list in lists' v-bind:userData='list'></user-info>
        </tbody>
        </table>
        <list-number v-bind:nowpage = 'this.limit-10' v-bind:DataLength='Math.ceil((this.results.length)/10)'></list-number>

        <div>
        </div>
    </div>
</div>`,
    components: {
        'user-info': _component_user_info__WEBPACK_IMPORTED_MODULE_0__["default"],
        'user-tool':_component_user_tool__WEBPACK_IMPORTED_MODULE_1__["default"],
        'list-number': _glc_list_numbering__WEBPACK_IMPORTED_MODULE_2__["default"],

    },
    mounted(){
        this.results = this.lists;
    },
    data(){
        return{
            start: 0,
            limit: 10,
            results:Array,
            lists:[
                {
                    idx:0,
                    userId:'hec8897',
                    userName:'김다운',
                    userPhone:'01000000000',
                    Class:'금강',
                    DataCount:2,
                    Activation:0
                },
                {
                    idx:0,
                    userId:'hec8897',
                    userName:'김다운22',
                    userPhone:'01000000000',
                    Class:'금강',
                    DataCount:2,
                    Activation:1

                }
            ]
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (userMain);


/***/ }),

/***/ "./public/component/router.js":
/*!************************************!*\
  !*** ./public/component/router.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ "../node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _loc_login_login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loc/login/login_page */ "./public/component/loc/login/login_page.js");
/* harmony import */ var _loc_newsbord_newsbord_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loc/newsbord/newsbord.js */ "./public/component/loc/newsbord/newsbord.js");
/* harmony import */ var _loc_newsbord_newview_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loc/newsbord/newview.js */ "./public/component/loc/newsbord/newview.js");
/* harmony import */ var _loc_cosul_consul_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loc/cosul/consul.js */ "./public/component/loc/cosul/consul.js");
/* harmony import */ var _loc_cosul_consul_view_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loc/cosul/consul-view.js */ "./public/component/loc/cosul/consul-view.js");
/* harmony import */ var _loc_user_user_main_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loc/user/user.main.js */ "./public/component/loc/user/user.main.js");
/* harmony import */ var _loc_cosul_consil_table_share__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loc/cosul/consil-table-share */ "./public/component/loc/cosul/consil-table-share.js");









const router = new vue_router__WEBPACK_IMPORTED_MODULE_0__["default"]({

  routes: [{
      path: '/',
      component: _loc_login_login_page__WEBPACK_IMPORTED_MODULE_1__["default"],
      name: 'login'
    },
    {
      path: '/userview',
      component: _loc_user_user_main_js__WEBPACK_IMPORTED_MODULE_6__["default"],
      beforeEnter: (to, from, next) => {
        if (sessionStorage.length == 0) {
          router.push({
            path: '/',
            component: _loc_login_login_page__WEBPACK_IMPORTED_MODULE_1__["default"],
            name: 'login'
          })
        } else {
          if(sessionStorage.comcode == 1){
            next()
          }
        }
      }
    },
    {
      path: '/newsbord',
      component: _loc_newsbord_newsbord_js__WEBPACK_IMPORTED_MODULE_2__["default"],
        beforeEnter: (to, from, next) => {
        if (sessionStorage.length == 0) {
          router.push({
            path: '/',
            component: _loc_login_login_page__WEBPACK_IMPORTED_MODULE_1__["default"],
            name: 'login'
          })
        } else {
          if(sessionStorage.comcode == 1){
            next()
          }
        }
      }
    },
    {
      path: '/newsbord/newbordview/:idx',
      component: _loc_newsbord_newview_js__WEBPACK_IMPORTED_MODULE_3__["default"],
      props: true,
      beforeEnter: (to, from, next) => {
        if (sessionStorage.length == 0) {
          router.push({
            path: '/',
            component: _loc_login_login_page__WEBPACK_IMPORTED_MODULE_1__["default"],
            name: 'login'
          })
        } else {
          if(sessionStorage.comcode == 1){
            next()
          }
        }
      }
    },
    {
      name: 'consul',
      path: '/consul',
      component: _loc_cosul_consul_js__WEBPACK_IMPORTED_MODULE_4__["default"],
      beforeEnter: (to, from, next) => {
        if (sessionStorage.length == 0) {
          router.push({
            path: '/',
            component: _loc_login_login_page__WEBPACK_IMPORTED_MODULE_1__["default"],
            name: 'login'
          })
        } else {
          if(sessionStorage.comcode == 1){
            next()
          }
        }
      }
    },
    {
      name: 'cflag',
      path: '/cflag',
      component: _loc_cosul_consil_table_share__WEBPACK_IMPORTED_MODULE_7__["default"],
      beforeEnter: (to, from, next) => {
        if (sessionStorage.length == 0) {
          router.push({
            path: '/',
            component: _loc_login_login_page__WEBPACK_IMPORTED_MODULE_1__["default"],
            name: 'login'
          })
        } else {
          next()
        }
      }
    },
    {
      path: '/consul/consulview/:idx',
      component: _loc_cosul_consul_view_js__WEBPACK_IMPORTED_MODULE_5__["default"],
      props: true,
      beforeEnter: (to, from, next) => {
        if (sessionStorage.length == 0) {
          router.push({
            path: '/',
            component: _loc_login_login_page__WEBPACK_IMPORTED_MODULE_1__["default"],
            name: 'login'
          })
        } else {
          if(sessionStorage.comcode == 1){
            next()
          }
        }
      }
    },
  ]
})



/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./public/component/store.js":
/*!***********************************!*\
  !*** ./public/component/store.js ***!
  \***********************************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
// import Vue from "vue";
// import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        id: String,
        Name:String,
        Class:String,
        Activation:String,
        comcode:Number
      }
})

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map