import numeral from 'numeral';

// Function to format a number with default numeral formatting
export function fNumber(number: number | string): string {
    return numeral(number).format();
}

// Function to format a number as currency
export function fCurrency(number: number | string): string {
    const format = number ? numeral(number).format('$0,0.00') : '';
    return result(format, '.00');
}

// Function to format a number as percentage
export function fPercent(number: number | string): string {
    const format = number ? numeral(Number(number) / 100).format('0.0%') : '';
    return result(format, '.0');
}

// Function to shorten a large number
export function fShortenNumber(number: number | string): string {
    const format = number ? numeral(number).format('0.00a') : '';
    return result(format, '.00');
}

// Function to format data size
export function fData(number: number | string): string {
    const format = number ? numeral(number).format('0.0 b') : '';
    return result(format, '.0');
}

// Helper function to remove a specific substring from the format string
function result(format: string, key = '.00'): string {
    const isInteger = format.includes(key);
    return isInteger ? format.replace(key, '') : format;
}
