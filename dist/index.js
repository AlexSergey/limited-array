/*!
 * banner:
 * limited-array: 2.0.2
 * Aleksandrov Sergey <gooddev.sergey@gmail.com> (https://github.com/AlexSergey/limited-array)
 * Array with a limit to size. It's very similar to the queue
 * ISC
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.LimitedArray=e():t.LimitedArray=e()}(this,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r=10,i=function(){function t(t){this.data=[],this.limit=0,this.limit=t&&"number"==typeof t.limit?Math.abs(t.limit):r}return t.prototype.setLimit=function(t){return this.limit=t&&"number"==typeof t?Math.abs(t):this.limit,this.checkLimit()},t.prototype.checkLimit=function(){var t=this,e=this.data.length-this.limit;return!(e<=0)&&(Array(e).fill(0).forEach(function(){t.data.shift()}),!0)},t.prototype.add=function(t){return this.data.push(t),this.checkLimit()},t.prototype.splice=function(t,e){this.data.splice(t,e)},t.prototype.getData=function(){return this.data.map(function(t){return t})},t.prototype.at=function(t){return this.data[t]},t.prototype.getLength=function(){return this.data.length},t.prototype.reset=function(){this.data=[]},t}();e.default=i}])});