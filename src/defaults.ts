import path from 'path';
import {Config} from '@jest/types';

export default function createConfig(): Config.InitialOptions {
    return {
        rootDir: './',
        cacheDirectory: '<rootDir>/test/.cache',
        moduleFileExtensions: ['js', 'json'],
        // transformIgnorePatterns: ['/node_modules/'],
        moduleNameMapper: {
            '^@/(.*)$': '<rootDir>/src/$1',
        },
        // testEnvironment: 'node', // default: node
        // testMatch: ['**/test/**/*.spec.[jt]s?(x)', '**/__test__/*.[jt]s?(x)'], // default: [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ]
        watchPlugins: [
            require.resolve('jest-watch-typeahead/filename'),
            require.resolve('jest-watch-typeahead/testname'),
        ],
        collectCoverageFrom: ['src/**/*.js'],
        coverageDirectory: '<rootDir>/coverage',
        coverageReporters: ['json', 'lcov', 'text', 'clover'],
        coverageThreshold: {
            global: {
                branches: 80,
                functions: 80,
                lines: 80,
                statements: 80,
            },
        },
        // globalSetup: path.resolve(__dirname, './setup.js'),
    };
}
