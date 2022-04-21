import { RGB } from 'color-convert/conversions';
import chai from 'chai';
import chaiHttp from 'chai-http';
import * as config from '../../server-config.json'

chai.config.includeStack = true;
const should = chai.should();
chai.use(chaiHttp);

type testType = {
    input: string,
    expected: {inputHEX:string, outputRGB:number[]}
}

const testData: testType[] = [
    {input: 'ffffff', expected: {inputHEX:'ffffff', outputRGB:[255,255,255]}},
    {input: '000000', expected: {inputHEX:'000000', outputRGB:[0,0,0]}},
    {input: 'ff0000', expected: {inputHEX:'ff0000',  outputRGB:[255,0,0]}},
    {input: '00ff00', expected: {inputHEX:'00ff00', outputRGB:[0,255,0]}},
    {input: '0000ff', expected: {inputHEX:'0000ff', outputRGB:[0,0,255]}},
    {input: 'ffff00', expected: {inputHEX:'ffff00', outputRGB:[255,255,0]}},
    {input: '00ffff', expected: {inputHEX:'00ffff', outputRGB:[0,255,255]}}


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
