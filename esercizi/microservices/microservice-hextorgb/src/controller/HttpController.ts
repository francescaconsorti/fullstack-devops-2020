import { RGB, HEX } from 'color-convert/conversions';
import {convert} from '../service/Service';
import {Express} from 'express';

class HttpController {
    constructor(server: Express) {
        server.get('/', (req, res) => {
            const color:HEX = req.query.color as string ;
            const convertedColor: RGB = convert(color);

            res.send({inputHEX:color, outputRGB:convertedColor});
        });
    }
}

export default HttpController;
