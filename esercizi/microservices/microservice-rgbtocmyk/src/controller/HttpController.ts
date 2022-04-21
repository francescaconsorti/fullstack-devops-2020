import { RGB, CMYK } from 'color-convert/conversions';
import {convert} from '../service/Service';
import {Express} from 'express';

type RGBType = {
    r: number,
    g: number,
    b: number
}
class HttpController {
    constructor(server: Express) {
        server.get('/', (req, res) => {
            const stringcolor: RGBType =JSON.parse(req.query.color as string);
            const color:RGB = [stringcolor.r, stringcolor.g, stringcolor.b];
            const convertedColor: CMYK = convert(color);

            res.send({inputRGB:color, outputCMYK:convertedColor});
        });
    }
}

export default HttpController;
