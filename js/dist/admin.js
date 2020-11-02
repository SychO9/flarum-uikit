module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! exports provided: uikit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uikit", function() { return _src_admin__WEBPACK_IMPORTED_MODULE_0__["uikit"]; });



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! exports provided: uikit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "./src/common/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uikit", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["uikit"]; });



/***/ }),

/***/ "./src/common/components/Input.js":
/*!****************************************!*\
  !*** ./src/common/components/Input.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Input; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__);




var Input = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Input, _Component);

  function Input() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Input.prototype;

  _proto.view = function view() {
    this.attrs.className = this.attrs.className || '';
    this.attrs.className += ' UiKit-FormControl';

    if (this.attrs.icon) {
      this.attrs.className += ' hasIcon';
    }

    var className = "UiKit-Input " + (this.attrs.parentClassName || '');
    return m("div", {
      className: className
    }, this.icon(), m("input", this.attrs));
  };

  _proto.icon = function icon() {
    if (!this.attrs.icon) return;
    var iconValue = this.attrs.icon;
    delete this.attrs.icon;
    return m("span", {
      "class": "UiKit-Input-icon"
    }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()(iconValue));
  };

  return Input;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/common/components/Label.js":
/*!****************************************!*\
  !*** ./src/common/components/Label.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Label; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);



var Label = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Label, _Component);

  function Label() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Label.prototype;

  _proto.view = function view(vnode) {
    var style = {};
    var className = ['UiKit-Label'];
    if (this.attrs.className) className.push(this.attrs.className);

    if (this.attrs.color) {
      style.backgroundColor = "#" + this.attrs.color;
      className.push('colored');
    }

    return m("span", {
      className: className.join(' '),
      style: style
    }, m("span", {
      className: "UiKit-Label-text"
    }, vnode.children));
  };

  return Label;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/common/components/LabelGroup.js":
/*!*********************************************!*\
  !*** ./src/common/components/LabelGroup.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LabelGroup; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);



var LabelGroup = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(LabelGroup, _Component);

  function LabelGroup() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = LabelGroup.prototype;

  _proto.view = function view(vnode) {
    var className = ['UiKit-LabelGroup'];
    if (this.attrs.className) className.push(this.attrs.className);
    return m("span", {
      className: className.join(' ')
    }, vnode.children);
  };

  return LabelGroup;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/common/components/ProgressBar.js":
/*!**********************************************!*\
  !*** ./src/common/components/ProgressBar.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProgressBar; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);



var ProgressBar = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ProgressBar, _Component);

  function ProgressBar() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ProgressBar.prototype;

  _proto.view = function view() {
    var className = ['UiKit-ProgressBar'];
    if (this.attrs.className) className.push(this.attrs.className);
    if (this.attrs.mini) className.push('UiKit-ProgressBar--mini');
    if (this.attrs.fancy) className.push('UiKit-ProgressBar--fancy');
    if (this.attrs.alternate) className.push('UiKit-ProgressBar--alternate');
    return m("div", {
      className: className.join(' ')
    }, m("div", {
      className: "UiKit-ProgressBar-bar",
      style: {
        width: this.getProgress() + "%"
      }
    }));
  };

  _proto.getProgress = function getProgress() {
    return this.attrs.progress;
  };

  return ProgressBar;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/common/components/TagSelector.js":
/*!**********************************************!*\
  !*** ./src/common/components/TagSelector.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TagSelector; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_tags_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/tags/helpers/tagLabel */ "flarum/tags/helpers/tagLabel");
/* harmony import */ var flarum_tags_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_tags_helpers_tagIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/tags/helpers/tagIcon */ "flarum/tags/helpers/tagIcon");
/* harmony import */ var flarum_tags_helpers_tagIcon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_helpers_tagIcon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/tags/utils/sortTags */ "flarum/tags/utils/sortTags");
/* harmony import */ var flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_5__);







var TagSelector = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TagSelector, _Component);

  function TagSelector() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = TagSelector.prototype;

  _proto.oninit = function oninit(vnode) {
    var _this = this;

    _Component.prototype.oninit.call(this, vnode);

    this.selected = this.attrs.selectedTags || [];
    this.tags = this.attrs.tags || app.store.all('tags');
    this.focused = false;

    if (this.attrs.excludedTags) {
      this.tags = this.tags.filter(function (tag) {
        return !_this.attrs.excludedTags.includes(tag) || _this.attrs.selectedTags.includes(tag);
      });
    }
  };

  _proto.view = function view() {
    var _this2 = this;

    $(window).click(function () {
      _this2.focused = false;
      m.redraw();
    });
    return m("div", {
      className: "UiKit-TagSelector" + (this.focused ? ' open' : '')
    }, m("input", {
      className: "FormControl",
      onfocus: function onfocus() {
        return _this2.focused = true;
      },
      onclick: function onclick(e) {
        return e.stopPropagation();
      }
    }), m("div", {
      className: "UiKit-TagSelector-selectedTags FormControl"
    }, this.selected.map(function (tag) {
      return flarum_tags_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_3___default()(tag);
    })), m("ul", {
      className: "Dropdown-menu"
    }, this.tags.map(function (tag) {
      return m("li", {
        className: "UiKit-TagSelector-item" + (_this2.isTagSelected(tag) ? ' UiKit-TagSelector-item--selected' : '')
      }, m("a", {
        onclick: _this2.toggleTag.bind(_this2, tag)
      }, m("div", {
        className: "UiKit-TagSelector-item-icon"
      }, flarum_tags_helpers_tagIcon__WEBPACK_IMPORTED_MODULE_4___default()(tag)), m("div", {
        className: "UiKit-TagSelector-item-content"
      }, m("div", {
        className: "UiKit-TagSelector-item-name"
      }, tag.name()), m("div", {
        className: "UiKit-TagSelector-item-description"
      }, tag.description() || '')), _this2.isTagSelected(tag) ? m("div", {
        className: "UiKit-TagSelector-item-check"
      }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()('fas fa-check')) : ''));
    })));
  };

  _proto.isTagSelected = function isTagSelected(tag) {
    return this.selected.indexOf(tag) !== -1;
  };

  _proto.toggleTag = function toggleTag(tag, e) {
    e.stopPropagation();
    this.$('input').focus();
    if (this.isTagSelected(tag)) this.selected = this.selected.filter(function (t) {
      return t !== tag;
    });else this.selected.push(tag);
    if (this.attrs.onchange) this.attrs.onchange(this.selected);
  };

  return TagSelector;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/common/index.js":
/*!*****************************!*\
  !*** ./src/common/index.js ***!
  \*****************************/
/*! exports provided: uikit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uikit", function() { return uikit; });
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Input */ "./src/common/components/Input.js");
/* harmony import */ var _components_ProgressBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ProgressBar */ "./src/common/components/ProgressBar.js");
/* harmony import */ var _components_TagSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/TagSelector */ "./src/common/components/TagSelector.js");
/* harmony import */ var _components_Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Label */ "./src/common/components/Label.js");
/* harmony import */ var _components_LabelGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/LabelGroup */ "./src/common/components/LabelGroup.js");





var uikit = {
  Input: _components_Input__WEBPACK_IMPORTED_MODULE_0__["default"],
  ProgressBar: _components_ProgressBar__WEBPACK_IMPORTED_MODULE_1__["default"],
  TagSelector: _components_TagSelector__WEBPACK_IMPORTED_MODULE_2__["default"],
  Label: _components_Label__WEBPACK_IMPORTED_MODULE_3__["default"],
  LabelGroup: _components_LabelGroup__WEBPACK_IMPORTED_MODULE_4__["default"]
};

/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/helpers/icon":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['helpers/icon']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/icon'];

/***/ }),

/***/ "flarum/tags/helpers/tagIcon":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['tags/helpers/tagIcon']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['tags/helpers/tagIcon'];

/***/ }),

/***/ "flarum/tags/helpers/tagLabel":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['tags/helpers/tagLabel']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['tags/helpers/tagLabel'];

/***/ }),

/***/ "flarum/tags/utils/sortTags":
/*!************************************************************!*\
  !*** external "flarum.core.compat['tags/utils/sortTags']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['tags/utils/sortTags'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map