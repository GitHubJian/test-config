import {JSDOM} from 'jsdom';

export default function (): void {
    const DEFAULT_HTML = '<html><body><div id="app"></div></body></html>';

    const jsdom = new JSDOM(DEFAULT_HTML);
    // @ts-ignore
    global.jsdom = jsdom;
    global.window = jsdom.window as unknown as Window & typeof globalThis;
}
