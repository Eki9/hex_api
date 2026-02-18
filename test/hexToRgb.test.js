const { expect } = require('chai');
const hexToRgb = require('../utils/hexToRgb');

describe('hexToRgb function', () => {

  it('should convert valid hex to RGB', () => {
    const result = hexToRgb('#FFFFFF');
    expect(result).to.deep.equal({ r: 255, g: 255, b: 255 });
  });

  it('should throw error for invalid hex', () => {
    expect(() => hexToRgb('XXXXXX')).to.throw('Invalid hex color');
  });

});
