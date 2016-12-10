(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ld37"] = factory();
	else
		root["ld37"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var gamesaw = __webpack_require__(2);
	var Game = (function () {
	    function Game() {
	        this.width = 800;
	        this.height = 600;
	        this.targetFps = 10;
	        this.backgroundColor = new gamesaw.Graphics.Color(50, 50, 50);
	        var that = this;
	        this.application = new gamesaw.Application(this.width, this.height, this.targetFps);
	        this.menuScene = this.application.sceneManager.addScene('menu');
	        this.menuScene.add3dSurface('main');
	        this.menuScene.render = function (delta) {
	            that.render(delta);
	        };
	        this.menuScene.update = function (delta) {
	            that.update(delta);
	        };
	        this.gl = this.menuScene.getContext('main');
	        var bgCol = this.backgroundColor.getRGBAFloat();
	        this.gl.clearColor(bgCol[0], bgCol[1], bgCol[2], 1);
	        this.renderer = new gamesaw.GL.Render2d.Renderer2d(this.gl);
	        this.backgroundTexture = new gamesaw.GL.Texture(this.gl, '../assets/img/texture.png');
	        this.backgroundTexture.width = 2048;
	        this.backgroundTexture.height = 2048;
	        this.backgroundSprite = new gamesaw.GL.Sprite(this.backgroundTexture, 400, 300, [0, 0, 400, 300]);
	        this.application.init();
	    }
	    Game.prototype.update = function (delta) {
	    };
	    Game.prototype.render = function (delta) {
	        this.menuScene.clear('main');
	        this.backgroundSprite.renderScale(this.renderer, 0, 0, 2);
	        this.renderer.execute();
	    };
	    return Game;
	}());
	exports.Game = Game;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Geometry = __webpack_require__(3);
	exports.Geometry = Geometry;
	var Graphics = __webpack_require__(18);
	exports.Graphics = Graphics;
	var Utility = __webpack_require__(25);
	exports.Utility = Utility;
	var Input = __webpack_require__(29);
	exports.Input = Input;
	var GL = __webpack_require__(34);
	exports.GL = GL;
	var Audio = __webpack_require__(62);
	exports.Audio = Audio;
	var AI = __webpack_require__(65);
	exports.AI = AI;
	var scene_1 = __webpack_require__(74);
	exports.Scene = scene_1.Scene;
	var application_1 = __webpack_require__(75);
	exports.Application = application_1.Application;
	var scene_manager_1 = __webpack_require__(76);
	exports.SceneManager = scene_manager_1.SceneManager;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var geometry_1 = __webpack_require__(4);
	exports.GeometricEnum = geometry_1.GeometricEnum;
	exports.GeometricName = geometry_1.GeometricName;
	var vector2d_1 = __webpack_require__(5);
	exports.Vector2 = vector2d_1.Vector2;
	var vector3d_1 = __webpack_require__(7);
	exports.Vector3 = vector3d_1.Vector3;
	var point_1 = __webpack_require__(8);
	exports.Point = point_1.Point;
	var line_1 = __webpack_require__(9);
	exports.Line = line_1.Line;
	var circle_1 = __webpack_require__(10);
	exports.Circle = circle_1.Circle;
	var rectangle_1 = __webpack_require__(11);
	exports.Rectangle = rectangle_1.Rectangle;
	var aabb_1 = __webpack_require__(12);
	exports.AABB = aabb_1.AABB;
	var polygon_1 = __webpack_require__(13);
	exports.Polygon = polygon_1.Polygon;
	var bezier_1 = __webpack_require__(14);
	exports.Bezier = bezier_1.Bezier;
	var bspline_1 = __webpack_require__(15);
	exports.BSpline = bspline_1.BSpline;
	var renderer_1 = __webpack_require__(16);
	exports.Renderer = renderer_1.Renderer;
	exports.render = renderer_1.render;
	var collision_1 = __webpack_require__(17);
	exports.Collider = collision_1.Collider;
	exports.intersects = collision_1.intersects;


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	(function (GeometricEnum) {
	    GeometricEnum[GeometricEnum["POINT"] = 0] = "POINT";
	    GeometricEnum[GeometricEnum["CIRCLE"] = 1] = "CIRCLE";
	    GeometricEnum[GeometricEnum["VECTOR2"] = 2] = "VECTOR2";
	    GeometricEnum[GeometricEnum["VECTOR3"] = 3] = "VECTOR3";
	    GeometricEnum[GeometricEnum["LINE"] = 4] = "LINE";
	    GeometricEnum[GeometricEnum["TRIANGLE"] = 5] = "TRIANGLE";
	    GeometricEnum[GeometricEnum["RECTANGLE"] = 6] = "RECTANGLE";
	    GeometricEnum[GeometricEnum["AABB"] = 7] = "AABB";
	    GeometricEnum[GeometricEnum["POLYGON"] = 8] = "POLYGON";
	    GeometricEnum[GeometricEnum["BEZIER"] = 9] = "BEZIER";
	    GeometricEnum[GeometricEnum["BSPLINE"] = 10] = "BSPLINE";
	})(exports.GeometricEnum || (exports.GeometricEnum = {}));
	var GeometricEnum = exports.GeometricEnum;
	;
	exports.GeometricName = [
	    'point',
	    'circle',
	    'vector2',
	    'vector3',
	    'line',
	    'triangle',
	    'rectangle',
	    'aabb',
	    'polygon',
	    'bezier',
	    'bspline'
	];


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var geometry_1 = __webpack_require__(4);
	var utility_1 = __webpack_require__(6);
	var Vector2 = (function () {
	    function Vector2(x, y) {
	        this.type = geometry_1.GeometricEnum.VECTOR2;
	        this.x = 0.0;
	        this.y = 0.0;
	        if (x) {
	            this.x = x;
	        }
	        if (y) {
	            this.y = y;
	        }
	    }
	    Vector2.prototype.getType = function () {
	        return this.type;
	    };
	    Vector2.prototype.getX = function () {
	        return this.x;
	    };
	    Vector2.prototype.getY = function () {
	        return this.y;
	    };
	    Vector2.prototype.setX = function (x) {
	        this.x = x;
	    };
	    Vector2.prototype.setY = function (y) {
	        this.y = y;
	    };
	    Vector2.prototype.set = function (x, y) {
	        this.x = x;
	        this.y = y;
	    };
	    Vector2.prototype.get = function () {
	        return this;
	    };
	    Vector2.prototype.add = function (v2) {
	        return new Vector2(this.x + v2.x, this.y + v2.y);
	    };
	    Vector2.prototype.sub = function (v2) {
	        return new Vector2(this.x - v2.x, this.y - v2.y);
	    };
	    Vector2.prototype.invert = function () {
	        return new Vector2(-this.x, -this.y);
	    };
	    Vector2.prototype.scale = function (scalar) {
	        return new Vector2(this.x * scalar, this.y * scalar);
	    };
	    Vector2.prototype.normalize = function () {
	        var length = this.length();
	        if (length === 0) {
	            return new Vector2(0.0, 0.0);
	        }
	        return new Vector2(this.x / length, this.y / length);
	    };
	    Vector2.prototype.project = function (v2) {
	        var dot = this.dot(v2);
	        var length = this.lengthSquared();
	        return new Vector2((dot / length) * this.x, (dot / length) * this.y);
	    };
	    Vector2.prototype.length = function () {
	        return Math.sqrt(this.lengthSquared());
	    };
	    Vector2.prototype.lengthSquared = function () {
	        return (this.x * this.x) + (this.y * this.y);
	    };
	    Vector2.prototype.dot = function (v2) {
	        return ((this.x * v2.x) + (this.y * v2.y));
	    };
	    Vector2.prototype.cross = function (v2) {
	        return ((this.x * v2.y) - (this.y * v2.x));
	    };
	    Vector2.prototype.angle = function () {
	        return Math.atan2(this.x, -this.y);
	    };
	    Vector2.prototype.rotate = function (radian) {
	        if (this.x === 0) {
	            this.x += utility_1.EPSILON;
	        }
	        if (this.y === 0) {
	            this.y += utility_1.EPSILON;
	        }
	        return new Vector2(Math.cos(radian) * this.x - Math.sin(radian) * this.y, Math.sin(radian) * this.x + Math.cos(radian) * this.y);
	    };
	    Vector2.prototype.rotatePivot = function (x, y, radian) {
	        if (this.x === 0) {
	            this.x += utility_1.EPSILON;
	        }
	        if (this.y === 0) {
	            this.y += utility_1.EPSILON;
	        }
	        var srcX = this.x;
	        var srcY = this.y;
	        srcX -= x;
	        srcY -= y;
	        return new Vector2((Math.cos(radian) * srcX - Math.sin(radian) * srcY) + x, (Math.sin(radian) * srcX + Math.cos(radian) * srcY) + y);
	    };
	    return Vector2;
	}());
	exports.Vector2 = Vector2;


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	exports.PI = Math.PI;
	exports.EPSILON = 0.0000001;
	function capitalize(str) {
	    return str.charAt(0).toUpperCase() + str.slice(1);
	}
	exports.capitalize = capitalize;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var geometry_1 = __webpack_require__(4);
	var Vector3 = (function () {
	    function Vector3(x, y, z) {
	        this.type = geometry_1.GeometricEnum.VECTOR3;
	        this.x = 0.0;
	        this.y = 0.0;
	        this.z = 0.0;
	        if (x) {
	            this.x = x;
	        }
	        if (y) {
	            this.y = y;
	        }
	        if (z) {
	            this.z = z;
	        }
	    }
	    Vector3.prototype.getType = function () {
	        return this.type;
	    };
	    Vector3.prototype.getX = function () {
	        return this.x;
	    };
	    Vector3.prototype.getY = function () {
	        return this.y;
	    };
	    Vector3.prototype.getZ = function () {
	        return this.z;
	    };
	    Vector3.prototype.setX = function (x) {
	        this.x = x;
	    };
	    Vector3.prototype.setY = function (y) {
	        this.y = y;
	    };
	    Vector3.prototype.setZ = function (z) {
	        this.z = z;
	    };
	    Vector3.prototype.set = function (x, y, z) {
	        this.x = x;
	        this.y = y;
	        this.z = z;
	    };
	    Vector3.prototype.get = function () {
	        return this;
	    };
	    Vector3.prototype.add = function (v2) {
	        return new Vector3(this.x + v2.x, this.y + v2.y, this.z + v2.z);
	    };
	    Vector3.prototype.sub = function (v2) {
	        return new Vector3(this.x - v2.x, this.y - v2.y, this.z - v2.z);
	    };
	    Vector3.prototype.invert = function () {
	        return new Vector3(-this.x, -this.y, -this.z);
	    };
	    Vector3.prototype.scale = function (scalar) {
	        return new Vector3(this.x * scalar, this.y * scalar, this.z * scalar);
	    };
	    Vector3.prototype.normalize = function () {
	        var length = this.length();
	        if (length === 0) {
	            return new Vector3(0.0, 0.0, 0.0);
	        }
	        return new Vector3(this.x / length, this.y / length, this.z / length);
	    };
	    Vector3.prototype.project = function (v2) {
	        var dot = this.dot(v2);
	        var length = this.lengthSquared();
	        return new Vector3((dot / length) * this.x, (dot / length) * this.y, (dot / length) * this.z);
	    };
	    Vector3.prototype.length = function () {
	        return Math.sqrt(this.lengthSquared());
	    };
	    Vector3.prototype.lengthSquared = function () {
	        return (this.x * this.x) + (this.y * this.y) + (this.z * this.z);
	    };
	    Vector3.prototype.dot = function (v2) {
	        return ((this.x * v2.x) + (this.y * v2.y) + (this.z * v2.z));
	    };
	    return Vector3;
	}());
	exports.Vector3 = Vector3;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var geometry_1 = __webpack_require__(4);
	var Point = (function () {
	    function Point(x, y) {
	        this.type = geometry_1.GeometricEnum.POINT;
	        this.x = 0;
	        this.y = 0;
	        if (x) {
	            this.x = x;
	        }
	        if (y) {
	            this.y = y;
	        }
	    }
	    Point.prototype.getType = function () {
	        return this.type;
	    };
	    Point.prototype.getX = function () {
	        return this.x;
	    };
	    Point.prototype.getY = function () {
	        return this.y;
	    };
	    Point.prototype.setX = function (x) {
	        this.x = x;
	    };
	    Point.prototype.setY = function (y) {
	        this.y = y;
	    };
	    Point.prototype.set = function (x, y) {
	        this.x = x;
	        this.y = y;
	    };
	    Point.prototype.get = function () {
	        return this;
	    };
	    Point.prototype.transform = function (x, y) {
	        this.x += x;
	        this.y += y;
	    };
	    return Point;
	}());
	exports.Point = Point;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var geometry_1 = __webpack_require__(4);
	var point_1 = __webpack_require__(8);
	var Line = (function () {
	    function Line(x0, y0, x1, y1) {
	        this.type = geometry_1.GeometricEnum.LINE;
	        this.start = new point_1.Point(-1, 0);
	        this.end = new point_1.Point(1, 0);
	        if (x0 && y0) {
	            this.start.set(x0, y0);
	        }
	        if (x1 && y1) {
	            this.end.set(x1, y1);
	        }
	    }
	    Line.prototype.transform = function (x, y) {
	        this.start.transform(x, y);
	        this.end.transform(x, y);
	    };
	    Line.prototype.transformStart = function (x, y) {
	        this.start.transform(x, y);
	    };
	    Line.prototype.transformEnd = function (x, y) {
	        this.end.transform(x, y);
	    };
	    Line.prototype.set = function (x0, y0, x1, y1) {
	        this.start.set(x0, y0);
	        this.end.set(x1, y1);
	    };
	    return Line;
	}());
	exports.Line = Line;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var geometry_1 = __webpack_require__(4);
	var point_1 = __webpack_require__(8);
	var Circle = (function () {
	    function Circle(x, y, radius) {
	        this.type = geometry_1.GeometricEnum.CIRCLE;
	        this.pos = new point_1.Point(0, 0);
	        this.radius = 1;
	        if (x) {
	            this.pos.x = x;
	        }
	        if (y) {
	            this.pos.y = y;
	        }
	        if (radius) {
	            this.radius = radius;
	        }
	    }
	    Circle.prototype.getType = function () {
	        return this.type;
	    };
	    Circle.prototype.getX = function () {
	        return this.pos.x;
	    };
	    Circle.prototype.getY = function () {
	        return this.pos.y;
	    };
	    Circle.prototype.setX = function (x) {
	        this.pos.x = x;
	    };
	    Circle.prototype.setY = function (y) {
	        this.pos.y = y;
	    };
	    Circle.prototype.set = function (x, y, radius) {
	        this.pos.x = x;
	        this.pos.y = y;
	        this.radius = radius;
	    };
	    Circle.prototype.get = function () {
	        return this;
	    };
	    Circle.prototype.transform = function (x, y) {
	        this.pos.x += x;
	        this.pos.y += y;
	    };
	    return Circle;
	}());
	exports.Circle = Circle;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var geometry_1 = __webpack_require__(4);
	var point_1 = __webpack_require__(8);
	var Rectangle = (function () {
	    function Rectangle(x, y, width, height) {
	        this.type = geometry_1.GeometricEnum.RECTANGLE;
	        this.pos = new point_1.Point(0, 0);
	        this.width = 1;
	        this.height = 1;
	        if (x) {
	            this.pos.x = x;
	        }
	        if (y) {
	            this.pos.y = y;
	        }
	        if (width) {
	            this.width = width;
	        }
	        if (height) {
	            this.height = height;
	        }
	    }
	    return Rectangle;
	}());
	exports.Rectangle = Rectangle;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var geometry_1 = __webpack_require__(4);
	var point_1 = __webpack_require__(8);
	var AABB = (function () {
	    function AABB(x, y, halfWidth, halfHeight) {
	        this.type = geometry_1.GeometricEnum.AABB;
	        this.pos = new point_1.Point(0, 0);
	        this.halfWidth = 1;
	        this.halfHeight = 1;
	        if (x && y) {
	            this.pos.set(x, y);
	        }
	        if (halfWidth) {
	            this.halfWidth = halfWidth;
	        }
	        if (halfHeight) {
	            this.halfHeight = halfHeight;
	        }
	    }
	    AABB.prototype.setPosition = function (x, y) {
	        this.pos.set(x, y);
	    };
	    return AABB;
	}());
	exports.AABB = AABB;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var geometry_1 = __webpack_require__(4);
	var point_1 = __webpack_require__(8);
	var Polygon = (function () {
	    function Polygon(points) {
	        this.type = geometry_1.GeometricEnum.POLYGON;
	        this.points = [
	            new point_1.Point(0, 0),
	            new point_1.Point(1, -1),
	            new point_1.Point(-1, -1)
	        ];
	        this.points = points;
	    }
	    Polygon.prototype.addPoint = function (point) {
	        this.points.push(point);
	    };
	    Polygon.prototype.removePoint = function (index) {
	        this.points.splice(index, 1);
	    };
	    Polygon.prototype.removeFirst = function () {
	        this.points.shift();
	    };
	    Polygon.prototype.removeLast = function () {
	        this.points.pop();
	    };
	    return Polygon;
	}());
	exports.Polygon = Polygon;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var geometry_1 = __webpack_require__(4);
	var vector2d_1 = __webpack_require__(5);
	var Bezier = (function () {
	    function Bezier(startX, startY, endX, endY) {
	        this.type = geometry_1.GeometricEnum.BEZIER;
	        this.start = new vector2d_1.Vector2(0.0, 0.0);
	        this.end = new vector2d_1.Vector2(1.0, 0.0);
	        this.controlStart = new vector2d_1.Vector2(0.0, 0.0);
	        this.controlEnd = new vector2d_1.Vector2(1.0, 0.0);
	        this.start.set(startX, startY);
	        this.controlStart.set(startX, startY);
	        this.end.set(endX, endY);
	        this.controlEnd.set(endX, endY);
	    }
	    Bezier.prototype.getPoint = function (t) {
	        var point = new vector2d_1.Vector2(this.start.x, this.start.y);
	        if (t !== 0) {
	            var u = 1 - t;
	            var tt = t * t;
	            var uu = u * u;
	            var uuu = uu * u;
	            var ttt = tt * t;
	            point = this.start.scale(uuu);
	            point = point.add(this.controlStart.scale(3 * uu * t));
	            point = point.add(this.controlEnd.scale(3 * u * tt));
	            point = point.add(this.end.scale(ttt));
	        }
	        return point;
	    };
	    return Bezier;
	}());
	exports.Bezier = Bezier;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var geometry_1 = __webpack_require__(4);
	var BSpline = (function () {
	    function BSpline() {
	        this.type = geometry_1.GeometricEnum.BSPLINE;
	    }
	    return BSpline;
	}());
	exports.BSpline = BSpline;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var geometry_1 = __webpack_require__(4);
	var utility_1 = __webpack_require__(6);
	function render(ctx, object) {
	    var renderer = new Renderer(ctx);
	    renderer.render(object);
	}
	exports.render = render;
	;
	var Renderer = (function () {
	    function Renderer(context) {
	        this.context = context;
	    }
	    Renderer.prototype.render = function (object) {
	        if (!this.context) {
	            throw new Error('Renderer must have a context for rendering.');
	        }
	        switch (object.type) {
	            case geometry_1.GeometricEnum.POINT:
	                this.renderPoint(object);
	                break;
	            case geometry_1.GeometricEnum.VECTOR2:
	                this.renderPoint(object);
	                break;
	            case geometry_1.GeometricEnum.LINE:
	                this.renderLine(object);
	                break;
	            case geometry_1.GeometricEnum.AABB:
	                this.renderAABB(object);
	                break;
	            case geometry_1.GeometricEnum.RECTANGLE:
	                this.renderRectangle(object);
	                break;
	            case geometry_1.GeometricEnum.CIRCLE:
	                this.renderCircle(object);
	                break;
	            default:
	                throw new Error('Not recogniced as a renderable shape.');
	        }
	    };
	    Renderer.prototype.renderPoint = function (obj) {
	        this.context.beginPath();
	        this.context.arc(obj.x, obj.y, 1.0, 0, utility_1.PI * 2);
	        this.context.fill();
	    };
	    Renderer.prototype.renderLine = function (obj) {
	        this.context.beginPath();
	        this.context.moveTo(obj.start.x, obj.start.y);
	        this.context.lineTo(obj.end.x, obj.end.x);
	        this.context.stroke();
	    };
	    Renderer.prototype.renderAABB = function (obj) {
	        this.context.strokeRect(obj.pos.x - obj.halfWidth, obj.pos.y - obj.halfHeight, obj.halfWidth * 2, obj.halfHeight * 2);
	    };
	    Renderer.prototype.renderRectangle = function (obj) {
	        this.context.strokeRect(obj.pos.x, obj.pos.y, obj.width, obj.height);
	    };
	    Renderer.prototype.renderCircle = function (obj) {
	        this.context.beginPath();
	        this.context.arc(obj.pos.x, obj.pos.y, obj.radius, 0, utility_1.PI * 2);
	        this.context.stroke();
	    };
	    return Renderer;
	}());
	exports.Renderer = Renderer;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var geometry_1 = __webpack_require__(4);
	var index_1 = __webpack_require__(3);
	function intersects(obj0, obj1) {
	    var collider = new Collider();
	    return collider.intersects(obj0, obj1);
	}
	exports.intersects = intersects;
	;
	var Collider = (function () {
	    function Collider() {
	    }
	    Collider.prototype.intersects = function (obj0, obj1) {
	        // Need to check the first object if we can use it as main collider body
	        switch (obj0.type) {
	            case geometry_1.GeometricEnum.POINT:
	                switch (obj1.type) {
	                    case geometry_1.GeometricEnum.LINE:
	                        return this.pointLine();
	                    case geometry_1.GeometricEnum.CIRCLE:
	                        return this.pointCircle(obj0, obj1);
	                    case geometry_1.GeometricEnum.RECTANGLE:
	                        return this.pointRectangle(obj0, obj1);
	                    case geometry_1.GeometricEnum.AABB:
	                        return this.pointAABB(obj0, obj1);
	                    case geometry_1.GeometricEnum.POLYGON:
	                        return this.pointPolygon();
	                    default:
	                        throw new Error('Second object not a collidable body');
	                }
	            case geometry_1.GeometricEnum.LINE:
	                switch (obj1.type) {
	                    case geometry_1.GeometricEnum.POINT:
	                        return this.linePoint();
	                    case geometry_1.GeometricEnum.CIRCLE:
	                        return this.lineCircle();
	                    case geometry_1.GeometricEnum.RECTANGLE:
	                        return this.lineRectangle();
	                    case geometry_1.GeometricEnum.POLYGON:
	                        return this.linePolygon();
	                    default:
	                        throw new Error('Second object not a collidable body');
	                }
	            case geometry_1.GeometricEnum.CIRCLE:
	                switch (obj1.type) {
	                    case geometry_1.GeometricEnum.CIRCLE:
	                        return this.circleCircle(obj0, obj1);
	                    case geometry_1.GeometricEnum.LINE:
	                        return this.circleLine();
	                    case geometry_1.GeometricEnum.POINT:
	                        return this.circlePoint(obj0, obj1);
	                    case geometry_1.GeometricEnum.RECTANGLE:
	                        return this.circleRectangle();
	                    case geometry_1.GeometricEnum.AABB:
	                        return this.circleAABB(obj0, obj1);
	                    case geometry_1.GeometricEnum.POLYGON:
	                        return this.circlePolygon(obj0, obj1);
	                    default:
	                        throw new Error('Second object not a collidable body');
	                }
	            case geometry_1.GeometricEnum.RECTANGLE:
	                switch (obj1.type) {
	                    case geometry_1.GeometricEnum.RECTANGLE:
	                        return this.rectangleRectangle(obj0, obj1);
	                    case geometry_1.GeometricEnum.AABB:
	                        return this.rectangleAABB(obj0, obj1);
	                    case geometry_1.GeometricEnum.LINE:
	                        return this.rectangleLine();
	                    case geometry_1.GeometricEnum.CIRCLE:
	                        return this.rectangleCircle();
	                    case geometry_1.GeometricEnum.POINT:
	                        return this.rectanglePoint(obj0, obj1);
	                    case geometry_1.GeometricEnum.POLYGON:
	                        return this.rectanglePolygon();
	                    default:
	                        throw new Error('Second object not a collidable body');
	                }
	            case geometry_1.GeometricEnum.POLYGON:
	                switch (obj1.type) {
	                    case geometry_1.GeometricEnum.POLYGON:
	                        return this.polygonPolygon();
	                    case geometry_1.GeometricEnum.LINE:
	                        return this.polygonLine();
	                    case geometry_1.GeometricEnum.CIRCLE:
	                        return this.polygonCircle(obj0, obj1);
	                    case geometry_1.GeometricEnum.RECTANGLE:
	                        return this.polygonRectangle();
	                    case geometry_1.GeometricEnum.POINT:
	                        return this.polygonPoint();
	                    default:
	                        throw new Error('Second object not a collidable body');
	                }
	            case geometry_1.GeometricEnum.AABB:
	                switch (obj1.type) {
	                    case geometry_1.GeometricEnum.AABB:
	                        return this.aabbAABB(obj0, obj1);
	                    case geometry_1.GeometricEnum.POINT:
	                        return this.aabbPoint(obj0, obj1);
	                    case geometry_1.GeometricEnum.CIRCLE:
	                        return this.aabbCircle(obj0, obj1);
	                    case geometry_1.GeometricEnum.RECTANGLE:
	                        return this.aabbRectangle(obj0, obj1);
	                }
	            default:
	                throw new Error('Couldn\'t find any collider for type');
	        }
	    };
	    Collider.prototype.pointLine = function () {
	        return true;
	    };
	    Collider.prototype.linePoint = function () {
	        return true;
	    };
	    Collider.prototype.pointCircle = function (obj0, obj1) {
	        var v0 = new index_1.Vector2(obj0.x, obj0.y);
	        var v1 = new index_1.Vector2(obj1.pos.x, obj1.pos.y);
	        var len = v1.sub(v0).length();
	        return len < obj1.radius;
	    };
	    Collider.prototype.circlePoint = function (obj0, obj1) {
	        return this.pointCircle(obj1, obj0);
	    };
	    Collider.prototype.pointRectangle = function (obj0, obj1) {
	        return (obj0.x > obj1.pos.x && obj0.x < obj1.pos.x + obj1.width &&
	            obj0.y > obj1.pos.y && obj0.y < obj1.pos.y + obj1.height);
	    };
	    Collider.prototype.rectanglePoint = function (obj0, obj1) {
	        return this.pointRectangle(obj1, obj0);
	    };
	    Collider.prototype.pointPolygon = function () {
	        return true;
	    };
	    Collider.prototype.polygonPoint = function () {
	        return this.pointPolygon();
	    };
	    Collider.prototype.lineLine = function () {
	        return true;
	    };
	    Collider.prototype.lineCircle = function () {
	        return true;
	    };
	    Collider.prototype.circleLine = function () {
	        return this.lineCircle();
	    };
	    Collider.prototype.lineRectangle = function () {
	        return true;
	    };
	    Collider.prototype.rectangleLine = function () {
	        return this.lineRectangle();
	    };
	    Collider.prototype.linePolygon = function () {
	        return true;
	    };
	    Collider.prototype.polygonLine = function () {
	        return this.linePolygon();
	    };
	    Collider.prototype.circleCircle = function (obj0, obj1) {
	        var v0 = new index_1.Vector2(obj0.pos.x, obj0.pos.y);
	        var v1 = new index_1.Vector2(obj1.pos.x, obj1.pos.y);
	        var len = v1.sub(v0).length();
	        var cRadi = obj0.radius + obj1.radius;
	        return len < cRadi;
	    };
	    Collider.prototype.circleRectangle = function () {
	        return true;
	    };
	    Collider.prototype.rectangleCircle = function () {
	        return this.circleRectangle();
	    };
	    Collider.prototype.circlePolygon = function (obj0, obj1) {
	        return true;
	    };
	    Collider.prototype.polygonCircle = function (obj0, obj1) {
	        return this.circlePolygon(obj1, obj0);
	    };
	    Collider.prototype.rectangleRectangle = function (obj0, obj1) {
	        return (obj0.pos.x + obj0.width >= obj1.pos.x &&
	            obj0.pos.y + obj0.height >= obj1.pos.y &&
	            obj0.pos.x <= obj1.pos.x + obj1.width &&
	            obj0.pos.y <= obj1.pos.y + obj1.height);
	    };
	    Collider.prototype.rectanglePolygon = function () {
	        return true;
	    };
	    Collider.prototype.polygonRectangle = function () {
	        return this.rectanglePolygon();
	    };
	    Collider.prototype.polygonPolygon = function () {
	        return true;
	    };
	    Collider.prototype.pointAABB = function (obj0, obj1) {
	        if (Math.abs(obj1.pos.x - obj0.x) > obj1.halfWidth) {
	            return false;
	        }
	        else if (Math.abs(obj1.pos.y - obj0.y) > obj1.halfHeight) {
	            return false;
	        }
	        else {
	            return true;
	        }
	    };
	    Collider.prototype.aabbPoint = function (obj0, obj1) {
	        return this.pointAABB(obj1, obj0);
	    };
	    Collider.prototype.circleAABB = function (obj0, obj1) {
	        if (Math.abs(obj1.pos.x - obj0.pos.x) > (obj1.halfWidth + obj0.radius)) {
	            return false;
	        }
	        else if (Math.abs(obj1.pos.y - obj0.pos.y) > (obj1.halfHeight + obj0.radius)) {
	            return false;
	        }
	        else {
	            return true;
	        }
	    };
	    Collider.prototype.aabbCircle = function (obj0, obj1) {
	        return this.circleAABB(obj1, obj0);
	    };
	    Collider.prototype.rectangleAABB = function (obj0, obj1) {
	        var halfWidth = obj0.width / 2;
	        var halfHeight = obj0.height / 2;
	        if (Math.abs(obj0.pos.x + halfWidth - obj1.pos.x) > (halfWidth + obj1.halfWidth)) {
	            return false;
	        }
	        else if (Math.abs(obj0.pos.y + halfHeight - obj1.pos.y) > (halfHeight + obj1.halfHeight)) {
	            return false;
	        }
	        else {
	            return true;
	        }
	    };
	    Collider.prototype.aabbRectangle = function (obj0, obj1) {
	        return this.rectangleAABB(obj1, obj0);
	    };
	    Collider.prototype.aabbAABB = function (obj0, obj1) {
	        if (Math.abs(obj0.pos.x - obj1.pos.x) > (obj0.halfWidth + obj1.halfWidth)) {
	            return false;
	        }
	        else if (Math.abs(obj0.pos.y - obj1.pos.y) > (obj0.halfHeight + obj1.halfHeight)) {
	            return false;
	        }
	        else {
	            return true;
	        }
	    };
	    return Collider;
	}());
	exports.Collider = Collider;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var color_1 = __webpack_require__(19);
	exports.Color = color_1.Color;
	var surface2d_1 = __webpack_require__(20);
	exports.Surface2d = surface2d_1.Surface2d;
	var surface3d_1 = __webpack_require__(23);
	exports.Surface3d = surface3d_1.Surface3d;
	var sprite_1 = __webpack_require__(24);
	exports.Sprite = sprite_1.Sprite;


/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	(function (RGBA) {
	    RGBA[RGBA["RED"] = 0] = "RED";
	    RGBA[RGBA["GREEN"] = 1] = "GREEN";
	    RGBA[RGBA["BLUE"] = 2] = "BLUE";
	    RGBA[RGBA["ALPHA"] = 3] = "ALPHA";
	})(exports.RGBA || (exports.RGBA = {}));
	var RGBA = exports.RGBA;
	(function (HSLA) {
	    HSLA[HSLA["HUE"] = 0] = "HUE";
	    HSLA[HSLA["SATURATION"] = 1] = "SATURATION";
	    HSLA[HSLA["LUMINOSITY"] = 2] = "LUMINOSITY";
	    HSLA[HSLA["ALPHA"] = 3] = "ALPHA";
	})(exports.HSLA || (exports.HSLA = {}));
	var HSLA = exports.HSLA;
	var Color = (function () {
	    function Color(red, green, blue, alpha) {
	        this.rgb = [
	            255,
	            255,
	            255
	        ];
	        this.hsl = [
	            360,
	            100,
	            100
	        ];
	        this.alpha = 1;
	        if (red && green && blue) {
	            this.rgb[RGBA.RED] = red;
	            this.rgb[RGBA.GREEN] = green;
	            this.rgb[RGBA.BLUE] = blue;
	            this.RGBtoHSL();
	        }
	        if (alpha) {
	            this.alpha = alpha;
	        }
	    }
	    Color.prototype.setRGB = function (red, green, blue) {
	        this.rgb[RGBA.RED] = red;
	        this.rgb[RGBA.GREEN] = green;
	        this.rgb[RGBA.BLUE] = blue;
	        this.RGBtoHSL();
	    };
	    Color.prototype.setHSL = function (hue, saturation, luminosity) {
	        this.hsl[HSLA.HUE] = hue;
	        this.hsl[HSLA.SATURATION] = saturation;
	        this.hsl[HSLA.LUMINOSITY] = luminosity;
	        this.HSLtoRGB();
	    };
	    Color.prototype.setAlpha = function (alpha) {
	        this.alpha = alpha;
	    };
	    Color.prototype.getRGB = function () {
	        return { r: this.rgb[RGBA.RED], g: this.rgb[RGBA.GREEN], b: this.rgb[RGBA.BLUE] };
	    };
	    Color.prototype.getHSL = function () {
	        return { h: this.hsl[HSLA.HUE], s: this.hsl[HSLA.SATURATION], l: this.hsl[HSLA.LUMINOSITY] };
	    };
	    Color.prototype.getAlpha = function () {
	        return this.alpha;
	    };
	    Color.prototype.getRGBAFloat = function () {
	        return [this.toFloat(this.rgb[RGBA.RED]), this.toFloat(this.rgb[RGBA.GREEN]), this.toFloat(this.rgb[RGBA.BLUE]), this.alpha];
	    };
	    Color.prototype.RGBtoHSL = function () {
	        var r = this.rgb[RGBA.RED];
	        var g = this.rgb[RGBA.GREEN];
	        var b = this.rgb[RGBA.BLUE];
	        var h;
	        var s;
	        var l;
	        var cmax = (r > g) ? r : g;
	        if (b > cmax) {
	            cmax = b;
	        }
	        var cmin = (r < g) ? r : g;
	        if (b < cmin) {
	            cmin = b;
	        }
	        l = cmax / 255.0;
	        if (cmax !== 0) {
	            s = (cmax - cmin) / cmax;
	        }
	        else {
	            s = 0;
	        }
	        if (s === 0) {
	            h = 0;
	        }
	        else {
	            var redc = (cmax - r) / (cmax - cmin);
	            var greenc = (cmax - g) / (cmax - cmin);
	            var bluec = (cmax - b) / (cmax - cmin);
	            if (r === cmax) {
	                h = bluec - greenc;
	            }
	            else if (g === cmax) {
	                h = 2.0 + redc - bluec;
	            }
	            else {
	                h = 4.0 + greenc - redc;
	            }
	            h = h / 6.0;
	            if (h < 0) {
	                h = h + 1.0;
	            }
	        }
	        this.hsl[HSLA.HUE] = h;
	        this.hsl[HSLA.SATURATION] = s;
	        this.hsl[HSLA.LUMINOSITY] = l;
	    };
	    Color.prototype.HSLtoRGB = function () {
	        var r = 0;
	        var g = 0;
	        var b = 0;
	        var hue = this.hsl[HSLA.HUE];
	        var s = this.hsl[HSLA.SATURATION];
	        var l = this.hsl[HSLA.LUMINOSITY];
	        if (this.hsl[HSLA.SATURATION] === 0) {
	            r = Math.floor(l * 255 + 0.5);
	            g = Math.floor(l * 255 + 0.5);
	            b = Math.floor(l * 255 + 0.5);
	        }
	        else {
	            var h = (hue - Math.floor(hue)) * 6.0;
	            var f = h - Math.floor(h);
	            var p = l * (1.0 - s);
	            var q = l * (1.0 - s * f);
	            var t = l * (1.0 - (s * (1.0 - f)));
	            switch (Math.floor(h)) {
	                case 0:
	                    r = (l * 255.0 + 0.5);
	                    g = (t * 255.0 + 0.5);
	                    b = (p * 255.0 + 0.5);
	                    break;
	                case 1:
	                    r = (q * 255.0 + 0.5);
	                    g = (l * 255.0 + 0.5);
	                    b = (p * 255.0 + 0.5);
	                    break;
	                case 2:
	                    r = (p * 255.0 + 0.5);
	                    g = (l * 255.0 + 0.5);
	                    b = (t * 255.0 + 0.5);
	                    break;
	                case 3:
	                    r = (p * 255.0 + 0.5);
	                    g = (q * 255.0 + 0.5);
	                    b = (l * 255.0 + 0.5);
	                    break;
	                case 4:
	                    r = (t * 255.0 + 0.5);
	                    g = (p * 255.0 + 0.5);
	                    b = (l * 255.0 + 0.5);
	                    break;
	                case 5:
	                    r = (l * 255.0 + 0.5);
	                    g = (p * 255.0 + 0.5);
	                    b = (q * 255.0 + 0.5);
	                    break;
	            }
	        }
	        this.rgb[RGBA.RED] = Math.floor(r);
	        this.rgb[RGBA.GREEN] = Math.floor(g);
	        this.rgb[RGBA.BLUE] = Math.floor(b);
	    };
	    Color.prototype.getHex = function () {
	        return '#' + ((1 << 24) + (this.rgb[RGBA.RED] << 16) + (this.rgb[RGBA.GREEN] << 8) + this.rgb[RGBA.BLUE]).toString(16).slice(1);
	    };
	    Color.prototype.setHex = function (hex) {
	        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	        this.rgb[RGBA.RED] = parseInt(result[RGBA.RED], 16);
	        this.rgb[RGBA.GREEN] = parseInt(result[RGBA.GREEN], 16);
	        this.rgb[RGBA.BLUE] = parseInt(result[RGBA.BLUE], 16);
	    };
	    Color.prototype.toFloat = function (int) {
	        if (int === 0) {
	            return 0.0;
	        }
	        return int / 255;
	    };
	    Color.prototype.toInt = function (float) {
	        return float * 255;
	    };
	    Color.prototype.interpolate = function (c1, c2, scale) {
	        var color = new Color();
	        var col0 = c1.getRGBAFloat();
	        var col1 = c2.getRGBAFloat();
	        color.rgb[RGBA.RED] = this.toInt(col0[RGBA.RED] + (col1[RGBA.RED] - col0[RGBA.RED]) * scale);
	        color.rgb[RGBA.GREEN] = this.toInt(col0[RGBA.GREEN] + (col1[RGBA.GREEN] - col0[RGBA.GREEN]) * scale);
	        color.rgb[RGBA.BLUE] = this.toInt(col0[RGBA.BLUE] + (col1[RGBA.BLUE] - col0[RGBA.BLUE]) * scale);
	        color.alpha = this.toInt(col0[RGBA.ALPHA] + (col1[RGBA.ALPHA] - col0[RGBA.ALPHA]) * scale);
	        color.RGBtoHSL();
	        return color;
	    };
	    return Color;
	}());
	exports.Color = Color;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var surface_abstract_1 = __webpack_require__(21);
	var color_1 = __webpack_require__(19);
	var Surface2d = (function (_super) {
	    __extends(Surface2d, _super);
	    function Surface2d(width, height, id) {
	        _super.call(this);
	        this.width = 640;
	        this.height = 480;
	        this.id = 'canvas-2d';
	        this.clearColor = new color_1.Color(0, 0, 0, 1);
	        this.width = width;
	        this.height = height;
	        this.id = id;
	        this.createCanvas();
	    }
	    Surface2d.prototype.clear = function (color) {
	        if (color) {
	            this.clearColor = color;
	        }
	        var ctx = this.getContext();
	        ctx.clearRect(0, 0, this.width, this.height);
	        if (color) {
	            ctx.save();
	            ctx.fillStyle = color.getHex();
	            ctx.fillRect(0, 0, this.width, this.height);
	            ctx.restore();
	        }
	    };
	    Surface2d.prototype.getContext = function () {
	        return this.canvas.getContext('2d');
	    };
	    return Surface2d;
	}(surface_abstract_1.Surface));
	exports.Surface2d = Surface2d;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var gamesaw_1 = __webpack_require__(22);
	var Surface = (function () {
	    function Surface() {
	    }
	    Surface.prototype.createCanvas = function () {
	        var container = document.getElementById(gamesaw_1.CONTAINER_ID);
	        this.canvas = document.createElement('canvas');
	        this.canvas.setAttribute('id', this.id);
	        this.canvas.setAttribute('width', String(this.width));
	        this.canvas.setAttribute('height', String(this.height));
	        this.canvas.style.position = 'absolute';
	        container.appendChild(this.canvas);
	    };
	    ;
	    Surface.prototype.toDataUrl = function () {
	        return this.canvas.toDataURL('image/png');
	    };
	    return Surface;
	}());
	exports.Surface = Surface;


/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	exports.CONTAINER_ID = 'gamesaw-container';


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var surface_abstract_1 = __webpack_require__(21);
	var color_1 = __webpack_require__(19);
	var Surface3d = (function (_super) {
	    __extends(Surface3d, _super);
	    function Surface3d(width, height, id) {
	        _super.call(this);
	        this.clearColor = new color_1.Color(0, 0, 0, 1);
	        this.width = width;
	        this.height = height;
	        this.id = id;
	        this.createCanvas();
	        this.init();
	    }
	    Surface3d.prototype.init = function () {
	        this.gl = this.getContext();
	        var colorFloats = this.clearColor.getRGBAFloat();
	        this.gl.clearColor(colorFloats[0], colorFloats[1], colorFloats[2], colorFloats[3]);
	    };
	    Surface3d.prototype.clear = function (color) {
	        var gl = this.gl;
	        if (color) {
	            this.clearColor = color;
	            var colorFloats = this.clearColor.getRGBAFloat();
	            gl.clearColor(colorFloats[0], colorFloats[1], colorFloats[2], colorFloats[3]);
	        }
	        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	        gl.enable(gl.BLEND);
	        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	    };
	    Surface3d.prototype.getContext = function () {
	        return this.canvas.getContext('webgl', { preserveDrawingBuffer: true }) ||
	            this.canvas.getContext('experimental-webgl', { preserveDrawingBuffer: true });
	    };
	    return Surface3d;
	}(surface_abstract_1.Surface));
	exports.Surface3d = Surface3d;


/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";
	var Sprite = (function () {
	    function Sprite(url) {
	        this.loaded = false;
	        if (url) {
	            this.url = url;
	            this.load(this.url);
	        }
	    }
	    Sprite.prototype.load = function (url) {
	        var _this = this;
	        this.image = new Image();
	        this.image.src = url;
	        this.image.addEventListener('load', function (event) {
	            _this.loadHandler(event);
	        });
	        this.image.addEventListener('error', _this.errorHandler);
	    };
	    Sprite.prototype.render = function (context, x, y) {
	        context.drawImage(this.image, x, y);
	    };
	    Sprite.prototype.renderSize = function (context, x, y, width, height) {
	        context.drawImage(this.image, x, y, width, height);
	    };
	    Sprite.prototype.renderSegment = function (context, x, y, segmentX, segmentY, segmentWidth, segmentHeight) {
	        context.drawImage(this.image, segmentX, segmentY, segmentWidth, segmentHeight, x, y, this.width, this.height);
	    };
	    Sprite.prototype.renderSegmentSize = function (context, x, y, width, height, segmentX, segmentY, segmentWidth, segmentHeight) {
	        context.drawImage(this.image, segmentX, segmentY, segmentWidth, segmentHeight, x, y, width, height);
	    };
	    Sprite.prototype.errorHandler = function (event) {
	        throw new Error('Failed to load sprite.');
	    };
	    Sprite.prototype.loadHandler = function (event) {
	        this.loaded = true;
	        this.width = this.image.width;
	        this.height = this.image.height;
	    };
	    return Sprite;
	}());
	exports.Sprite = Sprite;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var angle_1 = __webpack_require__(26);
	exports.degreeToRadian = angle_1.degreeToRadian;
	exports.radianToDegree = angle_1.radianToDegree;
	var http_1 = __webpack_require__(27);
	exports.Http = http_1.Http;
	var utility_1 = __webpack_require__(6);
	exports.PI = utility_1.PI;
	exports.capitalize = utility_1.capitalize;
	var resource_manager_1 = __webpack_require__(28);
	exports.ResourceManager = resource_manager_1.ResourceManager;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var utility_1 = __webpack_require__(6);
	function degreeToRadian(degree) {
	    return degree * (utility_1.PI / 180);
	}
	exports.degreeToRadian = degreeToRadian;
	function radianToDegree(radian) {
	    return radian * (180 / utility_1.PI);
	}
	exports.radianToDegree = radianToDegree;


/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	var Http = (function () {
	    function Http(async) {
	        this.async = false;
	        if (async) {
	            this.async = async;
	        }
	    }
	    Http.prototype.get = function (url, callback) {
	        var xhr = this.createXHR();
	        if (xhr) {
	            xhr.open('GET', url, this.async);
	            xhr.onreadystatechange = function () {
	                if (xhr.readyState === 4 && xhr.status === 200) {
	                    callback(xhr);
	                }
	            };
	            xhr.send(null);
	        }
	    };
	    Http.prototype.createXHR = function () {
	        try {
	            return new XMLHttpRequest();
	        }
	        catch (err) { }
	        try {
	            return new ActiveXObject('Msxml2.XMLHTTP.6.0');
	        }
	        catch (err) { }
	        try {
	            return new ActiveXObject('Msxml2.XMLHTTP.3.0');
	        }
	        catch (err) { }
	        try {
	            return new ActiveXObject('Msxml2.XMLHTTP');
	        }
	        catch (err) { }
	        try {
	            return new ActiveXObject('Microsoft.XMLHTTP');
	        }
	        catch (err) { }
	        return null;
	    };
	    return Http;
	}());
	exports.Http = Http;


/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	var ResourceManager = (function () {
	    function ResourceManager() {
	        this.imageAssets = 0;
	        this.audioAssets = 0;
	        this.otherAssets = 0;
	        this.loadedImages = 0;
	        this.loadedAudio = 0;
	        this.loadedOther = 0;
	        this.failedImage = 0;
	        this.failedAudio = 0;
	        this.failedOther = 0;
	        if (ResourceManager._instance) {
	            throw new Error('Error: Instantiation failed, Use ResourceManager.getInstance() instead of new.');
	        }
	        ResourceManager._instance = this;
	    }
	    ResourceManager.getInstance = function () {
	        return ResourceManager._instance;
	    };
	    ResourceManager.prototype.getPercent = function () {
	        return Math.ceil((this.loadedImages + this.loadedAudio + this.loadedOther) /
	            (this.imageAssets + this.audioAssets + this.otherAssets));
	    };
	    ResourceManager.prototype.isReady = function () {
	        return (this.loadedImages + this.loadedAudio + this.loadedOther) ===
	            (this.imageAssets + this.audioAssets + this.otherAssets);
	    };
	    ResourceManager.prototype.addImage = function () {
	        this.imageAssets += 1;
	    };
	    ResourceManager.prototype.imageReady = function () {
	        this.loadedImages += 1;
	    };
	    ResourceManager.prototype.imageFailed = function () {
	        this.imageAssets -= 1;
	        this.failedImage += 1;
	    };
	    ResourceManager.prototype.addAudio = function () {
	        this.audioAssets += 1;
	    };
	    ResourceManager.prototype.audioReady = function () {
	        this.loadedAudio += 1;
	    };
	    ResourceManager.prototype.audioFailed = function () {
	        this.audioAssets -= 1;
	        this.failedAudio += 1;
	    };
	    ResourceManager.prototype.addOther = function () {
	        this.otherAssets += 1;
	    };
	    ResourceManager.prototype.otherReady = function () {
	        this.loadedOther += 1;
	    };
	    ResourceManager.prototype.otherFailed = function () {
	        this.otherAssets -= 1;
	        this.failedOther += 1;
	    };
	    ResourceManager._instance = new ResourceManager();
	    return ResourceManager;
	}());
	exports.ResourceManager = ResourceManager;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var mouse_1 = __webpack_require__(30);
	exports.Mouse = mouse_1.Mouse;
	var keyboard_1 = __webpack_require__(31);
	exports.Keyboard = keyboard_1.Keyboard;
	exports.Key = keyboard_1.Key;
	var touch_1 = __webpack_require__(32);
	exports.Touch = touch_1.Touch;
	var controller_1 = __webpack_require__(33);
	exports.Controller = controller_1.Controller;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var gamesaw_1 = __webpack_require__(22);
	var Mouse = (function () {
	    function Mouse() {
	        this.stopPropagation = false;
	        this.preventDefault = false;
	        if (Mouse.instance) {
	            throw new Error('Error: Instantiation failed, Use Mouse.getInstance() instead of new.');
	        }
	        Mouse.instance = this;
	        this.button = [false, false, false];
	        this.click = [false, false, false];
	    }
	    Mouse.prototype.init = function () {
	        var _this = this;
	        this.container = document.getElementById(gamesaw_1.CONTAINER_ID);
	        this.container.addEventListener('click', function (event) {
	            _this.handleClick(event);
	        });
	        this.container.addEventListener('mousemove', function (event) {
	            _this.calculateMousePosition(event);
	        });
	        this.container.addEventListener('mousedown', function (event) {
	            _this.handleMouseDown(event);
	        });
	        this.container.addEventListener('mouseup', function (event) {
	            _this.handleMouseUp(event);
	        });
	    };
	    Mouse.getInstance = function () {
	        return Mouse.instance;
	    };
	    Mouse.prototype.clearClicks = function () {
	        this.click = [false, false, false];
	    };
	    Mouse.prototype.handleClick = function (event) {
	        if (this.preventDefault) {
	            event.preventDefault();
	        }
	        if (this.stopPropagation) {
	            event.stopPropagation();
	        }
	        this.click[event.button] = true;
	    };
	    Mouse.prototype.handleMouseDown = function (event) {
	        if (this.preventDefault) {
	            event.preventDefault();
	        }
	        if (this.stopPropagation) {
	            event.stopPropagation();
	        }
	        this.button[event.button] = true;
	    };
	    Mouse.prototype.handleMouseUp = function (event) {
	        if (this.preventDefault) {
	            event.preventDefault();
	        }
	        if (this.stopPropagation) {
	            event.stopPropagation();
	        }
	        this.button[event.button] = false;
	    };
	    Mouse.prototype.calculateMousePosition = function (event) {
	        if (event.pageX && event.pageY) {
	            this.x = event.pageX;
	            this.y = event.pageY;
	        }
	        else {
	            this.x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
	            this.y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	        }
	        this.x -= this.container.offsetLeft;
	        this.y -= this.container.offsetTop;
	    };
	    Mouse.instance = new Mouse();
	    return Mouse;
	}());
	exports.Mouse = Mouse;


/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";
	(function (Key) {
	    Key[Key['BACKSPACE'] = 8] = 'BACKSPACE';
	    Key[Key['TAB'] = 9] = 'TAB';
	    Key[Key['ENTER'] = 13] = 'ENTER';
	    Key[Key['SHIFT'] = 16] = 'SHIFT';
	    Key[Key['CTRL'] = 17] = 'CTRL';
	    Key[Key['ALT'] = 18] = 'ALT';
	    Key[Key['PAUSE'] = 19] = 'PAUSE';
	    Key[Key['CAPS'] = 20] = 'CAPS';
	    Key[Key['ESCAPE'] = 27] = 'ESCAPE';
	    Key[Key['PAGEUP'] = 33] = 'PAGEUP';
	    Key[Key['PAGEDOWN'] = 34] = 'PAGEDOWN';
	    Key[Key['END'] = 35] = 'END';
	    Key[Key['HOME'] = 36] = 'HOME';
	    Key[Key['LEFT'] = 37] = 'LEFT';
	    Key[Key['UP'] = 38] = 'UP';
	    Key[Key['RIGHT'] = 39] = 'RIGHT';
	    Key[Key['DOWN'] = 40] = 'DOWN';
	    Key[Key['INSERT'] = 45] = 'INSERT';
	    Key[Key['DELETE'] = 46] = 'DELETE';
	    Key[Key['ZERO'] = 48] = 'ZERO';
	    Key[Key['ONE'] = 49] = 'ONE';
	    Key[Key['TWO'] = 50] = 'TWO';
	    Key[Key['THREE'] = 51] = 'THREE';
	    Key[Key['FOUR'] = 52] = 'FOUR';
	    Key[Key['FIVE'] = 53] = 'FIVE';
	    Key[Key['SIX'] = 54] = 'SIX';
	    Key[Key['SEVEN'] = 55] = 'SEVEN';
	    Key[Key['EIGHT'] = 56] = 'EIGHT';
	    Key[Key['NINE'] = 57] = 'NINE';
	    Key[Key['A'] = 65] = 'A';
	    Key[Key['B'] = 66] = 'B';
	    Key[Key['C'] = 67] = 'C';
	    Key[Key['D'] = 68] = 'D';
	    Key[Key['E'] = 69] = 'E';
	    Key[Key['F'] = 70] = 'F';
	    Key[Key['G'] = 71] = 'G';
	    Key[Key['H'] = 72] = 'H';
	    Key[Key['I'] = 73] = 'I';
	    Key[Key['J'] = 74] = 'J';
	    Key[Key['K'] = 75] = 'K';
	    Key[Key['L'] = 76] = 'L';
	    Key[Key['M'] = 77] = 'M';
	    Key[Key['N'] = 78] = 'N';
	    Key[Key['O'] = 79] = 'O';
	    Key[Key['P'] = 80] = 'P';
	    Key[Key['Q'] = 81] = 'Q';
	    Key[Key['R'] = 82] = 'R';
	    Key[Key['S'] = 83] = 'S';
	    Key[Key['T'] = 84] = 'T';
	    Key[Key['U'] = 85] = 'U';
	    Key[Key['V'] = 86] = 'V';
	    Key[Key['W'] = 87] = 'W';
	    Key[Key['Y'] = 88] = 'Y';
	    Key[Key['X'] = 89] = 'X';
	    Key[Key['Z'] = 90] = 'Z';
	    Key[Key['LEFTSUPER'] = 91] = 'LEFTSUPER';
	    Key[Key['RIGHTSUPER'] = 92] = 'RIGHTSUPER';
	    Key[Key['SELECT'] = 93] = 'SELECT';
	    Key[Key['NUM0'] = 96] = 'NUM0';
	    Key[Key['NUM1'] = 97] = 'NUM1';
	    Key[Key['NUM2'] = 98] = 'NUM2';
	    Key[Key['NUM3'] = 99] = 'NUM3';
	    Key[Key['NUM4'] = 100] = 'NUM4';
	    Key[Key['NUM5'] = 101] = 'NUM5';
	    Key[Key['NUM6'] = 102] = 'NUM6';
	    Key[Key['NUM7'] = 103] = 'NUM7';
	    Key[Key['NUM8'] = 104] = 'NUM8';
	    Key[Key['NUM9'] = 105] = 'NUM9';
	    Key[Key['MULTIPLY'] = 106] = 'MULTIPLY';
	    Key[Key['ADD'] = 107] = 'ADD';
	    Key[Key['SUBSTRACT'] = 108] = 'SUBSTRACT';
	    Key[Key['DECIMAL'] = 110] = 'DECIMAL';
	    Key[Key['DIVIDE'] = 111] = 'DIVIDE';
	    Key[Key['F1'] = 112] = 'F1';
	    Key[Key['F2'] = 113] = 'F2';
	    Key[Key['F3'] = 114] = 'F3';
	    Key[Key['F4'] = 115] = 'F4';
	    Key[Key['F5'] = 116] = 'F5';
	    Key[Key['F7'] = 118] = 'F7';
	    Key[Key['F8'] = 119] = 'F8';
	    Key[Key['F9'] = 120] = 'F9';
	    Key[Key['F10'] = 121] = 'F10';
	    Key[Key['F11'] = 122] = 'F11';
	    Key[Key['F12'] = 123] = 'F12';
	    Key[Key['NUMLOCK'] = 144] = 'NUMLOCK';
	    Key[Key['SCROLLLOCK'] = 145] = 'SCROLLLOCK';
	    Key[Key['SEMICOLON'] = 186] = 'SEMICOLON';
	    Key[Key['EQUAL'] = 187] = 'EQUAL';
	    Key[Key['COMMA'] = 188] = 'COMMA';
	    Key[Key['DASH'] = 189] = 'DASH';
	    Key[Key['PERIOD'] = 190] = 'PERIOD';
	    Key[Key['FORWARDSLASH'] = 191] = 'FORWARDSLASH';
	    Key[Key['GRAVEACCENT'] = 192] = 'GRAVEACCENT';
	    Key[Key['OPENBRACKET'] = 219] = 'OPENBRACKET';
	    Key[Key['BACKSLASH'] = 220] = 'BACKSLASH';
	    Key[Key['CLOSEBRAKET'] = 221] = 'CLOSEBRAKET';
	    Key[Key['SINGLEQUOTE'] = 222] = 'SINGLEQUOTE';
	})(exports.Key || (exports.Key = {}));
	var Key = exports.Key;
	;
	var Keyboard = (function () {
	    function Keyboard() {
	        this.keys = [];
	        this.preventDefault = false;
	        this.stopPropagation = false;
	        this.keyLogger = false;
	        if (Keyboard.instance) {
	            throw new Error('Error: Instantiation failed, Use Keyboard.getInstance() instead of new.');
	        }
	        Keyboard.instance = this;
	        var _this = this;
	        for (var i = 0; i < 256; i++) {
	            this.keys[i] = false;
	        }
	        window.addEventListener('keydown', function (event) {
	            _this.handleKeydown(event);
	        });
	        window.addEventListener('keyup', function (event) {
	            _this.handleKeyup(event);
	        });
	    }
	    Keyboard.getInstance = function () {
	        return Keyboard.instance;
	    };
	    Keyboard.prototype.clearKeys = function () {
	        for (var key in this.keys) {
	            this.keys[key] = false;
	        }
	    };
	    Keyboard.prototype.handleKeydown = function (event) {
	        if (this.preventDefault) {
	            event.preventDefault();
	        }
	        if (this.stopPropagation) {
	            event.stopPropagation();
	        }
	        this.keys[event.keyCode] = true;
	    };
	    Keyboard.prototype.handleKeyup = function (event) {
	        if (this.preventDefault) {
	            event.preventDefault();
	        }
	        if (this.stopPropagation) {
	            event.stopPropagation();
	        }
	        this.keys[event.keyCode] = false;
	    };
	    Keyboard.instance = new Keyboard();
	    return Keyboard;
	}());
	exports.Keyboard = Keyboard;


/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";
	var Touch = (function () {
	    function Touch() {
	    }
	    return Touch;
	}());
	exports.Touch = Touch;


/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";
	var Controller = (function () {
	    function Controller() {
	        this.index = 0;
	        this.connected = false;
	        var _this = this;
	        if (Controller.instance) {
	            throw new Error('Error: Instantiation failed, Use Mouse.getInstance() instead of new.');
	        }
	        Controller.instance = this;
	        var gamepads = navigator.getGamepads();
	        if (gamepads[0] && gamepads[0].connected) {
	            this.connected = true;
	        }
	        window.addEventListener('gamepadconnected', function (event) {
	            console.log('Connecting gamepad ' + event.gamepad.id);
	            _this.setupController(event);
	        });
	    }
	    Controller.getInstance = function () {
	        return Controller.instance;
	    };
	    Controller.prototype.setupController = function (controller) {
	        this.buttons = controller.gamepad.buttons;
	        this.axes = controller.gamepad.axes;
	        this.id = controller.gamepad.id;
	        this.index = controller.gamepad.index;
	        this.mapping = controller.gamepad.mapping;
	        this.connected = controller.gamepad.connected;
	    };
	    Controller.prototype.update = function (delta) {
	        var gamepad = navigator.getGamepads()[this.index];
	        this.buttons = gamepad.buttons;
	        this.axes = gamepad.axes;
	    };
	    Controller.instance = new Controller();
	    return Controller;
	}());
	exports.Controller = Controller;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Render2d = __webpack_require__(35);
	exports.Render2d = Render2d;
	var Shader = __webpack_require__(40);
	exports.Shader = Shader;
	var Particle = __webpack_require__(42);
	exports.Particle = Particle;
	var Font = __webpack_require__(47);
	exports.Font = Font;
	var Tilemap = __webpack_require__(52);
	exports.Tilemap = Tilemap;
	var FX = __webpack_require__(57);
	exports.FX = FX;
	var texture_1 = __webpack_require__(49);
	exports.Texture = texture_1.Texture;
	var sprite_1 = __webpack_require__(60);
	exports.Sprite = sprite_1.Sprite;
	var animated_sprite_1 = __webpack_require__(61);
	exports.AnimatedSprite = animated_sprite_1.AnimatedSprite;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var renderer2d_1 = __webpack_require__(36);
	exports.Renderer2d = renderer2d_1.Renderer2d;
	var render_call_1 = __webpack_require__(38);
	exports.RenderCall = render_call_1.RenderCall;
	var framebuffer_1 = __webpack_require__(39);
	exports.FrameBuffer = framebuffer_1.FrameBuffer;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var program_1 = __webpack_require__(37);
	var render_call_1 = __webpack_require__(38);
	var vertexShader = 'attribute vec2 a_position;\n' +
	    'attribute vec2 a_texCoord;\n' +
	    'varying vec2 v_texCoord;\n' +
	    'uniform vec2 u_resolution;\n' +
	    'uniform int u_flip;\n' +
	    'void main() {\n' +
	    '	vec2 zeroToOne = a_position / u_resolution;\n' +
	    '	vec2 zeroToTwo = zeroToOne * 2.0;\n' +
	    '	vec2 clipSpace = zeroToTwo - 1.0;\n' +
	    '   if (u_flip == 1) {\n' +
	    '       gl_Position = vec4(clipSpace * vec2(1, 1), 0, 1);\n' +
	    '	} else {\n' +
	    '       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);\n' +
	    '   }\n' +
	    '	v_texCoord = a_texCoord;\n' +
	    '}\n';
	var fragmentShader = 'precision mediump float;\n' +
	    'uniform sampler2D u_image;\n' +
	    'varying vec2 v_texCoord;\n\n' +
	    'void main() {\n' +
	    '	vec4 baseTexture = texture2D(u_image, v_texCoord);\n' +
	    '	gl_FragColor = baseTexture;\n' +
	    '}\n';
	var Renderer2d = (function () {
	    function Renderer2d(gl) {
	        this.width = 800;
	        this.height = 600;
	        this.flipY = 0;
	        this.renderCalls = [];
	        this.gl = gl;
	        this.program = new program_1.Program(this.gl);
	        this.program.loadShader(program_1.ShaderType.VERTEX, vertexShader);
	        this.program.loadShader(program_1.ShaderType.FRAGMENT, fragmentShader);
	        this.program.createProgram();
	        this.init();
	    }
	    Renderer2d.prototype.init = function () {
	        var gl = this.gl;
	        this.resolution = gl.getUniformLocation(this.program.program, 'u_resolution');
	        this.flip = gl.getUniformLocation(this.program.program, 'u_flip');
	        this.position = gl.getAttribLocation(this.program.program, 'a_position');
	        this.textureCoordinates = gl.getAttribLocation(this.program.program, 'a_texCoord');
	        this.vertexBuffer = gl.createBuffer();
	        this.indexBuffer = gl.createBuffer();
	        this.texCoordBuffer = gl.createBuffer();
	    };
	    Renderer2d.prototype.addCall = function (renderCall) {
	        var found = false;
	        for (var i in this.renderCalls) {
	            if (this.renderCalls[i].texture === renderCall.texture) {
	                this.renderCalls[i].add(renderCall);
	                found = true;
	                break;
	            }
	        }
	        if (!found) {
	            this.renderCalls.push(new render_call_1.RenderCall());
	            var i = this.renderCalls.length - 1;
	            this.renderCalls[i].texture = renderCall.texture;
	            this.renderCalls[i].add(renderCall);
	        }
	    };
	    Renderer2d.prototype.clear = function () {
	        this.renderCalls = [];
	    };
	    Renderer2d.prototype.execute = function () {
	        this.flush();
	        this.clear();
	    };
	    Renderer2d.prototype.flush = function () {
	        var gl = this.gl;
	        gl.useProgram(this.program.program);
	        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	        gl.cullFace(gl.FRONT_AND_BACK);
	        gl.uniform2f(this.resolution, this.width, this.height);
	        gl.uniform1i(this.flip, this.flipY);
	        for (var call in this.renderCalls) {
	            gl.bindTexture(gl.TEXTURE_2D, this.renderCalls[call].texture);
	            gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
	            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.renderCalls[call].vertices), gl.STATIC_DRAW);
	            gl.enableVertexAttribArray(this.position);
	            gl.vertexAttribPointer(this.position, 2, gl.FLOAT, false, 0, 0);
	            gl.bindBuffer(gl.ARRAY_BUFFER, this.texCoordBuffer);
	            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.renderCalls[call].uvs), gl.STATIC_DRAW);
	            gl.enableVertexAttribArray(this.textureCoordinates);
	            gl.vertexAttribPointer(this.textureCoordinates, 2, gl.FLOAT, false, 0, 0);
	            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
	            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.renderCalls[call].indices), gl.STATIC_DRAW);
	            gl.drawElements(gl.TRIANGLES, this.renderCalls[call].numIndices, gl.UNSIGNED_SHORT, 0);
	        }
	    };
	    return Renderer2d;
	}());
	exports.Renderer2d = Renderer2d;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var http_1 = __webpack_require__(27);
	var resource_manager_1 = __webpack_require__(28);
	(function (ShaderType) {
	    ShaderType[ShaderType["VERTEX"] = 0] = "VERTEX";
	    ShaderType[ShaderType["FRAGMENT"] = 1] = "FRAGMENT";
	})(exports.ShaderType || (exports.ShaderType = {}));
	var ShaderType = exports.ShaderType;
	var Program = (function () {
	    function Program(gl, fragmentShaderUrl, vertexShaderUrl) {
	        this.gl = gl;
	        this.http = new http_1.Http(false);
	        this.resourceManager = resource_manager_1.ResourceManager.getInstance();
	        if (fragmentShaderUrl && vertexShaderUrl) {
	            this.initShader(fragmentShaderUrl, vertexShaderUrl);
	        }
	    }
	    Program.prototype.getProgram = function () {
	        return this.program;
	    };
	    Program.prototype.loadShader = function (type, shader) {
	        if (type === ShaderType.VERTEX) {
	            this.vertexShader = this.compileShader(type, shader);
	        }
	        else {
	            this.fragmentShader = this.compileShader(type, shader);
	        }
	    };
	    Program.prototype.compileShader = function (type, shaderSrc) {
	        var shader;
	        if (type === ShaderType.VERTEX) {
	            shader = this.gl.createShader(this.gl.VERTEX_SHADER);
	        }
	        else if (type === ShaderType.FRAGMENT) {
	            shader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
	        }
	        else {
	            throw new Error('No valid shader type specified.');
	        }
	        this.gl.shaderSource(shader, shaderSrc);
	        this.gl.compileShader(shader);
	        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
	            throw new Error(this.gl.getShaderInfoLog(shader));
	        }
	        return shader;
	    };
	    Program.prototype.createProgram = function () {
	        this.program = this.gl.createProgram();
	        this.gl.attachShader(this.program, this.vertexShader);
	        this.gl.attachShader(this.program, this.fragmentShader);
	        this.gl.linkProgram(this.program);
	        if (!this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) {
	            throw new Error('Unable to initialize the shader program.');
	        }
	        this.gl.useProgram(this.program);
	    };
	    Program.prototype.initShader = function (fsUrl, vsUrl) {
	        var _this = this;
	        this.resourceManager.addOther();
	        this.http.get(fsUrl, function (data) {
	            _this.loadShader(ShaderType.FRAGMENT, data.responseText);
	        });
	        this.http.get(vsUrl, function (data) {
	            _this.loadShader(ShaderType.VERTEX, data.responseText);
	        });
	        this.resourceManager.otherReady();
	        this.createProgram();
	    };
	    return Program;
	}());
	exports.Program = Program;


/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";
	var RenderCall = (function () {
	    function RenderCall() {
	        this.flush();
	    }
	    RenderCall.prototype.add = function (renderCall) {
	        var _this = this;
	        this.vertices = this.vertices.concat(renderCall.vertices);
	        this.uvs = this.uvs.concat(renderCall.uvs);
	        renderCall.indices.forEach(function (i) {
	            _this.indices.push(i + _this.index);
	        });
	        this.index += this.findMaxIndex(renderCall.indices);
	        this.numIndices += renderCall.numIndices;
	    };
	    RenderCall.prototype.findMaxIndex = function (indices) {
	        var max = 0;
	        indices.forEach(function (i) {
	            if (i > max) {
	                max = i;
	            }
	        });
	        max += 1;
	        return max;
	    };
	    RenderCall.prototype.flush = function () {
	        this.vertices = [];
	        this.indices = [];
	        this.uvs = [];
	        this.index = 0;
	        this.numIndices = 0;
	    };
	    RenderCall.prototype.setTexture = function (texture) {
	        this.texture = texture;
	    };
	    return RenderCall;
	}());
	exports.RenderCall = RenderCall;


/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";
	var FrameBuffer = (function () {
	    function FrameBuffer(gl, width, height) {
	        this.gl = gl;
	        this.width = width;
	        this.height = height;
	        this.init();
	    }
	    FrameBuffer.prototype.init = function () {
	        var gl = this.gl;
	        this.fbo = gl.createFramebuffer();
	        if (!this.fbo) {
	            throw new Error('Failed to create FBO.');
	        }
	        this.texture = gl.createTexture();
	        if (!this.texture) {
	            throw new Error('Failed to create FBO texture.');
	        }
	        gl.bindTexture(gl.TEXTURE_2D, this.texture);
	        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.width, this.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	        var depthBuffer = gl.createRenderbuffer();
	        if (!depthBuffer) {
	            throw new Error('Failed to create depth buffer.');
	        }
	        gl.bindRenderbuffer(gl.RENDERBUFFER, depthBuffer);
	        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, this.width, this.height);
	        gl.bindFramebuffer(gl.FRAMEBUFFER, this.fbo);
	        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture, 0);
	        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, depthBuffer);
	        var err = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
	        if (gl.FRAMEBUFFER_COMPLETE !== err) {
	            throw new Error('Framebuffer object is incomplete: ' + err.toString());
	        }
	        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	        gl.bindTexture(gl.TEXTURE_2D, null);
	        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
	    };
	    return FrameBuffer;
	}());
	exports.FrameBuffer = FrameBuffer;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var program_1 = __webpack_require__(37);
	exports.Program = program_1.Program;
	var shader_manager_1 = __webpack_require__(41);
	exports.ShaderManager = shader_manager_1.ShaderManager;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var program_1 = __webpack_require__(37);
	var ShaderManager = (function () {
	    function ShaderManager(gl) {
	        this.programs = {};
	        this.gl = gl;
	    }
	    ShaderManager.prototype.createProgram = function (fragmentShaderUrl, vertexShaderUrl, id) {
	        this.programs[id] = new program_1.Program(this.gl, fragmentShaderUrl, vertexShaderUrl);
	    };
	    ShaderManager.prototype.getProgram = function (id) {
	        return this.programs[id].getProgram();
	    };
	    ShaderManager.prototype.useProgram = function (id) {
	        this.gl.useProgram(this.programs[id].getProgram());
	    };
	    return ShaderManager;
	}());
	exports.ShaderManager = ShaderManager;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var particle_1 = __webpack_require__(43);
	exports.Particle = particle_1.Particle;
	var particle_emitter_1 = __webpack_require__(44);
	exports.ParticleEmitter = particle_emitter_1.ParticleEmitter;
	var particle_system_1 = __webpack_require__(45);
	exports.ParticleSystem = particle_system_1.ParticleSystem;
	var particle_renderer_1 = __webpack_require__(46);
	exports.ParticleRenderer = particle_renderer_1.ParticleRenderer;


/***/ },
/* 43 */
/***/ function(module, exports) {

	"use strict";
	var Particle = (function () {
	    function Particle(position, direction, size, velocity, life, alpha) {
	        this.pos = position;
	        this.dir = direction;
	        this.size = size;
	        this.vel = velocity;
	        this.life = life;
	        this.alpha = alpha;
	    }
	    Particle.prototype.update = function (gravity, wind, growth, delta) {
	        this.life -= delta;
	        this.size += growth;
	        this.dir.y += gravity;
	        this.dir.x += wind;
	        this.pos.x += (this.dir.x * this.vel);
	        this.pos.y += (this.dir.y * this.vel);
	    };
	    Particle.prototype.isDead = function () {
	        return this.life < 0;
	    };
	    return Particle;
	}());
	exports.Particle = Particle;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var particle_1 = __webpack_require__(43);
	var index_1 = __webpack_require__(3);
	var color_1 = __webpack_require__(19);
	var http_1 = __webpack_require__(27);
	var ParticleEmitter = (function () {
	    function ParticleEmitter(gl) {
	        this.particles = [];
	        this.vertices = [];
	        this.sizes = [];
	        this.constant = false;
	        this.color = new color_1.Color(240, 175, 25, 0.4);
	        this.gl = gl;
	        this.blendSrc = gl.SRC_ALPHA;
	        this.blendDst = gl.ONE;
	        this.http = new http_1.Http(false);
	    }
	    ParticleEmitter.prototype.setup = function (texture, position, maxDirection, minDirection, maxVelocity, minVelocity, maxSize, minSize, maxLife, minLife, growth, gravity, wind, angularVelocity, lifeCycle, particlesPerSecond, particlesAtStart, constant, color) {
	        this.texture = texture;
	        this.pos = position;
	        this.maxDir = maxDirection;
	        this.minDir = minDirection;
	        this.maxVel = maxVelocity;
	        this.minVel = minVelocity;
	        this.maxSize = maxSize;
	        this.minSize = minSize;
	        this.maxLife = maxLife;
	        this.minLife = minLife;
	        this.growth = growth;
	        this.gravity = gravity;
	        this.wind = wind;
	        this.angularVel = angularVelocity;
	        this.lifeCycle = lifeCycle;
	        this.particlesPerSecond = particlesPerSecond;
	        this.particlesAtStart = particlesAtStart;
	        this.constant = constant;
	        this.color = color;
	    };
	    ParticleEmitter.prototype.load = function (url) {
	        this.http.get(url, function (data) {
	            var emitter = JSON.parse(data.responseText);
	        });
	    };
	    ParticleEmitter.prototype.toJson = function () {
	        return '';
	    };
	    ParticleEmitter.prototype.update = function (delta) {
	        this.vertices = [];
	        this.sizes = [];
	        if (this.constant) {
	            var numParticles = Math.ceil((delta / 1000) * this.particlesPerSecond);
	            for (var i = 0; i < numParticles; i += 1) {
	                this.particles.push(this.addParticle());
	            }
	        }
	        else {
	            this.currentLife -= delta;
	            if (this.currentLife < 0) {
	                for (var i = 0; i < this.particlesAtStart; i += 1) {
	                    this.particles.push(this.addParticle());
	                }
	                this.currentLife = this.lifeCycle;
	            }
	        }
	        var length = this.particles.length;
	        for (var i = 0; i < length; i += 1) {
	            this.particles[i].update(this.gravity, this.wind, this.growth, delta);
	            if (this.particles[i].isDead()) {
	                this.particles.splice(i, 1);
	                length -= 1;
	            }
	            else {
	                this.vertices.push(this.particles[i].pos.x);
	                this.vertices.push(this.particles[i].pos.y);
	                this.sizes.push(this.particles[i].size);
	            }
	        }
	    };
	    ParticleEmitter.prototype.addParticle = function () {
	        return new particle_1.Particle(new index_1.Point(this.pos.x, this.pos.y), new index_1.Point(this.randomMinMax(this.minDir.x, this.maxDir.x), this.randomMinMax(this.minDir.y, this.maxDir.y)), this.randomMinMax(this.minSize, this.maxSize), this.randomMinMax(this.minVel, this.maxVel), this.randomMinMax(this.minLife, this.maxLife), this.color.getAlpha());
	    };
	    ParticleEmitter.prototype.randomMinMax = function (min, max) {
	        return (Math.random() * (max - min)) + min;
	    };
	    return ParticleEmitter;
	}());
	exports.ParticleEmitter = ParticleEmitter;


/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";
	var ParticleSystem = (function () {
	    function ParticleSystem() {
	    }
	    return ParticleSystem;
	}());
	exports.ParticleSystem = ParticleSystem;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var program_1 = __webpack_require__(37);
	var vertexShader = 'attribute vec2 a_position;\n' +
	    'attribute float a_pointSize;\n' +
	    'uniform vec2 u_resolution;\n' +
	    'void main() {\n' +
	    '	vec2 zeroToOne = a_position / u_resolution;\n' +
	    '	vec2 zeroToTwo = zeroToOne * 2.0;\n' +
	    '	vec2 clipSpace = zeroToTwo - 1.0;\n' +
	    '	gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);\n' +
	    '	gl_PointSize = a_pointSize;\n' +
	    '}\n';
	var fragmentShader = 'precision mediump float;\n' +
	    'uniform sampler2D u_image;\n' +
	    'uniform vec4 u_color;\n' +
	    'void main() {\n' +
	    '	vec4 baseTexture = texture2D(u_image, gl_PointCoord);\n' +
	    '	vec4 baseColor = u_color;\n' +
	    '	float alpha = u_color.w;\n' +
	    '	gl_FragColor = baseTexture * u_color;\n' +
	    '}\n';
	var ParticleRenderer = (function () {
	    function ParticleRenderer(gl) {
	        this.width = 800;
	        this.height = 600;
	        this.gl = gl;
	        this.program = new program_1.Program(this.gl);
	        this.program.loadShader(program_1.ShaderType.VERTEX, vertexShader);
	        this.program.loadShader(program_1.ShaderType.FRAGMENT, fragmentShader);
	        this.program.createProgram();
	        this.init();
	    }
	    ParticleRenderer.prototype.init = function () {
	        var gl = this.gl;
	        this.resolution = gl.getUniformLocation(this.program.program, 'u_resolution');
	        this.colorLocation = gl.getUniformLocation(this.program.program, 'u_color');
	        this.pointSize = gl.getAttribLocation(this.program.program, 'a_pointSize');
	        this.position = gl.getAttribLocation(this.program.program, 'a_position');
	        this.vertexBuffer = gl.createBuffer();
	        this.sizeBuffer = gl.createBuffer();
	    };
	    ParticleRenderer.prototype.render = function (emitter) {
	        var gl = this.gl;
	        gl.useProgram(this.program.program);
	        gl.enable(gl.BLEND);
	        gl.blendFunc(emitter.blendSrc, emitter.blendDst);
	        gl.uniform2f(this.resolution, this.width, this.height);
	        gl.bindTexture(gl.TEXTURE_2D, emitter.texture.texture);
	        var col = emitter.color.getRGBAFloat();
	        gl.uniform4f(this.colorLocation, col[0], col[1], col[2], col[3]);
	        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
	        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(emitter.vertices), gl.STATIC_DRAW);
	        gl.enableVertexAttribArray(this.position);
	        gl.vertexAttribPointer(this.position, 2, gl.FLOAT, false, 0, 0);
	        gl.bindBuffer(gl.ARRAY_BUFFER, this.sizeBuffer);
	        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(emitter.sizes), gl.STATIC_DRAW);
	        gl.enableVertexAttribArray(this.pointSize);
	        gl.vertexAttribPointer(this.pointSize, 1, gl.FLOAT, false, 0, 0);
	        gl.drawArrays(gl.POINTS, 0, emitter.vertices.length / 2);
	        gl.disableVertexAttribArray(this.position);
	        gl.disableVertexAttribArray(this.pointSize);
	    };
	    return ParticleRenderer;
	}());
	exports.ParticleRenderer = ParticleRenderer;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var font_1 = __webpack_require__(48);
	exports.Font = font_1.Font;
	var bitmap_font_1 = __webpack_require__(50);
	exports.BitmapFont = bitmap_font_1.BitmapFont;
	var font_renderer_1 = __webpack_require__(51);
	exports.FontRenderer = font_renderer_1.FontRenderer;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var texture_1 = __webpack_require__(49);
	var color_1 = __webpack_require__(19);
	var http_1 = __webpack_require__(27);
	var resource_manager_1 = __webpack_require__(28);
	var render_call_1 = __webpack_require__(38);
	var bitmap_font_1 = __webpack_require__(50);
	var Align;
	(function (Align) {
	    Align[Align["LEFT"] = 0] = "LEFT";
	    Align[Align["CENTER"] = 1] = "CENTER";
	    Align[Align["RIGHT"] = 2] = "RIGHT";
	})(Align || (Align = {}));
	var Font = (function () {
	    function Font(gl, configUrl) {
	        this.texturePage = {};
	        this.font = new bitmap_font_1.BitmapFont();
	        this.base = 0;
	        this.lineHeight = 0;
	        this.color = new color_1.Color(255, 255, 255, 1.0);
	        this.align = 0 /* LEFT */;
	        this.gl = gl;
	        this.http = new http_1.Http(false);
	        this.resourceManager = resource_manager_1.ResourceManager.getInstance();
	        if (configUrl) {
	            this.configUrl = configUrl;
	            this.load(configUrl);
	        }
	    }
	    Font.prototype.load = function (configUrl) {
	        var _this = this;
	        this.resourceManager.addOther();
	        this.http.get(configUrl, function (data) {
	            _this.parseConfig(data.responseXML);
	        });
	    };
	    Font.prototype.parseConfig = function (xmlConfig) {
	        var pages = xmlConfig.getElementsByTagName('page');
	        var char = xmlConfig.getElementsByTagName('char');
	        var common = xmlConfig.getElementsByTagName('common')[0];
	        var info = xmlConfig.getElementsByTagName('info')[0];
	        this.font.glyphCount = +xmlConfig.getElementsByTagName('chars')[0].getAttribute('count');
	        // Info data
	        this.font.info = {
	            face: info.getAttribute('face'),
	            size: +info.getAttribute('size'),
	            italic: +info.getAttribute('italic'),
	            charset: info.getAttribute('charset'),
	            unicode: +info.getAttribute('unicode'),
	            bold: +info.getAttribute('bold'),
	            stretchHeight: +info.getAttribute('stretchH'),
	            smooth: +info.getAttribute('smooth'),
	            antiAliasing: +info.getAttribute('aa'),
	            padding: info.getAttribute('padding').split(',').map(function (src) { return +src; }),
	            spacing: info.getAttribute('spacing').split(',').map(function (src) { return +src; }),
	            outline: +info.getAttribute('outline')
	        };
	        // Common data
	        this.font.common = {
	            lineHeight: +common.getAttribute('lineHeight'),
	            base: +common.getAttribute('base'),
	            scaleWidth: +common.getAttribute('scaleW'),
	            scaleHeight: +common.getAttribute('scaleH'),
	            pages: +common.getAttribute('pages'),
	            packed: +common.getAttribute('packed'),
	            alphaChannel: +common.getAttribute('alphaChnl'),
	            redChannel: +common.getAttribute('redChnl'),
	            greenChannel: +common.getAttribute('greenChnl'),
	            blueChannel: +common.getAttribute('blueChnl')
	        };
	        for (var i = 0; i < pages.length; i += 1) {
	            var file = pages[i].getAttribute('file');
	            var id = +pages[i].getAttribute('id');
	            this.font.pages[id] = {
	                file: file
	            };
	            this.texturePage[id] = new texture_1.Texture(this.gl, file);
	        }
	        for (var i = 0; i < char.length; i += 1) {
	            var id = +char[i].getAttribute('id');
	            this.font.glyphs[id] = {
	                x: +char[i].getAttribute('x'),
	                y: +char[i].getAttribute('y'),
	                width: +char[i].getAttribute('width'),
	                height: +char[i].getAttribute('height'),
	                xOffset: +char[i].getAttribute('xoffset'),
	                yOffset: +char[i].getAttribute('yoffset'),
	                xAdvance: +char[i].getAttribute('xadvance'),
	                page: +char[i].getAttribute('page'),
	                channel: +char[i].getAttribute('chnl')
	            };
	        }
	        this.resourceManager.otherReady();
	    };
	    Font.prototype.drawString = function (renderer, str, x, y) {
	        var currentX = x;
	        var currentY = 0;
	        if (this.align === 1 /* CENTER */) {
	            var stringWidth = this.calculateWidth(str);
	            currentX = x - Math.floor(stringWidth / 2);
	        }
	        else if (this.align === 2 /* RIGHT */) {
	            var stringWidth = this.calculateWidth(str);
	            currentX = x - stringWidth;
	        }
	        for (var i = 0; i < str.length; i += 1) {
	            var id = str.charCodeAt(i);
	            if (this.font.glyphs[id]) {
	                var glyph = this.font.glyphs[id];
	                this.renderGlyph(renderer, currentX + glyph.xOffset, y + glyph.yOffset, glyph);
	                currentX += glyph.xAdvance;
	            }
	        }
	    };
	    Font.prototype.renderGlyph = function (renderer, x, y, glyph) {
	        var uvs = [];
	        uvs[0] = glyph.x / this.font.common.scaleWidth;
	        uvs[1] = glyph.y / this.font.common.scaleHeight;
	        uvs[2] = (glyph.x + glyph.width) / this.font.common.scaleWidth;
	        uvs[3] = (glyph.y + glyph.height) / this.font.common.scaleHeight;
	        var renderCall = new render_call_1.RenderCall();
	        renderCall.texture = this.texturePage[glyph.page].texture;
	        renderCall.vertices = [x, y, x + glyph.width, y, x, y + glyph.height, x + glyph.width, y + glyph.height];
	        renderCall.uvs = [uvs[0], uvs[1], uvs[2], uvs[1], uvs[0], uvs[3], uvs[2], uvs[3]];
	        renderCall.indices = [0, 1, 2, 1, 2, 3];
	        renderCall.numIndices = 6;
	        renderer.addCall(renderCall);
	    };
	    Font.prototype.calculateWidth = function (str) {
	        var width = 0;
	        for (var i = 0; i < str.length; i += 1) {
	            var id = str.charCodeAt(i);
	            width += +this.font.glyphs[id]['xAdvance'];
	        }
	        return width;
	    };
	    return Font;
	}());
	exports.Font = Font;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var resource_manager_1 = __webpack_require__(28);
	var Texture = (function () {
	    function Texture(gl, url) {
	        this.loaded = false;
	        this.ready = false;
	        this.gl = gl;
	        this.resourceManager = resource_manager_1.ResourceManager.getInstance();
	        if (url) {
	            this.url;
	            this.load(url);
	        }
	    }
	    Texture.prototype.load = function (url) {
	        var _this = this;
	        var gl = this.gl;
	        this.resourceManager.addImage();
	        this.image = new Image();
	        this.image.src = url;
	        this.texture = gl.createTexture();
	        this.image.addEventListener('load', function (event) {
	            _this.loadHandler(event);
	        });
	        this.image.addEventListener('error', _this.errorHandler);
	    };
	    Texture.prototype.init = function () {
	        var gl = this.gl;
	        gl.bindTexture(gl.TEXTURE_2D, this.texture);
	        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.image);
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
	        gl.bindTexture(gl.TEXTURE_2D, null);
	        this.ready = true;
	    };
	    Texture.prototype.errorHandler = function (event) {
	        if (this.resourceManager) {
	            this.resourceManager.imageFailed();
	        }
	        throw new Error('Failed to load sprite.');
	    };
	    Texture.prototype.loadHandler = function (event) {
	        this.loaded = true;
	        this.width = this.image.width;
	        this.height = this.image.height;
	        this.resourceManager.imageReady();
	        this.init();
	    };
	    return Texture;
	}());
	exports.Texture = Texture;


/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";
	var BitmapFont = (function () {
	    function BitmapFont() {
	        this.pages = {};
	        this.glyphs = {};
	    }
	    return BitmapFont;
	}());
	exports.BitmapFont = BitmapFont;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var program_1 = __webpack_require__(37);
	var color_1 = __webpack_require__(19);
	var render_call_1 = __webpack_require__(38);
	var vertexShader = 'attribute vec2 a_position;\n' +
	    'attribute vec2 a_texCoord;\n' +
	    'varying vec2 v_texCoord;\n' +
	    'uniform vec2 u_resolution;\n' +
	    'void main() {\n' +
	    '	vec2 zeroToOne = a_position / u_resolution;\n' +
	    '	vec2 zeroToTwo = zeroToOne * 2.0;\n' +
	    '	vec2 clipSpace = zeroToTwo - 1.0;\n' +
	    '	gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);\n' +
	    '	v_texCoord = a_texCoord;\n' +
	    '}\n';
	var fragmentShader = 'precision mediump float;\n' +
	    'uniform sampler2D u_image;\n' +
	    'uniform vec4 u_color;\n' +
	    'varying vec2 v_texCoord;\n\n' +
	    'void main() {\n' +
	    '	vec4 baseTexture = texture2D(u_image, v_texCoord);\n' +
	    '	gl_FragColor = baseTexture * u_color * u_color.w;\n' +
	    '}\n';
	var FontRenderer = (function () {
	    function FontRenderer(gl) {
	        this.color = new color_1.Color(255, 255, 255, 1);
	        this.width = 800;
	        this.height = 600;
	        this.renderCalls = {};
	        this.gl = gl;
	        this.program = new program_1.Program(this.gl);
	        this.program.loadShader(program_1.ShaderType.VERTEX, vertexShader);
	        this.program.loadShader(program_1.ShaderType.FRAGMENT, fragmentShader);
	        this.program.createProgram();
	        this.init();
	    }
	    FontRenderer.prototype.init = function () {
	        var gl = this.gl;
	        this.resolution = gl.getUniformLocation(this.program.program, 'u_resolution');
	        this.colorLocation = gl.getUniformLocation(this.program.program, 'u_color');
	        this.position = gl.getAttribLocation(this.program.program, 'a_position');
	        this.textureCoordinates = gl.getAttribLocation(this.program.program, 'a_texCoord');
	        this.vertexBuffer = gl.createBuffer();
	        this.indexBuffer = gl.createBuffer();
	        this.texCoordBuffer = gl.createBuffer();
	    };
	    FontRenderer.prototype.setColor = function (color) {
	        this.color = color;
	    };
	    FontRenderer.prototype.addCall = function (renderCall) {
	        if (!this.renderCalls[renderCall.texture]) {
	            this.renderCalls[renderCall.texture] = new render_call_1.RenderCall();
	            this.renderCalls[renderCall.texture].texture = renderCall.texture;
	        }
	        this.renderCalls[renderCall.texture].add(renderCall);
	    };
	    FontRenderer.prototype.clear = function () {
	        this.renderCalls = {};
	    };
	    FontRenderer.prototype.execute = function () {
	        this.flush();
	        this.clear();
	    };
	    FontRenderer.prototype.flush = function () {
	        var gl = this.gl;
	        gl.useProgram(this.program.program);
	        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	        gl.uniform2f(this.resolution, this.width, this.height);
	        for (var call in this.renderCalls) {
	            gl.bindTexture(gl.TEXTURE_2D, this.renderCalls[call].texture);
	            var col = this.color.getRGBAFloat();
	            gl.uniform4f(this.colorLocation, col[0], col[1], col[2], col[3]);
	            gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
	            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.renderCalls[call].vertices), gl.STATIC_DRAW);
	            gl.enableVertexAttribArray(this.position);
	            gl.vertexAttribPointer(this.position, 2, gl.FLOAT, false, 0, 0);
	            gl.bindBuffer(gl.ARRAY_BUFFER, this.texCoordBuffer);
	            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.renderCalls[call].uvs), gl.STATIC_DRAW);
	            gl.enableVertexAttribArray(this.textureCoordinates);
	            gl.vertexAttribPointer(this.textureCoordinates, 2, gl.FLOAT, false, 0, 0);
	            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
	            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.renderCalls[call].indices), gl.STATIC_DRAW);
	            gl.drawElements(gl.TRIANGLES, this.renderCalls[call].numIndices, gl.UNSIGNED_SHORT, 0);
	        }
	    };
	    return FontRenderer;
	}());
	exports.FontRenderer = FontRenderer;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tilemap_1 = __webpack_require__(53);
	exports.Tilemap = tilemap_1.Tilemap;
	var tilemap_layer_1 = __webpack_require__(54);
	exports.TilemapLayer = tilemap_layer_1.TilemapLayer;
	var tileset_1 = __webpack_require__(55);
	exports.Tileset = tileset_1.Tileset;
	var tile_1 = __webpack_require__(56);
	exports.Tile = tile_1.Tile;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tilemap_layer_1 = __webpack_require__(54);
	var tileset_1 = __webpack_require__(55);
	var color_1 = __webpack_require__(19);
	var http_1 = __webpack_require__(27);
	var resource_manager_1 = __webpack_require__(28);
	var rectangle_1 = __webpack_require__(11);
	var Tilemap = (function () {
	    function Tilemap(gl) {
	        this.layers = [];
	        this.tilesets = [];
	        this.backgroundColor = new color_1.Color(100, 100, 100, 1);
	        this.ready = false;
	        this.activeLayer = 0;
	        if (gl) {
	            this.gl = gl;
	        }
	        this.resourceManager = resource_manager_1.ResourceManager.getInstance();
	        this.http = new http_1.Http(false);
	    }
	    Tilemap.prototype.loadTiledMap = function (url) {
	        var _this = this;
	        this.resourceManager.addOther();
	        this.http.get(url, function (data) {
	            _this.parseTiledMap(data.responseText);
	        });
	    };
	    Tilemap.prototype.parseTiledMap = function (json) {
	        var map = JSON.parse(json);
	        this.width = map.width;
	        this.height = map.height;
	        this.tileWidth = map.tilewidth;
	        this.tileHeight = map.tileheight;
	        this.orientation = map.orientation;
	        this.renderOrder = map.renderorder;
	        this.nextObjectId = map.nextobjectid;
	        if (map.backgroundcolor) {
	            this.backgroundColor.setHex(map.backgroundcolor);
	        }
	        for (var _i = 0, _a = map.layers; _i < _a.length; _i++) {
	            var layer = _a[_i];
	            this.layers.push(new tilemap_layer_1.TilemapLayer(layer.data, layer.encoding, layer.width, layer.height, layer.x, layer.y, layer.opacity, layer.visible, layer.name, layer.type));
	        }
	        for (var _b = 0, _c = map.tilesets; _b < _c.length; _b++) {
	            var tileset = _c[_b];
	            this.tilesets.push(new tileset_1.Tileset(this.gl, tileset.name, tileset.image, tileset.imagewidth, tileset.imageheight, tileset.firstgid, tileset.margin, tileset.spacing, tileset.columns, tileset.tilecount, tileset.tilewidth, tileset.tileheight));
	        }
	        this.resourceManager.otherReady();
	    };
	    Tilemap.prototype.setActiveLayer = function (activeLayer) {
	        this.activeLayer = activeLayer;
	    };
	    Tilemap.prototype.getActiveLayer = function () {
	        return this.activeLayer;
	    };
	    Tilemap.prototype.getContainedTiles = function (container, scale) {
	        var tiles = [];
	        return tiles;
	    };
	    Tilemap.prototype.getTileAt = function (x, y, scale) {
	        var tile = {
	            id: 0
	        };
	        if (scale) {
	            var row = Math.floor(y / (this.tileHeight * scale));
	            var col = Math.floor(x / (this.tileWidth * scale));
	            var pos = (row * this.width) + col;
	            var tileData = this.layers[this.activeLayer].getTile(pos);
	            tile.id = tileData.tileid;
	            tile.row = tileData.row;
	            tile.col = tileData.col;
	            tile.collider = new rectangle_1.Rectangle((this.tileWidth * scale) * col, (this.tileHeight * scale) * row, (this.tileWidth * scale), (this.tileHeight * scale));
	        }
	        else {
	            var row = Math.floor(y / this.tileHeight);
	            var col = Math.floor(x / this.tileWidth);
	            var pos = (row * this.width) + col;
	            var tileData = this.layers[this.activeLayer].getTile(pos);
	            console.log(col, row, pos);
	            tile.id = tileData.tileid;
	            tile.row = tileData.row;
	            tile.col = tileData.col;
	            tile.collider = new rectangle_1.Rectangle(this.tileWidth * col, this.tileHeight * row, this.tileWidth, this.tileHeight);
	        }
	        return tile;
	    };
	    Tilemap.prototype.render = function (renderer, x, y, scale, scaleY) {
	        for (var _i = 0, _a = this.layers; _i < _a.length; _i++) {
	            var layer = _a[_i];
	            if (layer.isVisible()) {
	                for (var i in layer.tiles) {
	                    var tileData = layer.getTile(+i);
	                    var tileX = this.tileWidth * tileData.col + x;
	                    var tileY = this.tileHeight * tileData.row + y;
	                    if (tileData.tileid !== 0) {
	                        for (var j in this.tilesets) {
	                            if (tileData.tileid >= this.tilesets[j].firstgid && tileData.tileid <= this.tilesets[j].lastgid) {
	                                this.tilesets[j].renderTile(renderer, tileX, tileY, tileData.tileid);
	                                break;
	                            }
	                        }
	                    }
	                }
	            }
	        }
	    };
	    Tilemap.prototype.renderScale = function (renderer, x, y, scale) {
	        for (var _i = 0, _a = this.layers; _i < _a.length; _i++) {
	            var layer = _a[_i];
	            if (layer.isVisible()) {
	                for (var i in layer.tiles) {
	                    var tileData = layer.getTile(+i);
	                    var tileX = (this.tileWidth * scale) * tileData.col + x;
	                    var tileY = (this.tileHeight * scale) * tileData.row + y;
	                    if (tileData.tileid !== 0) {
	                        for (var j in this.tilesets) {
	                            if (tileData.tileid >= this.tilesets[j].firstgid && tileData.tileid <= this.tilesets[j].lastgid) {
	                                this.tilesets[j].renderTileScale(renderer, tileX, tileY, tileData.tileid, scale);
	                                break;
	                            }
	                        }
	                    }
	                }
	            }
	        }
	    };
	    return Tilemap;
	}());
	exports.Tilemap = Tilemap;


/***/ },
/* 54 */
/***/ function(module, exports) {

	"use strict";
	var TilemapLayer = (function () {
	    function TilemapLayer(data, encoding, width, height, x, y, opacity, visible, name, type) {
	        this.tiles = [];
	        this.data = data;
	        this.encoding = encoding;
	        this.height = height;
	        this.width = width;
	        this.x = x;
	        this.y = y;
	        this.opacity = opacity;
	        this.visible = visible;
	        this.name = name;
	        this.type = type;
	        this.decode();
	    }
	    TilemapLayer.prototype.decode = function () {
	        var rawData = atob(this.data);
	        var bytes = 4;
	        var length = rawData.length / bytes;
	        for (var i = 0; i < length; i += 1) {
	            this.tiles[i] = 0;
	            for (var j = bytes - 1; j >= 0; j -= 1) {
	                this.tiles[i] += rawData.charCodeAt((i * bytes) + j) << (j << 3);
	            }
	        }
	    };
	    TilemapLayer.prototype.isVisible = function () {
	        return this.visible;
	    };
	    TilemapLayer.prototype.getTile = function (i) {
	        return {
	            tileid: this.tiles[i],
	            row: Math.floor(i / this.width),
	            col: i % this.width
	        };
	    };
	    return TilemapLayer;
	}());
	exports.TilemapLayer = TilemapLayer;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var texture_1 = __webpack_require__(49);
	var render_call_1 = __webpack_require__(38);
	var Tileset = (function () {
	    function Tileset(gl, name, image, imageWidth, imageHeight, firstgid, margin, spacing, columns, tileCount, tileWidth, tileHeight) {
	        this.gl = gl;
	        this.name = name;
	        this.image = image;
	        this.imageWidth = imageWidth;
	        this.imageHeight = imageHeight;
	        this.firstgid = firstgid;
	        this.margin = margin;
	        this.spacing = spacing;
	        this.columns = columns;
	        this.tileCount = tileCount;
	        this.tileWidth = tileWidth;
	        this.tileHeight = tileHeight;
	        this.lastgid = this.firstgid + this.tileCount - 1;
	        this.texture = new texture_1.Texture(this.gl, this.image);
	    }
	    Tileset.prototype.renderTile = function (renderer, x, y, id) {
	        var row = Math.floor((id - this.firstgid) / this.columns);
	        var col = (id - this.firstgid) % this.columns;
	        var uvs = [
	            ((col * this.tileWidth) / this.imageWidth),
	            ((row * this.tileHeight) / this.imageHeight),
	            (((col * this.tileWidth) + this.tileWidth) / this.imageWidth),
	            (((row * this.tileHeight) + this.tileHeight) / this.imageHeight)
	        ];
	        var renderCall = new render_call_1.RenderCall();
	        renderCall.texture = this.texture.texture;
	        renderCall.vertices = [x, y,
	            x + this.tileWidth, y,
	            x, y + this.tileHeight,
	            x + this.tileWidth, y + this.tileHeight];
	        renderCall.uvs = [uvs[0], uvs[1], uvs[2], uvs[1], uvs[0], uvs[3], uvs[2], uvs[3]];
	        renderCall.indices = [0, 1, 2, 1, 2, 3];
	        renderCall.numIndices = 6;
	        renderer.addCall(renderCall);
	    };
	    Tileset.prototype.renderTileScale = function (renderer, x, y, id, scale, scaleY) {
	        var row = Math.floor((id - this.firstgid) / this.columns);
	        var col = (id - this.firstgid) % this.columns;
	        var uvs = [
	            ((col * this.tileWidth) / this.imageWidth),
	            ((row * this.tileHeight) / this.imageHeight),
	            (((col * this.tileWidth) + this.tileWidth) / this.imageWidth),
	            (((row * this.tileHeight) + this.tileHeight) / this.imageHeight)
	        ];
	        var renderCall = new render_call_1.RenderCall();
	        renderCall.texture = this.texture.texture;
	        renderCall.vertices = [x, y,
	            x + this.tileWidth * scale, y,
	            x, y + this.tileHeight * scale,
	            x + this.tileWidth * scale, y + this.tileHeight * scale];
	        renderCall.uvs = [uvs[0], uvs[1], uvs[2], uvs[1], uvs[0], uvs[3], uvs[2], uvs[3]];
	        renderCall.indices = [0, 1, 2, 1, 2, 3];
	        renderCall.numIndices = 6;
	        renderer.addCall(renderCall);
	    };
	    Tileset.prototype.renderTileAngle = function (renderer, x, y, id, angle, scale, scaleY) {
	    };
	    return Tileset;
	}());
	exports.Tileset = Tileset;


/***/ },
/* 56 */
/***/ function(module, exports) {

	"use strict";
	var Tile = (function () {
	    function Tile() {
	    }
	    return Tile;
	}());
	exports.Tile = Tile;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var blur_1 = __webpack_require__(58);
	exports.Blur = blur_1.Blur;
	var bloom_1 = __webpack_require__(59);
	exports.Bloom = bloom_1.Bloom;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var program_1 = __webpack_require__(37);
	var framebuffer_1 = __webpack_require__(39);
	var vertexShader = 'attribute vec2 a_position;\n' +
	    'attribute vec2 a_texCoord;\n' +
	    'varying vec2 v_texCoord;\n' +
	    'uniform vec2 u_resolution;\n' +
	    'void main() {\n' +
	    '	vec2 zeroToOne = a_position / u_resolution;\n' +
	    '	vec2 zeroToTwo = zeroToOne * 2.0;\n' +
	    '	vec2 clipSpace = zeroToTwo - 1.0;\n' +
	    '	gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);\n' +
	    '	v_texCoord = a_texCoord;\n' +
	    '}\n';
	/* Blur Fragment shader
	 * ===========================================================
	 * GLSL Fragment Shader
	 *  This source code is released under the MIT License.
	 *  Copyright (c) 2015 Guilherme R. Lampert.
	 * ===========================================================
	 */
	var blurFragmentShader = 'precision mediump float;\n' +
	    'uniform vec2  u_texel_size;\n' +
	    'uniform float u_blur_amount;\n' +
	    'uniform float u_blur_scale;\n' +
	    'uniform float u_blur_strength;\n' +
	    'uniform int u_horizontal;\n' +
	    'uniform sampler2D u_color_texture;\n' +
	    'varying vec2 v_texCoord;\n' +
	    'const float BLUR_PASSES = 20.0;\n' +
	    'float gaussian(float x, float deviation) {\n' +
	    '	return (1.0 / sqrt(6.28318530718 * deviation)) * exp(-((x * x) / (2.0 * deviation)));\n' +
	    '}\n' +
	    'void main() {\n' +
	    '	vec4  color = vec4(0.0);\n' +
	    '	float half_blur = u_blur_amount * 0.5;\n' +
	    '	float strength = 1.0 - u_blur_strength;\n' +
	    '	float deviation = half_blur * 0.35;\n' +
	    '	deviation *= deviation;\n' +
	    '   if (u_horizontal == 1) {\n' +
	    '	    for (float i = 0.0; i < BLUR_PASSES; i += 1.0) {\n' +
	    '		    float offset = i - half_blur;\n' +
	    '		    vec4 tex_color = texture2D(u_color_texture, v_texCoord +\n' +
	    '			    vec2(offset * u_texel_size.x * u_blur_scale, 0.0)) * gaussian(offset * strength, deviation);\n' +
	    '		    color += tex_color;\n' +
	    '	    }\n' +
	    '   } else {\n' +
	    '       for (float i = 0.0; i < BLUR_PASSES; i += 1.0) {\n' +
	    '            float offset = i - half_blur;\n' +
	    '            vec4 tex_color = texture2D(u_color_texture, v_texCoord +\n' +
	    '                vec2(0.0, offset * u_texel_size.y * u_blur_scale)) * gaussian(offset * strength, deviation);\n' +
	    '            color += tex_color;\n' +
	    '        }\n' +
	    '   }\n' +
	    '	gl_FragColor = clamp(color, 0.0, 1.0);\n' +
	    '}';
	var Blur = (function () {
	    function Blur(gl, width, height) {
	        this.gl = gl;
	        this.width = width;
	        this.height = height;
	        this.blurProgram = new program_1.Program(this.gl);
	        this.blurProgram.loadShader(program_1.ShaderType.VERTEX, vertexShader);
	        this.blurProgram.loadShader(program_1.ShaderType.FRAGMENT, blurFragmentShader);
	        this.blurProgram.createProgram();
	        this.init();
	    }
	    Blur.prototype.init = function () {
	        var gl = this.gl;
	        this.horizontalFBO = new framebuffer_1.FrameBuffer(gl, this.width, this.height);
	        this.verticalFBO = new framebuffer_1.FrameBuffer(gl, this.width, this.height);
	        this.texelSize = gl.getUniformLocation(this.blurProgram.program, 'u_texel_size');
	        this.blurAmount = gl.getUniformLocation(this.blurProgram.program, 'u_blur_amount');
	        this.blurScale = gl.getUniformLocation(this.blurProgram.program, 'u_blur_scale');
	        this.blurStrength = gl.getUniformLocation(this.blurProgram.program, 'u_blur_strength');
	        this.horizontal = gl.getUniformLocation(this.blurProgram.program, 'u_horizontal');
	        this.resolution = gl.getUniformLocation(this.blurProgram.program, 'u_resolution');
	        this.position = gl.getAttribLocation(this.blurProgram.program, 'a_position');
	        this.textureCoordinates = gl.getAttribLocation(this.blurProgram.program, 'a_texCoord');
	        this.vertexBuffer = gl.createBuffer();
	        this.indexBuffer = gl.createBuffer();
	        this.texCoordBuffer = gl.createBuffer();
	    };
	    Blur.prototype.execute = function (texture) {
	        var gl = this.gl;
	        gl.bindFramebuffer(gl.FRAMEBUFFER, this.horizontalFBO.fbo);
	        this.render(true, texture);
	        gl.bindFramebuffer(gl.FRAMEBUFFER, this.verticalFBO.fbo);
	        this.render(false, this.horizontalFBO.texture);
	        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	        return this.verticalFBO.texture;
	    };
	    Blur.prototype.render = function (horizontal, texture) {
	        var gl = this.gl;
	        var vertices = [0, 0, this.width, 0, 0, this.height, this.width, this.height];
	        var uvs = [
	            0, 0,
	            1, 0,
	            0, 1,
	            1, 1
	        ];
	        var indices = [0, 1, 2, 1, 2, 3];
	        var numIndices = 6;
	        gl.useProgram(this.blurProgram.program);
	        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	        gl.uniform2f(this.resolution, 800, 600);
	        gl.uniform2fv(this.texelSize, [(1.0 / this.width), (1.0 / this.height)]);
	        // gl.uniform2fv(this.texelSize, [1, 1]);
	        gl.uniform1f(this.blurAmount, 35.0);
	        gl.uniform1f(this.blurScale, 1.0);
	        gl.uniform1f(this.blurStrength, 0.2);
	        if (horizontal) {
	            gl.uniform1i(this.horizontal, 1);
	        }
	        else {
	            gl.uniform1i(this.horizontal, 0);
	        }
	        gl.bindTexture(gl.TEXTURE_2D, texture);
	        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
	        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	        gl.enableVertexAttribArray(this.position);
	        gl.vertexAttribPointer(this.position, 2, gl.FLOAT, false, 0, 0);
	        gl.bindBuffer(gl.ARRAY_BUFFER, this.texCoordBuffer);
	        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(uvs), gl.STATIC_DRAW);
	        gl.enableVertexAttribArray(this.textureCoordinates);
	        gl.vertexAttribPointer(this.textureCoordinates, 2, gl.FLOAT, false, 0, 0);
	        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
	        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
	        gl.drawElements(gl.TRIANGLES, numIndices, gl.UNSIGNED_SHORT, 0);
	    };
	    return Blur;
	}());
	exports.Blur = Blur;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var program_1 = __webpack_require__(37);
	var framebuffer_1 = __webpack_require__(39);
	var vertexShader = 'attribute vec2 a_position;\n' +
	    'attribute vec2 a_texCoord;\n' +
	    'varying vec2 v_texCoord;\n' +
	    'uniform vec2 u_resolution;\n' +
	    'void main() {\n' +
	    '	vec2 zeroToOne = a_position / u_resolution;\n' +
	    '	vec2 zeroToTwo = zeroToOne * 2.0;\n' +
	    '	vec2 clipSpace = zeroToTwo - 1.0;\n' +
	    '	gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);\n' +
	    '	v_texCoord = a_texCoord;\n' +
	    '}\n';
	/* Combine fragment shader
	 * ===========================================================
	 * GLSL Fragment Shader
	 *  This source code is released under the MIT License.
	 *  Copyright (c) 2015 Guilherme R. Lampert.
	 * ===========================================================
	 */
	var combineFragmentShader = 'precision mediump float;\n' +
	    'uniform float u_blend_mode;\n' +
	    'uniform sampler2D u_scene_texture;\n' +
	    'uniform sampler2D u_glow_texture;\n' +
	    'varying vec2 v_texCoord;\n' +
	    'const float ADDITIVE_BLENDING = 1.0;\n' +
	    'const float SCREEN_BLENDING   = 2.0;\n' +
	    'void main() {\n' +
	    '	vec4 dst = texture2D(u_scene_texture, v_texCoord); // Rendered scene (tmu:0)\n' +
	    '	vec4 src = texture2D(u_glow_texture,  v_texCoord); // Glow map       (tmu:1)\n' +
	    '	if (u_blend_mode == ADDITIVE_BLENDING) {\n' +
	    '		// Additive blending (strong result, high overexposure).\n' +
	    '		gl_FragColor = min(src + dst, 1.0);\n' +
	    '	} else if (u_blend_mode == SCREEN_BLENDING) {\n' +
	    '		// Screen blending (mild result, medium overexposure).\n' +
	    '		gl_FragColor = clamp((src + dst) - (src * dst), 0.0, 1.0);\n' +
	    '	} else {\n' +
	    '		// Show the glow map instead (DISPLAY_GLOWMAP).\n' +
	    '		gl_FragColor = src;\n' +
	    '	}\n' +
	    '}';
	var Bloom = (function () {
	    function Bloom(gl, width, height) {
	        this.gl = gl;
	        this.width = width;
	        this.height = height;
	        this.combinationProgram = new program_1.Program(this.gl);
	        this.combinationProgram.loadShader(program_1.ShaderType.VERTEX, vertexShader);
	        this.combinationProgram.loadShader(program_1.ShaderType.FRAGMENT, combineFragmentShader);
	        this.combinationProgram.createProgram();
	        this.init();
	    }
	    Bloom.prototype.init = function () {
	        var gl = this.gl;
	        this.glowFramebuffer = new framebuffer_1.FrameBuffer(gl, this.width, this.height);
	        this.blendMode = gl.getUniformLocation(this.combinationProgram.program, 'u_blend_mode');
	        this.resolution = gl.getUniformLocation(this.combinationProgram.program, 'u_resolution');
	        this.position = gl.getAttribLocation(this.combinationProgram.program, 'a_position');
	        this.textureCoordinates = gl.getAttribLocation(this.combinationProgram.program, 'a_texCoord');
	        this.vertexBuffer = gl.createBuffer();
	        this.indexBuffer = gl.createBuffer();
	        this.texCoordBuffer = gl.createBuffer();
	    };
	    Bloom.prototype.execute = function (src, dst) {
	        var gl = this.gl;
	        gl.bindFramebuffer(gl.FRAMEBUFFER, this.glowFramebuffer.fbo);
	        this.render(dst, src);
	        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	        return this.glowFramebuffer.texture;
	    };
	    Bloom.prototype.render = function (src, dst) {
	        var gl = this.gl;
	        var vertices = [0, 0, this.width, 0, 0, this.height, this.width, this.height];
	        var uvs = [
	            0, 0,
	            1, 0,
	            0, 1,
	            1, 1
	        ];
	        var indices = [0, 1, 2, 1, 2, 3];
	        var numIndices = 6;
	        gl.useProgram(this.combinationProgram.program);
	        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	        gl.uniform2f(this.resolution, 800, 600);
	        gl.uniform1f(this.blendMode, 1.0);
	        gl.activeTexture(gl.TEXTURE0);
	        gl.bindTexture(gl.TEXTURE_2D, src);
	        gl.activeTexture(gl.TEXTURE1);
	        gl.bindTexture(gl.TEXTURE_2D, dst);
	        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
	        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	        gl.enableVertexAttribArray(this.position);
	        gl.vertexAttribPointer(this.position, 2, gl.FLOAT, false, 0, 0);
	        gl.bindBuffer(gl.ARRAY_BUFFER, this.texCoordBuffer);
	        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(uvs), gl.STATIC_DRAW);
	        gl.enableVertexAttribArray(this.textureCoordinates);
	        gl.vertexAttribPointer(this.textureCoordinates, 2, gl.FLOAT, false, 0, 0);
	        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
	        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
	        gl.drawElements(gl.TRIANGLES, numIndices, gl.UNSIGNED_SHORT, 0);
	        gl.bindTexture(gl.TEXTURE_2D, dst);
	        gl.activeTexture(gl.TEXTURE0);
	    };
	    return Bloom;
	}());
	exports.Bloom = Bloom;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var render_call_1 = __webpack_require__(38);
	var vector2d_1 = __webpack_require__(5);
	var angle_1 = __webpack_require__(26);
	var Sprite = (function () {
	    function Sprite(texture, width, height, uv) {
	        if (texture) {
	            this.texture = texture;
	        }
	        if (width && height) {
	            this.width = width;
	            this.height = height;
	        }
	        if (uv) {
	            this.setUVByPixels(uv[0], uv[1], uv[2], uv[3]);
	        }
	    }
	    Sprite.prototype.setUV = function (x0, y0, x1, y1) {
	        this.uv = [x0, y0, x1, y1];
	    };
	    Sprite.prototype.setUVByPixels = function (x, y, width, height) {
	        this.uv = [(x / this.texture.width), (y / this.texture.height), ((x + width) / this.texture.width), ((y + height) / this.texture.height)];
	    };
	    Sprite.prototype.render = function (renderer, x, y) {
	        var renderCall = new render_call_1.RenderCall();
	        renderCall.texture = this.texture.texture;
	        renderCall.vertices = [x, y, x + this.width, y, x, y + this.height, x + this.width, y + this.height];
	        renderCall.uvs = [this.uv[0], this.uv[1], this.uv[2], this.uv[1], this.uv[0], this.uv[3], this.uv[2], this.uv[3]];
	        renderCall.indices = [0, 1, 2, 1, 2, 3];
	        renderCall.numIndices = 6;
	        renderer.addCall(renderCall);
	    };
	    Sprite.prototype.renderScale = function (renderer, x, y, scale, scaleY) {
	        var renderCall = new render_call_1.RenderCall();
	        if (scaleY) {
	            renderCall.vertices = [x, y,
	                x + (this.width * scaleY), y,
	                x, y + (this.height * scale),
	                x + (this.width * scaleY), y + (this.height * scale)];
	        }
	        else {
	            renderCall.vertices = [x, y,
	                x + (this.width * scale), y,
	                x, y + (this.height * scale),
	                x + (this.width * scale), y + (this.height * scale)];
	        }
	        renderCall.texture = this.texture.texture;
	        renderCall.uvs = [this.uv[0], this.uv[1], this.uv[2], this.uv[1], this.uv[0], this.uv[3], this.uv[2], this.uv[3]];
	        renderCall.indices = [0, 1, 2, 1, 2, 3];
	        renderCall.numIndices = 6;
	        renderer.addCall(renderCall);
	    };
	    Sprite.prototype.renderAngle = function (renderer, x, y, angle) {
	        var vec = [];
	        var px = x + (this.width / 2);
	        var py = y + (this.height / 2);
	        vec[0] = new vector2d_1.Vector2(x, y);
	        vec[1] = new vector2d_1.Vector2(x + this.width, y);
	        vec[2] = new vector2d_1.Vector2(x, y + this.height);
	        vec[3] = new vector2d_1.Vector2(x + this.width, y + this.height);
	        for (var vector in vec) {
	            vec[vector] = vec[vector].rotatePivot(px, py, angle_1.degreeToRadian(angle));
	        }
	        var renderCall = new render_call_1.RenderCall();
	        renderCall.texture = this.texture.texture;
	        renderCall.vertices = [vec[0].x, vec[0].y,
	            vec[1].x, vec[1].y,
	            vec[2].x, vec[2].y,
	            vec[3].x, vec[3].y];
	        renderCall.uvs = [this.uv[0], this.uv[1], this.uv[2], this.uv[1], this.uv[0], this.uv[3], this.uv[2], this.uv[3]];
	        renderCall.indices = [0, 1, 2, 1, 2, 3];
	        renderCall.numIndices = 6;
	        renderer.addCall(renderCall);
	    };
	    Sprite.prototype.renderAngleScale = function (renderer, x, y, angle, scale, scaleY) {
	        var vec = [];
	        var px = x + ((this.width * scale) / 2);
	        var py = y + ((this.height * scale) / 2);
	        if (scaleY) {
	            vec[0] = new vector2d_1.Vector2(x, y);
	            vec[1] = new vector2d_1.Vector2(x + (this.width * scale), y);
	            vec[2] = new vector2d_1.Vector2(x, y + (this.height * scaleY));
	            vec[3] = new vector2d_1.Vector2(x + (this.width * scale), y + (this.height * scaleY));
	        }
	        else {
	            vec[0] = new vector2d_1.Vector2(x, y);
	            vec[1] = new vector2d_1.Vector2(x + (this.width * scale), y);
	            vec[2] = new vector2d_1.Vector2(x, y + (this.height * scale));
	            vec[3] = new vector2d_1.Vector2(x + (this.width * scale), y + (this.height * scale));
	        }
	        for (var vector in vec) {
	            vec[vector] = vec[vector].rotatePivot(px, py, angle_1.degreeToRadian(angle));
	        }
	        var renderCall = new render_call_1.RenderCall();
	        renderCall.texture = this.texture.texture;
	        renderCall.vertices = [vec[0].x, vec[0].y,
	            vec[1].x, vec[1].y,
	            vec[2].x, vec[2].y,
	            vec[3].x, vec[3].y];
	        renderCall.uvs = [this.uv[0], this.uv[1], this.uv[2], this.uv[1], this.uv[0], this.uv[3], this.uv[2], this.uv[3]];
	        renderCall.indices = [0, 1, 2, 1, 2, 3];
	        renderCall.numIndices = 6;
	        renderer.addCall(renderCall);
	    };
	    Sprite.prototype.renderFBO = function (renderer) {
	        var renderCall = new render_call_1.RenderCall();
	        renderCall.texture = this.texture.texture;
	        renderCall.vertices = [0, this.height, this.width, this.height, 0, 0, this.width, 0];
	        renderCall.uvs = [this.uv[0], this.uv[1], this.uv[2], this.uv[1], this.uv[0], this.uv[3], this.uv[2], this.uv[3]];
	        renderCall.indices = [0, 1, 2, 1, 2, 3];
	        renderCall.numIndices = 6;
	        renderer.addCall(renderCall);
	    };
	    return Sprite;
	}());
	exports.Sprite = Sprite;


/***/ },
/* 61 */
/***/ function(module, exports) {

	"use strict";
	var AnimatedSprite = (function () {
	    function AnimatedSprite(frames, loop, timePerFrame) {
	        this.frames = [];
	        this.loop = false;
	        this.active = true;
	        this.timePerFrame = 100;
	        this.currentFrame = 0;
	        this.currentDelta = 0;
	        if (frames) {
	            this.frames = frames;
	        }
	        if (loop) {
	            this.loop = loop;
	        }
	        if (timePerFrame) {
	            this.timePerFrame = timePerFrame;
	        }
	    }
	    AnimatedSprite.prototype.play = function () {
	        this.active = true;
	    };
	    AnimatedSprite.prototype.stop = function () {
	        this.active = false;
	        this.currentFrame = 0;
	        this.currentDelta = 0;
	    };
	    AnimatedSprite.prototype.pause = function () {
	        this.active = false;
	    };
	    AnimatedSprite.prototype.nextFrame = function () {
	        this.currentFrame += 1;
	        if (this.currentFrame >= this.frames.length) {
	            if (!this.loop) {
	                this.active = false;
	            }
	            this.currentFrame = 0;
	        }
	    };
	    AnimatedSprite.prototype.update = function (delta) {
	        if (this.active) {
	            this.currentDelta += delta;
	            if (this.currentDelta > this.timePerFrame) {
	                this.currentDelta = 0;
	                this.nextFrame();
	            }
	        }
	    };
	    AnimatedSprite.prototype.render = function (renderer, x, y) {
	        this.frames[this.currentFrame].render(renderer, x, y);
	    };
	    AnimatedSprite.prototype.renderScale = function (renderer, x, y, scale, scaleY) {
	        if (scaleY) {
	            this.frames[this.currentFrame].renderScale(renderer, x, y, scale, scaleY);
	        }
	        else {
	            this.frames[this.currentFrame].renderScale(renderer, x, y, scale);
	        }
	    };
	    AnimatedSprite.prototype.renderAngle = function (renderer, x, y, angle) {
	        this.frames[this.currentFrame].renderAngle(renderer, x, y, angle);
	    };
	    AnimatedSprite.prototype.renderAngleScale = function (renderer, x, y, angle, scale, scaleY) {
	        if (scaleY) {
	            this.frames[this.currentFrame].renderAngleScale(renderer, x, y, angle, scale, scaleY);
	        }
	        else {
	            this.frames[this.currentFrame].renderAngleScale(renderer, x, y, angle, scale);
	        }
	    };
	    return AnimatedSprite;
	}());
	exports.AnimatedSprite = AnimatedSprite;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var sample_1 = __webpack_require__(63);
	exports.Sample = sample_1.Sample;
	var track_1 = __webpack_require__(64);
	exports.Track = track_1.Track;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var resource_manager_1 = __webpack_require__(28);
	var Sample = (function () {
	    function Sample(url) {
	        this.loaded = false;
	        if (url) {
	            this.url = url;
	            this.load(url);
	        }
	        this.resourceManager = resource_manager_1.ResourceManager.getInstance();
	    }
	    Sample.prototype.load = function (url) {
	        var _this = this;
	        this.sample = new Audio();
	        this.sample.src = url;
	        this.resourceManager.addAudio();
	        this.sample.addEventListener('load', function (event) {
	            _this.loadHandler(event);
	        });
	        this.sample.addEventListener('error', _this.errorHandler);
	    };
	    Sample.prototype.play = function () {
	        this.sample.currentTime = 0;
	        this.sample.play();
	    };
	    Sample.prototype.pause = function () {
	        this.sample.pause();
	    };
	    Sample.prototype.stop = function () {
	        this.sample.pause();
	        this.sample.currentTime = 0;
	    };
	    Sample.prototype.seek = function (time) {
	        this.sample.currentTime = time;
	    };
	    Sample.prototype.setSpeed = function (speed) {
	        this.sample.playbackRate = speed;
	    };
	    Sample.prototype.getSpeed = function () {
	        return this.sample.playbackRate;
	    };
	    Sample.prototype.loadHandler = function (event) {
	        this.loaded = true;
	        this.length = this.sample.duration;
	        this.resourceManager.audioReady();
	    };
	    Sample.prototype.errorHandler = function (event) {
	        this.resourceManager.audioFailed();
	        throw new Error('Failed to load audio resource.');
	    };
	    return Sample;
	}());
	exports.Sample = Sample;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var resource_manager_1 = __webpack_require__(28);
	var Track = (function () {
	    function Track(url) {
	        this.loop = false;
	        this.loaded = false;
	        if (url) {
	            this.url = url;
	            this.load(url);
	        }
	        this.resourceManager = resource_manager_1.ResourceManager.getInstance();
	    }
	    Track.prototype.load = function (url) {
	        var _this = this;
	        this.track = new Audio();
	        this.track.src = url;
	        this.resourceManager.addAudio();
	        this.track.addEventListener('load', function (event) {
	            _this.loadHandler(event);
	        });
	        this.track.addEventListener('error', _this.errorHandler);
	    };
	    Track.prototype.play = function () {
	        this.track.play();
	    };
	    Track.prototype.pause = function () {
	        this.track.pause();
	    };
	    Track.prototype.stop = function () {
	        this.track.pause();
	        this.track.currentTime = 0;
	    };
	    Track.prototype.seek = function (time) {
	        this.track.currentTime = time;
	    };
	    Track.prototype.setSpeed = function (speed) {
	        this.track.playbackRate = speed;
	    };
	    Track.prototype.getSpeed = function () {
	        return this.track.playbackRate;
	    };
	    Track.prototype.setLoopable = function (loop) {
	        this.loop = loop;
	    };
	    Track.prototype.loadHandler = function (event) {
	        this.loaded = true;
	        this.length = this.track.duration;
	        this.resourceManager.audioReady();
	    };
	    Track.prototype.errorHandler = function (event) {
	        this.resourceManager.audioFailed();
	        throw new Error('Failed to load audio resource.');
	    };
	    return Track;
	}());
	exports.Track = Track;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var AStar = __webpack_require__(66);
	exports.AStar = AStar;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var connection_1 = __webpack_require__(67);
	exports.Connection = connection_1.Connection;
	var graph_1 = __webpack_require__(68);
	exports.Graph = graph_1.Graph;
	var heuristic_1 = __webpack_require__(69);
	exports.Heuristic = heuristic_1.Heuristic;
	var node_list_1 = __webpack_require__(70);
	exports.NodeList = node_list_1.NodeList;
	var node_record_1 = __webpack_require__(71);
	exports.NodeRecord = node_record_1.NodeRecord;
	var node_1 = __webpack_require__(72);
	exports.Node = node_1.Node;
	var path_finder_1 = __webpack_require__(73);
	exports.PathFinder = path_finder_1.PathFinder;


/***/ },
/* 67 */
/***/ function(module, exports) {

	"use strict";
	var Connection = (function () {
	    function Connection(srcNode, dstNode) {
	        if (srcNode) {
	            this.srcNode = srcNode;
	        }
	        if (dstNode) {
	            this.dstNode = dstNode;
	        }
	    }
	    Connection.prototype.setCost = function (cost) {
	        this.cost = cost;
	    };
	    Connection.prototype.getCost = function () {
	        return this.cost;
	    };
	    Connection.prototype.setSrcNode = function (srcNode) {
	        this.srcNode = srcNode;
	    };
	    Connection.prototype.getSrcNode = function () {
	        return this.srcNode;
	    };
	    Connection.prototype.setDstNode = function (dstNode) {
	        this.dstNode = dstNode;
	    };
	    Connection.prototype.getDstNode = function () {
	        return this.dstNode;
	    };
	    return Connection;
	}());
	exports.Connection = Connection;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var connection_1 = __webpack_require__(67);
	var Graph = (function () {
	    function Graph(nodes) {
	        if (nodes) {
	            this.nodes = nodes;
	        }
	    }
	    Graph.prototype.setNodes = function (nodes) {
	        this.nodes = nodes;
	    };
	    Graph.prototype.isValidNode = function (x, y) {
	        if (x < 0 || y < 0 || y >= this.nodes.length || x >= this.nodes[0].length) {
	            return false;
	        }
	        else if (this.nodes[y][x].getBlocked()) {
	            return false;
	        }
	        return true;
	    };
	    Graph.prototype.getNode = function (node) {
	        return this.nodes[node.y][node.x];
	    };
	    Graph.prototype.getConnections = function (srcNode) {
	        var connections = [];
	        var tempConnection;
	        // TODO: Need to rewrite this to handle the 1D tilemap structure of tiled format.
	        for (var i = -1; i < 2; i += 1) {
	            for (var j = -1; j < 2; j += 1) {
	                if (i === 0 && j === 0) {
	                    continue;
	                }
	                else if (this.isValidNode(srcNode.x + i, srcNode.y + j)) {
	                    tempConnection = new connection_1.Connection();
	                    tempConnection.setSrcNode(srcNode);
	                    tempConnection.setDstNode(this.nodes[srcNode.y + j][srcNode.x + i]);
	                    tempConnection.setCost(1);
	                    connections.push(tempConnection);
	                }
	            }
	        }
	        return connections;
	    };
	    return Graph;
	}());
	exports.Graph = Graph;


/***/ },
/* 69 */
/***/ function(module, exports) {

	"use strict";
	var Heuristic = (function () {
	    function Heuristic(dstNode) {
	        this.dstNode = dstNode;
	    }
	    Heuristic.prototype.euclideanDistance = function (currentNode) {
	        var dx = currentNode.x - this.dstNode.x;
	        var dy = currentNode.y - this.dstNode.y;
	        return Math.sqrt((dx * dx) + (dy * dy));
	    };
	    Heuristic.prototype.manhattanDistance = function (currentNode) {
	        var dx = Math.abs(this.dstNode.x - currentNode.x);
	        var dy = Math.abs(this.dstNode.y - currentNode.y);
	        return dx + dy;
	    };
	    return Heuristic;
	}());
	exports.Heuristic = Heuristic;


/***/ },
/* 70 */
/***/ function(module, exports) {

	"use strict";
	var NodeList = (function () {
	    function NodeList() {
	        this.list = [];
	    }
	    NodeList.prototype.add = function (nodeRecord) {
	        this.list.push(nodeRecord);
	    };
	    NodeList.prototype.get = function (index) {
	        return this.list[index];
	    };
	    NodeList.prototype.getSmallest = function () {
	        var smallest;
	        var current;
	        smallest = this.list[0];
	        for (var i = 0; i < this.list.length; i += 1) {
	            current = this.list[i];
	            if (current.getEstimatedCost() < smallest.getEstimatedCost()) {
	                smallest = current;
	            }
	        }
	        return smallest;
	    };
	    NodeList.prototype.contains = function (node) {
	        var current;
	        for (var i = 0; i < this.list.length; i += 1) {
	            current = this.list[i].getNode();
	            if (current.x === node.x && current.y === node.y) {
	                return true;
	            }
	        }
	        return false;
	    };
	    NodeList.prototype.find = function (node) {
	        var current;
	        for (var i = 0; i < this.list.length; i += 1) {
	            current = this.list[i].getNode();
	            if (current.x === node.x && current.y === node.y) {
	                return this.list[i];
	            }
	        }
	    };
	    NodeList.prototype.remove = function (node) {
	        var current;
	        for (var i = 0; i < this.list.length; i += 1) {
	            current = this.list[i].getNode();
	            if (current.x === node.x && current.y === node.y) {
	                this.list.splice(i, 1);
	            }
	        }
	    };
	    NodeList.prototype.size = function () {
	        return this.list.length;
	    };
	    return NodeList;
	}());
	exports.NodeList = NodeList;


/***/ },
/* 71 */
/***/ function(module, exports) {

	"use strict";
	var NodeRecord = (function () {
	    function NodeRecord() {
	        this.currentCost = 0;
	        this.estimatedCost = 0;
	        this.currentCost = 0;
	        this.estimatedCost = 0;
	    }
	    NodeRecord.prototype.setNode = function (node) {
	        this.node = node;
	    };
	    NodeRecord.prototype.getNode = function () {
	        return this.node;
	    };
	    NodeRecord.prototype.setConnection = function (connection) {
	        this.connection = connection;
	    };
	    NodeRecord.prototype.getConnection = function () {
	        return this.connection;
	    };
	    NodeRecord.prototype.setCurrentCost = function (cost) {
	        this.currentCost = cost;
	    };
	    NodeRecord.prototype.getCurrentCost = function () {
	        return this.currentCost;
	    };
	    NodeRecord.prototype.setEstimatedCost = function (estimatedCost) {
	        this.estimatedCost = estimatedCost;
	    };
	    NodeRecord.prototype.getEstimatedCost = function () {
	        return this.estimatedCost;
	    };
	    return NodeRecord;
	}());
	exports.NodeRecord = NodeRecord;


/***/ },
/* 72 */
/***/ function(module, exports) {

	"use strict";
	var Node = (function () {
	    function Node(x, y) {
	        this.blocked = false;
	        this.x = x;
	        this.y = y;
	    }
	    Node.prototype.setBlocked = function (blocked) {
	        this.blocked = blocked;
	    };
	    Node.prototype.getBlocked = function () {
	        return this.blocked;
	    };
	    return Node;
	}());
	exports.Node = Node;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var node_1 = __webpack_require__(72);
	var node_record_1 = __webpack_require__(71);
	var node_list_1 = __webpack_require__(70);
	var heuristic_1 = __webpack_require__(69);
	var graph_1 = __webpack_require__(68);
	var PathFinder = (function () {
	    function PathFinder() {
	        this.startRecord = new node_record_1.NodeRecord();
	        this.open = new node_list_1.NodeList();
	        this.closed = new node_list_1.NodeList();
	    }
	    PathFinder.prototype.generatePathData = function (map, closed) {
	        var nodes = [];
	        for (var i = 0; i < map.height; i += 1) {
	            nodes[i] = [];
	            for (var j = 0; j < map.width; j += 1) {
	                var blocked = closed.indexOf(map.tiles[(i * map.width) + j]) !== -1;
	                nodes[i][j] = new node_1.Node(j, i);
	                nodes[i][j].setBlocked(blocked);
	            }
	        }
	        this.graph = new graph_1.Graph(nodes);
	    };
	    PathFinder.prototype.findPath = function (startNode, endNode) {
	        var path = [];
	        var current;
	        var connections = [];
	        var end;
	        var endNodeCost;
	        var endNodeRecord;
	        var endNodeHeuristic;
	        this.startRecord = new node_record_1.NodeRecord();
	        this.open = new node_list_1.NodeList();
	        this.closed = new node_list_1.NodeList();
	        this.heuristic = new heuristic_1.Heuristic(endNode);
	        if (this.graph.getNode(endNode).blocked) {
	            return null;
	        }
	        this.startRecord.setNode(this.graph.getNode(startNode));
	        this.startRecord.setEstimatedCost(this.heuristic.euclideanDistance(this.startRecord.getNode()));
	        this.open.add(this.startRecord);
	        while (this.open.size() > 0) {
	            current = this.open.getSmallest();
	            if (current.node.x === endNode.x && current.node.y === endNode.y) {
	                break;
	            }
	            connections = this.graph.getConnections(current.getNode());
	            for (var i = 0; i < connections.length; i += 1) {
	                end = connections[i].getDstNode();
	                endNodeCost = current.getCurrentCost() + connections[i].getCost();
	                if (this.closed.contains(end)) {
	                    endNodeRecord = this.closed.find(end);
	                    if (endNodeRecord.getCurrentCost() <= endNodeCost) {
	                        continue;
	                    }
	                    this.closed.remove(endNodeRecord.getNode());
	                    endNodeHeuristic = endNodeRecord.getEstimatedCost() - endNodeRecord.getCurrentCost();
	                }
	                else if (this.open.contains(end)) {
	                    endNodeRecord = this.open.find(end);
	                    if (endNodeRecord.getCurrentCost() <= endNodeCost) {
	                        continue;
	                    }
	                    endNodeHeuristic = endNodeRecord.getEstimatedCost() - endNodeRecord.getCurrentCost();
	                }
	                else {
	                    endNodeRecord = new node_record_1.NodeRecord();
	                    endNodeRecord.setNode(end);
	                    endNodeHeuristic = this.heuristic.euclideanDistance(end);
	                }
	                endNodeRecord.setCurrentCost(endNodeCost);
	                endNodeRecord.setConnection(connections[i]);
	                endNodeRecord.setEstimatedCost(endNodeCost + endNodeHeuristic);
	                if (!this.open.contains(end)) {
	                    this.open.add(endNodeRecord);
	                }
	            }
	            this.open.remove(current.getNode());
	            this.closed.add(current);
	        }
	        if (!(current.node.x === endNode.x && current.node.y === endNode.y)) {
	            return null;
	        }
	        else {
	            while (!(current.node.x === startNode.x && current.node.y === startNode.y)) {
	                path.push(current.connection.getDstNode());
	                current = this.closed.find(current.connection.getSrcNode());
	            }
	        }
	        return path;
	    };
	    return PathFinder;
	}());
	exports.PathFinder = PathFinder;


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var surface2d_1 = __webpack_require__(20);
	var surface3d_1 = __webpack_require__(23);
	var Scene = (function () {
	    function Scene(application) {
	        this.surfaces = {};
	        this.application = application;
	    }
	    Scene.prototype.add3dSurface = function (id) {
	        this.surfaces[id] = new surface3d_1.Surface3d(this.application.width, this.application.height, id);
	    };
	    Scene.prototype.add2dSurface = function (id) {
	        this.surfaces[id] = new surface2d_1.Surface2d(this.application.width, this.application.height, id);
	    };
	    Scene.prototype.getContext = function (id) {
	        return this.surfaces[id].getContext();
	    };
	    Scene.prototype.clear = function (id, color) {
	        if (color) {
	            this.surfaces[id].clear(color);
	        }
	        else {
	            this.surfaces[id].clear();
	        }
	    };
	    return Scene;
	}());
	exports.Scene = Scene;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var scene_manager_1 = __webpack_require__(76);
	var Application = (function () {
	    function Application(width, height, targetFps) {
	        this.active = true;
	        this.targetFps = 30;
	        this.width = width;
	        this.height = height;
	        if (targetFps) {
	            this.targetFps = targetFps;
	        }
	        this.sceneManager = new scene_manager_1.SceneManager(this);
	    }
	    Application.prototype.init = function () {
	        this.lastDelta = new Date().getTime();
	        this.start();
	    };
	    Application.prototype.start = function () {
	        var _this = this;
	        this.applicationTimer = window.setInterval(function () {
	            _this.update();
	        }, (1000 / this.targetFps));
	    };
	    Application.prototype.stop = function () {
	        window.clearInterval(this.applicationTimer);
	    };
	    Application.prototype.step = function () {
	        this.update();
	    };
	    Application.prototype.update = function () {
	        var now = new Date().getTime();
	        var delta = now - this.lastDelta;
	        this.lastDelta = now;
	        if (now - this.lastUpdate > 1000) {
	            this.fps = this.frames;
	            this.frames = 0;
	            this.lastUpdate = now;
	        }
	        else {
	            this.frames += 1;
	        }
	        this.sceneManager.update(delta);
	    };
	    return Application;
	}());
	exports.Application = Application;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var scene_1 = __webpack_require__(74);
	var SceneManager = (function () {
	    function SceneManager(application) {
	        this.scenes = {};
	        this.application = application;
	    }
	    SceneManager.prototype.update = function (delta) {
	        if (this.activeScene) {
	            this.scenes[this.activeScene].update(delta);
	            this.scenes[this.activeScene].render(delta);
	        }
	    };
	    SceneManager.prototype.addScene = function (id) {
	        if (this.scenes[id] !== undefined) {
	            throw new Error('Scene with id: ' + id + ' already exists.');
	        }
	        this.scenes[id] = new scene_1.Scene(this.application);
	        if (!this.activeScene) {
	            this.activeScene = id;
	        }
	        return this.scenes[id];
	    };
	    SceneManager.prototype.removeScene = function (id) {
	        delete this.scenes[id];
	        if (this.activeScene === id) {
	            this.activeScene = this.getFirstScene();
	        }
	    };
	    SceneManager.prototype.getScene = function (id) {
	        if (this.scenes[id] === undefined) {
	            throw new Error('Scene with id: ' + id + ' is undefined.');
	        }
	        return this.scenes[id];
	    };
	    SceneManager.prototype.setActiveScene = function (id) {
	        if (this.scenes[id] === undefined) {
	            throw new Error('Scene with id: ' + id + ' is undefined.');
	        }
	        this.activeScene = id;
	    };
	    SceneManager.prototype.getFirstScene = function () {
	        for (var scene in this.scenes) {
	            return scene;
	        }
	    };
	    return SceneManager;
	}());
	exports.SceneManager = SceneManager;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=ld37.js.map