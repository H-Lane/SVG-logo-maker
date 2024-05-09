const { Circle, Square, Triangle } = require(`./shapes.js`);

describe("Circle Test", () => {
  test("a circle with a black fill color", () => {
    const shape = new Circle();
    shape.testColor("black");
    expect(shape.render()).toEqual(
      `<circle cx="150" cy="150" r="75" fill="black" />`
    );
  });
});

describe("Square Test", () => {
  test("a square with a black fill color", () => {
    const shape = new Square();
    shape.testColor("black");
    expect(shape.render()).toEqual(
      `<rect x="75" y="75" width="150" height="150" fill="black" />`
    );
  });
});

describe("Triangle Test", () => {
  test("a triangle with a black fill color", () => {
    const shape = new Triangle();
    shape.testColor("black");
    expect(shape.render()).toEqual(
      `<polygon points="150 50, 250 200, 50 200" fill="black" />`
    );
  });
});
