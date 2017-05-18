import { Request } from 'express';

export class Utils {
  public static getQSParam(name: string, url: string = null): string {
    if (!url) url = (typeof window !== 'undefined') ? window.location.search : '';
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    let results = regex.exec(url);
    if (!results || !results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  public static format(input: string, ...args: string[]) {
    return input.replace(/{(\d+)}/g, (match: string, num: number) => {
      return typeof args[num] !== 'undefined' ? args[num] : match;
    });
  }

  public static camelize(input: string) {
    return input.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
      return (index === 0) ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
  }

  public static bytesToSize(bytes: number, decimals: number = 1) {
    if (bytes === 0) return '0 Bytes';
    let sizes = ['Bytes', 'KB', 'MB'];
    let i = Math.floor(Math.log(bytes) / Math.log(1024));
    return parseFloat((bytes / Math.pow(1024, i)).toFixed(decimals)) + ' ' + sizes[i];
  }

  public static isRequestFromAdmin(req: Request) {
    return (req.header('referer').indexOf('/my/') > -1);
  }
}