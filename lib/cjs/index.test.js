"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
var limitedArray;
test('Initialize LimitedArray', function () {
    limitedArray = new index_1.default({ limit: 20 });
    expect(limitedArray instanceof index_1.default).toBe(true);
});
test('Check limit in LimitedArray', function () {
    expect(limitedArray.limit).toBe(20);
});
test('Add 20 items', function () {
    var INPUT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    INPUT.forEach(function (item) {
        limitedArray.add(item);
    });
    expect(limitedArray.getLength()).toBe(20);
    expect(limitedArray.at(3)).toBe(4);
});
test('Add extra item, first will be deleted', function () {
    limitedArray.add(50);
    expect(limitedArray.getLength()).toBe(20);
    expect(limitedArray.at(0)).toBe(2);
    expect(limitedArray.at(19)).toBe(50);
});
test('Add 3 extra items, first 3 will be deleted', function () {
    [100, 200, 300].forEach(function (item) {
        limitedArray.add(item);
    });
    expect(limitedArray.getLength()).toBe(20);
    expect(limitedArray.at(0)).toBe(5);
    expect(limitedArray.at(19)).toBe(300);
});
test('Reset limit to 10, first 10 will be deleted', function () {
    limitedArray.setLimit(10);
    expect(limitedArray.getLength()).toBe(10);
    expect(limitedArray.at(0)).toBe(15);
    expect(limitedArray.at(9)).toBe(300);
});
test('Add 3 extra items, first 3 will be deleted', function () {
    [500, 600, 700].forEach(function (item) {
        limitedArray.add(item);
    });
    expect(limitedArray.getLength()).toBe(10);
    expect(limitedArray.at(0)).toBe(18);
    expect(limitedArray.at(9)).toBe(700);
});
test('Reset array', function () {
    limitedArray.reset();
    expect(limitedArray.getLength()).toBe(0);
});
