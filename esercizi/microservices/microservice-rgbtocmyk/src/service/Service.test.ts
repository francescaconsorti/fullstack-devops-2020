import { RGB, CMYK } from 'color-convert/conversions';
import chai from 'chai';
import {convert} from './Service';

chai.config.includeStack = true;
const should = chai.should();

describe('test suite description', () => {
    //testData.forEach((test) => {
        it(`test case description`, () => {
            const input: RGB = [255, 255, 255];
            const expected: CMYK = [0,0,0,0]; 
            convert(input).should.deep.equal(expected);
        });
   // });
});
