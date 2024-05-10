const fs = require(`fs`);
const { Circle, Square, Triangle } = require(`./shapes`);

function writeToFile(name, userInput) {
    let svgCode = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 400 400" style="enable-background:new 0 0 400 400;" xml:space="preserve">`;
  
    if (userInput.shape === "Circle") {
      const shape = new Circle(userInput.shapeColor);
      svgCode += shape.render();
    } else if (userInput.shape === "Square") {
      const shape = new Square(userInput.shapeColor);
      svgCode += shape.render();
    } else {
      const shape = new Triangle(userInput.shapeColor);
      svgCode += shape.render();
    };
  
    svgCode += `<text x="150" y="155" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="${userInput.textColor}">${userInput.text}</text>`;
  
    svgCode += `</svg>`;
  
    fs.writeFile(name, svgCode, (err) => {
      err ? console.log(err) : console.log("Generated logo.svg");
    });
  };

  module.exports = writeToFile;