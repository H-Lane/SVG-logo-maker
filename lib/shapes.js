class Color {
    constructor(color) {
        this.color = color
    }
    userColor(colorOption) {this.color = colorOption;} 
};

class Circle extends Color {
    render() {
         `<circle cx="150" cy="100" r="75" fill="${this.color}" />`;
}};

class Square extends Color {
    render() {
        `<rect x="50" y="50" width="100" height="100" fill="${this.color}" />`
}};

class Triangle extends Color {
    render() {
        `<polygon points="150,20 100,150 100,150" fill="${this.color}" />`
}};

module.exports = {Circle, Square, Triangle}