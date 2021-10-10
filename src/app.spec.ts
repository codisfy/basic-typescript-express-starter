// @ts-nocheck
import request from 'supertest';
import app from './app';


describe('server', () => {


  it('should load the frontend', (done: (arg0: any) => void) => {
    request(app)
      .get('/')
      .expect(200, (e: any) => done(e));
  });

 
});
