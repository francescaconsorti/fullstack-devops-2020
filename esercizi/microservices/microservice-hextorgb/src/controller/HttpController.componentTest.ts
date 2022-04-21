import { RGB } from 'color-convert/conversions';
import chai from 'chai';
import chaiHttp from 'chai-http';
import * as config from '../../server-config.json'

chai.config.includeStack = true;
const should = chai.should();
chai.use(chaiHttp);

type testType = {
    input: string,
    expected: {rgb: number[]}
}

const testData: testType[] = [
    {input: 'ffffff', expected: {rgb:[255,255,255]}},
    {input: '000000', expected: {rgb:[0,0,0]}},
    {input: 'ff0000', expected: {rgb:[255,0,0]}},
    {input: '00ff00', expected: {rgb:[0,255,0]}},
    {input: '0000ff', expected: {rgb:[0,0,255]}},
    {input: 'ffff00', expected: {rgb:[255,255,0]}},
    {input: '00ffff', expected: {rgb:[0,255,255]}}


]

describe('REST API test suite description', () => {
    const url = process.env.npm_config_rgb2hex_test_url || `http://localhost:${config.port}`;
    console.log('Test URL: ' + url);

    testData.forEach((test) => {
        it(`test case description`, (done) => {
            chai.request(url)
                .get('/')
                .query(`color=${test.input}`)
                .end((err, res) => {
                    should.not.exist(err);
                    res.should.have.status(200);
                    res.body.should.deep.equal(test.expected);
                    done();
                });
        });
    });
});
