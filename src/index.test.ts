import LimitedArray from './index';

let limitedArray;

test('Initialize LimitedArray', () => {
    limitedArray = new LimitedArray<number>({ limit: 20 });
    expect(limitedArray instanceof LimitedArray).toBe(true);
});

test('Check limit in LimitedArray', () => {
    expect(limitedArray.limit).toBe(20);
});

test('Add 20 items', () => {
    const INPUT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    INPUT.forEach(item => {
        limitedArray.add(item);
    });
    expect(limitedArray.getLength()).toBe(20);
    expect(limitedArray.at(3)).toBe(4);
});

test('Add extra item, first will be deleted', () => {
    limitedArray.add(50);
    expect(limitedArray.getLength()).toBe(20);
    expect(limitedArray.at(0)).toBe(2);
    expect(limitedArray.at(19)).toBe(50);
});

test('Add 3 extra items, first 3 will be deleted', () => {
    [100, 200, 300].forEach(item => {
        limitedArray.add(item);
    });
    expect(limitedArray.getLength()).toBe(20);
    expect(limitedArray.at(0)).toBe(5);
    expect(limitedArray.at(19)).toBe(300);
});

test('Reset limit to 10, first 10 will be deleted', () => {
    limitedArray.setLimit(10);
    expect(limitedArray.getLength()).toBe(10);
    expect(limitedArray.at(0)).toBe(15);
    expect(limitedArray.at(9)).toBe(300);
});

test('Add 3 extra items, first 3 will be deleted', () => {
    [500, 600, 700].forEach(item => {
        limitedArray.add(item);
    });
    expect(limitedArray.getLength()).toBe(10);
    expect(limitedArray.at(0)).toBe(18);
    expect(limitedArray.at(9)).toBe(700);
});

test('Reset array', () => {
    limitedArray.reset();
    expect(limitedArray.getLength()).toBe(0);
});