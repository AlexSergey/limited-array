# LimitedArray

This is data structure very similar to the queue.

```js
let limitedArray = new LimitedArray({ limit : 20});

limitedArray.add(0);
limitedArray.add(1);
...
limitedArray.add(21);
// first element will be deleted, second element will be first
console.log(limitedArray.at(0) === 1) // true
```