import fs from 'fs';
import path from 'path';

export function tryTSConfig(context: string = process.cwd()): boolean {
    const tsconfig = path.relative(context, 'tsconfig.json');

    return fs.existsSync(tsconfig) && fs.statSync(tsconfig).isFile();
}
