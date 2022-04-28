import joi from 'joi';

enum Target {
    WEB = 'web',
    NODE = 'node',
}

function validateSync(obj) {
    const schema = joi.string().valid(Target.WEB, Target.NODE);

    const {error: e} = schema.validate(obj);
    if (e) {
        console.log(e);

        process.exit();
    }
}

function importDefault(p) {
    const mod = require(p);
    if (mod.__esModule) {
        return mod.default;
    }

    return mod;
}

export = function create(target: Target) {
    validateSync(target);

    if (target === Target.WEB) {
        importDefault('./web')(process.cwd());
    } else if (target === Target.NODE) {
        importDefault('./node')(process.cwd());
    }
};
