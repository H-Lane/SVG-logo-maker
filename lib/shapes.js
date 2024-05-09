class Color {
    constructor(color) {
        this.color = ""
    }
    testColor(colorOption) {this.color = colorOption;} 
};

class Circle extends Color {
    render() {
        return `<circle cx="150" cy="150" r="75" fill="${this.color}" />`;
}};

class Square extends Color {
    render() {
        return `<rect x="75" y="75" width="150" height="150" fill="${this.color}" />`
}};

class Triangle extends Color {
    render() {
        return `<polygon points="150 50, 250 200, 50 200" fill="${this.color}" />`
}};

module.exports = {Circle, Square, Triangle};