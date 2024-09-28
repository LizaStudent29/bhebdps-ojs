describe("About Scope (about_scope.js)", function() {
  thisIsAGlobalVariable = 77; // Defining a global variable

  it("global variables", function() {
    // is thisIsAGlobalVariable defined in this scope?
    expect(thisIsAGlobalVariable).toBe(77); // Checks the global variable's value
  });

  it("variables declared inside of a function", function() {
    let outerVariable = "outer"; // Declaring an outer variable

    // this is a self-invoking function. Notice that it calls itself at the end ().
    (function() {
      let innerVariable = "inner"; // Declaring an inner variable
      // is outerVariable defined in this scope?
      expect(outerVariable).toBe("outer"); // The outer variable is accessible
      // is innerVariable defined in this scope?
      expect(innerVariable).toBe("inner"); // The inner variable is accessible
    })();

    // is outerVariable defined in this scope?
    expect(outerVariable).toBe("outer"); // The outer variable is still accessible
    // is innerVariable defined in this scope?
    expect(typeof(innerVariable)).toBe("undefined"); // The inner variable is not accessible outside
  });
});

