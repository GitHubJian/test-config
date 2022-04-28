import deepmerge from 'deepmerge';
import {Config} from '@jest/types';
import defaults from './defaults';
import {tryTSConfig} from './util';

export default function (context: string): Config.InitialOptions {
    const options = deepmerge(defaults(), {
        displayName: {
            name: 'NODE',
            color: 'blue',
        },
    });

    if (tryTSConfig(context)) {
        return deepmerge(options, {
            globals: {
                'ts-jest': {
                    babelConfig: false,
                    tsconfig: 'tsconfig.test.json',
                },
            },
            moduleFileExtensions: ['ts'],
            transform: {
                '^.+\\.ts$': require.resolve('ts-jest'),
            },
            collectCoverageFrom: ['src/**/*.ts', '!**/*.d.ts', '!**/d.ts'],
        });
    }

    return options;
}
