const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');

describe('GET /api/hex-to-rgb/:hex', () => {

  it('should return RGB object for valid hex', async () => {
    const res = await request(app)
      .get('/api/hex-to-rgb/FFFFFF');

    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({ r: 255, g: 255, b: 255 });
  });

  it('should return 400 for invalid hex', async () => {
    const res = await request(app)
      .get('/api/hex-to-rgb/XXXXXX');

    expect(res.status).to.equal(400);
  });

});

