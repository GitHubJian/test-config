import path from 'path';
import deepmerge from 'deepmerge';
import {Config} from '@jest/types';
import defaults from '../defaults';
import {tryTSConfig} from '../util';

export default function (context: string): Config.InitialOptions {
    const options = deepmerge(defaults(), {
        displayName: {
            name: 'CLIENT',
            color: 'blue',
        },
        globals: {
            'vue-jest': {
                babelConfig: require('./babel.config'),
                tsConfig: 'tsconfig.test.json',
                resources: {
                    less: [],
                },
            },
        },
        moduleFileExtensions: ['jsx', 'vue'],
        transform: {
            '^.+\\.vue$': require.resolve('vue-jest'),
            '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
                require.resolve('jest-transform-stub'),
            '^.+\\.jsx?$': require.resolve('./babel-jest'),
        },
        testEnvironment: 'jest-environment-jsdom-fifteen',
        snapshotSerializers: ['jest-serializer-vue'],
        testURL: 'http://localhost',
        collectCoverageFrom: ['src/**/*.vue'],
        globalSetup: path.resolve(__dirname, './setup.js'),
        testMatch: ['<rootDir>/test/**/*.spec.js'],
    });

    if (tryTSConfig(context)) {
        return deepmerge(options, {
            globals: {
                'ts-jest': {
                    // babelConfig: require('./babel.config'),
                    babelConfig: false,
                    tsconfig: 'tsconfig.test.json',
                },
            },
            moduleFileExtensions: ['ts', 'tsx'],
            transform: {
                '^.+\\.tsx?$': require.resolve('ts-jest'),
            },
            collectCoverageFrom: ['src/**/*.ts', '!**/*.d.ts', '!**/d.ts'],
            testMatch: ['<rootDir>/test/**/*.spec.ts'],
        });
    }

    return options;
}
