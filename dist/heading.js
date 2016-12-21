/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @file   Heading.js
	 * @brief  Base UI of Heading
	 * @author simpart
	 */

	mofron.parts.Heading = function (_mofron$parts$Base) {
	    _inherits(_class, _mofron$parts$Base);

	    function _class(txt, lv) {
	        _classCallCheck(this, _class);

	        try {
	            var _lv = lv === undefined ? 1 : lv;
	            if (null === txt || 'number' != typeof _lv) {
	                throw new Error('invalid parameter');
	            }
	            if (1 > _lv || 6 < _lv) {
	                throw new Error('invalid parameter');
	            }

	            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, [txt, _lv]));
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	        return _this;
	    }

	    _createClass(_class, [{
	        key: 'getTarget',
	        value: function getTarget() {
	            try {
	                return this.vdom.getChild(0);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'initContents',
	        value: function initContents(vd, prm) {
	            try {
	                // var frame = new mofron.parts.Frame();
	                //frame.style('width', '100%');
	                //frame.style('height', null);
	                //this.addChild(frame);
	                if ('string' === typeof prm[0]) {
	                    var conts = new mofron.util.Vdom('h' + prm[1]);
	                    conts.setStyle('margin', '0px');
	                    conts.setText(prm[0]);
	                    vd.addChild(conts);
	                } else if ('object' === _typeof(prm[0])) {
	                    var conts = new mofron.util.Vdom('div');
	                    vd.addChild(conts);
	                    this.addChild(prm[0]);
	                }
	                //var style = new mofron.other.Styles(this, ' div');
	                //style.style('width'  , '100%');
	                //style.style('height' , '35px');
	                //style.style('border-left'  , 'solid 15px black');
	                //style.style('border-bottom', 'solid 1px black');
	                //if (null !== this.theme.colors[0]) {
	                //    style.style('border-color', this.theme.colors[0].getStyle());
	                //}
	                //
	                //var ttl_style = new mofron.other.Styles(this.title);
	                //ttl_style.style('margin-left'  , '20px');
	                //this.addChild(this.title,disp);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'marginLeft',
	        value: function marginLeft(val) {
	            try {
	                var _val = val === undefined ? null : val;
	                if (null === _val) {
	                    return this.getTarget().getStyle('margin-left');
	                }
	                if ('number' !== typeof _val) {
	                    throw new Error('invalid parameter');
	                }
	                this.style('margin-left', val + 'px');
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}(mofron.parts.Base);

/***/ }
/******/ ]);