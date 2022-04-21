import chai from 'chai';
import {convert} from './Service';

chai.config.includeStack = true;
const should = chai.should();

describe('test suite description', () => {
    //testData.forEach((test) => {
        it(`test case description`, () => {
            const input = '#ffffff';
            convert(input).should.deep.equal([255,255,255]);
        });
   // });
});
