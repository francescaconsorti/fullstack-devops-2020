import colorConverter from 'color-convert'
import { HSL, HEX } from 'color-convert/conversions';



export function convert(color: HSL): HEX {
    const colorToConvert: HSL = color;
    const convertedColor: HEX = colorConverter.hsl.hex(colorToConvert);
    return convertedColor;
}