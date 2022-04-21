import chai from 'chai';
import {convert} from './Service';
import { CMYK, HSL } from 'color-convert/conversions';

chai.config.includeStack = true;
const should = chai.should();

describe('test suite description', () => {
    //testData.forEach((test) => {
        it(`test case description`, () => {
            const input: CMYK = [0,0,0,0];
            const output: HSL = [0, 0, 100];
            convert(input).should.deep.equal(output);
        });
   // });
});
