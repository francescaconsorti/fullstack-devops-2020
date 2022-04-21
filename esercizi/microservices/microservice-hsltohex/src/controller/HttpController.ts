import { HSL,HEX  } from 'color-convert/conversions';
import {convert} from '../service/Service';
import {Express} from 'express';

class HttpController {
    constructor(server: Express) {
        server.get('/', (req, res) => {
            const color: HSL = JSON.parse(req.query.color as string);
            const convertedColor: HEX = convert(color);

            res.send(convertedColor);
        });
    }
}

export default HttpController;
