describe("About Higher Order Functions (about_higher_order_functions.js)", function () {

  it("should use filter to return array items that meet a criteria", function () {
    let numbers = [1, 2, 3];
    let odd = numbers.filter(function (x) { return x % 2 !== 0 });

    expect(odd).toEqual([1, 3]); // Odd numbers filtered
    expect(odd.length).toBe(2); // Two odd numbers
    expect(numbers.length).toBe(3); // Original array length is unchanged
  });

  it("should use 'map' to transform each element", function () {
    let numbers = [1, 2, 3];
    let numbersPlus1 = numbers.map(function(x) { return x + 1 });

    expect(numbersPlus1).toEqual([2, 3, 4]); // Each number incremented by 1
    expect(numbers).toEqual([1, 2, 3]); // Original array remains unchanged
  });

  it("should use 'reduce' to update the same result on each iteration", function () {
    let numbers = [1, 2, 3];
    let reduction = numbers.reduce(
      function(memo, x) { return memo + x }, 0);

    expect(reduction).toBe(6); // Sum of all elements
    expect(numbers).toEqual([1, 2, 3]); // Original array remains unchanged
  });

  it("should use 'forEach' for simple iteration", function () {
    let numbers = [1, 2, 3];
    let msg = "";
    let isEven = function (item) {
      msg += (item % 2) === 0;
    };

    numbers.forEach(isEven);

    expect(msg).toEqual("falsetruefalse"); // String representing even check for each item
    expect(numbers).toEqual([1, 2, 3]); // Original array remains unchanged
  });

  it("should use 'every' to test whether all items pass condition", function () {
    let onlyEven = [2, 4, 6];
    let mixedBag = [2, 4, 5, 6];

    let isEven = function(x) { return x % 2 === 0 };

    expect(onlyEven.every(isEven)).toBe(true); // All numbers in `onlyEven` are even
    expect(mixedBag.every(isEven)).toBe(false); // Not all numbers in `mixedBag` are even
  });

  it("should use 'some' to test if any items pass condition", function () {
    let onlyEven = [2, 4, 6];
    let mixedBag = [2, 4, 5, 6];

    let isEven = function(x) { return x % 2 === 0 };

    expect(onlyEven.some(isEven)).toBe(true); // Some items (in fact all) are even
    expect(mixedBag.some(isEven)).toBe(true); // At least one item is even
  });

  it("should use flatten to make nested arrays easy to work with", function() {
    expect([ [1, 2], [3, 4] ].flat()).toEqual([1, 2, 3, 4]); // Flattened array
  });

  it("should use flat() ... reduce() to use multiple higher order functions", function() {
    let result = [ [0, 1], 2 ].flat()
      .map(function(x) { return x + 1 })
      .reduce(function (sum, x) { return sum + x });

    expect(result).toEqual(6); // [0+1, 1+1, 2+1] -> [1, 2, 3], sum is 6
  });

});


