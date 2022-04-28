import babel from 'babel-jest';
import babelConfig from './babel.config';
const {createTransformer} = babel;

const transformer = {
    ...createTransformer!(babelConfig),
};

export = transformer;
