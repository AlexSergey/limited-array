"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LimitedArray = /** @class */ (function () {
    function LimitedArray(props) {
        this.data = [];
        this.limit = 0;
        this.limit = (props && typeof props.limit === 'number') ? Math.abs(props.limit) : 10;
    }
    LimitedArray.prototype.setLimit = function (limit) {
        this.limit = (limit && typeof limit === 'number') ? Math.abs(limit) : this.limit;
        return this.checkLimit();
    };
    LimitedArray.prototype.checkLimit = function () {
        var _this = this;
        var diff = this.data.length - this.limit;
        if (diff <= 0) {
            return false;
        }
        var l = Array(diff).fill(0);
        l.forEach(function () {
            _this.data.shift();
        });
        return true;
    };
    LimitedArray.prototype.add = function (data) {
        this.data.push(data);
        return this.checkLimit();
    };
    LimitedArray.prototype.splice = function (from, to) {
        this.data.splice(from, to);
    };
    LimitedArray.prototype.getData = function () {
        return this.data.map(function (item) { return item; });
    };
    LimitedArray.prototype.at = function (index) {
        return this.data[index];
    };
    LimitedArray.prototype.getLength = function () {
        return this.data.length;
    };
    LimitedArray.prototype.reset = function () {
        this.data = [];
    };
    return LimitedArray;
}());
exports.default = LimitedArray;
