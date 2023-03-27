// We placed common functionality and properties shared by the Triangle, Circle, and Square classes 
//in a parent Shape class and use inheritance to reuse the code in the child classes.

class Shape {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.shape = shape;
    }
    renderTxt() { return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>` }
};

class Triangle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    renderTxt() { return `<text x="150" y="170" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>` }
    renderShape() { return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />` }
};

class Circle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    renderShape() { return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />` }
};

class Square extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    renderShape() { return `<rect x="70" y="35" width="150" height="150" fill="${this.shapeColor}" />` }
};

module.exports = { Shape, Triangle, Circle, Square };