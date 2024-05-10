//Import necessary packages and SVG shape rendering page
const inquirer = require(`inquirer`);
const writeToFile = require(`./lib/svgrender`);

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
};

init();
