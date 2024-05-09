//Import necessary packages and SVG shape rendering page
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const { Circle, Square, Triangle } = require(`./lib/shapes`);

function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter the text for your logo. (Maximum 3 characters)",
        name: "text",
      },
      {
        type: "input",
        message:
          "Please enter a color for your text using a color keyword OR hexidecimal color code",
        name: "textColor",
      },
      {
        type: "list",
        message: "Please select a shape for your logo.",
        choices: ["Circle", "Square", "Triangle"],
        name: "shape",
      },
      {
        type: "input",
        message:
          "Please enter a color for your shape using a color keyword OR hexidecimal color code",
        name: "shapeColor",
      },
    ])
    .then((response) => {
      if (response.text.length > 3) {
        console.log("Your text can be no more than 3 characters");
        init();
      } else writeToFile("logo.svg", response);
    });
}

function writeToFile(name, userInput) {
  let svgCode = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 400 400" style="enable-background:new 0 0 400 400;" xml:space="preserve">`;

  let userShape;
  if (userInput.shape === "Circle") {
    userShape = new Circle();
    svgCode += `<circle cx="150" cy="150" r="75" fill="${userInput.shapeColor}" />`;
  } else if (userInput.shape === "Square") {
    userShape = new Square();
    svgCode += `<rect x="75" y="75" width="150" height="150" fill="${userInput.shapeColor}" />`;
  } else {
    userShape = new Triangle();
    svgCode += `<polygon points="150 50, 250 200, 50 200" fill="${userInput.shapeColor}" />`;
  }

  svgCode += `<text x="150" y="155" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="${userInput.textColor}">${userInput.text}</text>`;

  svgCode += `</svg>`;

  fs.writeFile(name, svgCode, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}

init();
