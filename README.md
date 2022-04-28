# 简易的 jest 配置

每次都需要一大堆的配置，而且都是重复的配置，所以提供一个开发阶段通用的配置

## 快速开始

```
npm i -D yma-test-config
```

## 使用

```js
// 在 jest.config.js 中进行配置
const create = require('yma-test-config');

module.exports = {
    ...create('node'),
};
```

```json
{
    "scripts": {
        "test": "jest"
    }
}
```
