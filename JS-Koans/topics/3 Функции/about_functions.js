describe("About Functions (about_functions.js)", function() {

  it("should declare functions", function() {

    function add(a, b) {
      return a + b;
    }

    expect(add(1, 2)).toBe(3); // 1 + 2 = 3
  });

  it("should know internal variables override outer variables", function () {
    let message = "Outer";

    function getMessage() {
      return message; // accesses the outer message variable
    }

    function overrideMessage() {
      let message = "Inner"; // declares an inner message variable
      return message; // accesses the inner message variable
    }

    expect(getMessage()).toBe("Outer"); // returns the outer variable
    expect(overrideMessage()).toBe("Inner"); // returns the inner variable
    expect(message).toBe("Outer"); // the outer variable is unchanged
  });

  it("should have lexical scoping", function () {
    let variable = "top-level";
    function parentfunction() {
      let variable = "local"; // declares a local variable
      function childfunction() {
        return variable; // accesses the local variable
      }
      return childfunction();
    }
    expect(parentfunction()).toBe("local"); // returns the local variable
  });

  it("should use lexical scoping to synthesize functions", function () {

    function makeMysteryFunction(makerValue){
      let newFunction = function doMysteriousThing(param){
        return makerValue + param; // uses the outer variable
      };
      return newFunction;
    }

    let mysteryFunction3 = makeMysteryFunction(3);
    let mysteryFunction5 = makeMysteryFunction(5);

    expect(mysteryFunction3(10) + mysteryFunction5(5)).toBe(23); // (3 + 10) + (5 + 5) = 18
  });

  it("should allow extra function arguments", function () {

    function returnFirstArg(firstArg) {
      return firstArg; // returns the first argument
    }

    expect(returnFirstArg("first", "second", "third")).toBe("first"); // returns "first"

    function returnSecondArg(firstArg, secondArg) {
      return secondArg; // returns the second argument
    }

    expect(returnSecondArg("only give first arg", "second")).toBe("second"); // returns "second"

    function returnAllArgs() {
      let argsArray = [];
      for (let i = 0; i < arguments.length; i += 1) {
        argsArray.push(arguments[i]);
      }
      return argsArray.join(",");
    }

    expect(returnAllArgs("first", "second", "third")).toBe("first,second,third"); // returns joined arguments
  });

  it("should pass functions as values", function () {

    let appendRules = function (name) {
      return name + " rules!"; // appends " rules!" to the name
    };

    let appendDoubleRules = function (name) {
      return name + " totally rules!"; // appends " totally rules!" to the name
    };

    let praiseSinger = { givePraise: appendRules };
    expect(praiseSinger.givePraise("John")).toBe("John rules!"); // returns "John rules!"

    praiseSinger.givePraise = appendDoubleRules;
    expect(praiseSinger.givePraise("Mary")).toBe("Mary totally rules!"); // returns "Mary totally rules!"
  });
});

