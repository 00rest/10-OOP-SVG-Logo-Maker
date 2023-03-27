// Includes packages needed for this application
const { Shape, Triangle, Circle, Square } = require('./shapes');

// A test that checks if componenmts return expected values.
describe('Shapes', () => {
  
    describe('Shape text', () => {
    it('should return text: AMG in silver color fill', () => {
      const shape = new Shape('AMG', 'silver');
      expect(shape.renderTxt()).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="silver">AMG</text>');
    });
  });

  describe('Triangle color', () => {
    it('should return blue color fill for a Triangle', () => {
        const shape = new Triangle('', '', '',"blue");
      expect(shape.renderShape()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  });

  describe('Circle text', () => {
    it('should return text: MGM in the circle shape', () => {
        const shape = new Circle('MGM', 'pink', '','');
      expect(shape.renderTxt()).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="pink">MGM</text>');
    });
  });

  describe('Square shape attribute', () => {
    it('should return text: MGM in the circle shape', () => {
        const shape = new Square('', '', 'Square','');
      expect(shape.shape).toEqual('Square');
    });
  });
});
