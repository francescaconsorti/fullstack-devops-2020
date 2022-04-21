import { HSL, HEX } from 'color-convert/conversions';
import chai from 'chai';
import {convert} from './Service';

chai.config.includeStack = true;
const should = chai.should();

describe('test suite description', () => {
    //testData.forEach((test) => {
        it(`test case description`, () => {
            const input: HSL = [0, 0, 100];
            const expected: HEX = "FFFFFF";
            convert(input).should.deep.equal(expected);
        });
   // });
});
