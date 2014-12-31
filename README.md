node-chepiao-sdk
---

[![NPM version][npm-image]][npm-url]
[![David deps][david-image]][david-url]

[npm-image]: https://img.shields.io/npm/v/chepiao-sdk.svg?style=flat
[npm-url]: https://npmjs.org/package/chepiao-sdk
[david-image]: https://img.shields.io/david/SFantasy/node-chepiao-sdk.svg?style=flat
[david-url]: https://david-dm.org/SFantasy/node-chepiao-sdk

[![NPM](https://nodei.co/npm/chepiao-sdk.png?downloads&downloadRank)](https://nodei.co/npm/chepiao-sdk/)

Node.js SDK for [chepiao100.com](//www.chepiao100.com).

## Install

```sh
npm install chepiao-sdk --save
```

## Usage

1. Register and get your `userid` and `seckey`: [chepiao100.com](http://www.chepiao100.com/my/key.html)
2. Initialize the SDK

    ```js
    var Chepiao = require('chepiao-sdk');
    var chepiao = new Chepiao({
        userid: 'your userid',
        seckey: 'your secret key'
    });
    ```
3. Use the API

    ```js
    chepiao.schedule('g1', function (res) {
        // do stuff with the response
    });
    ```

## API

- Train schedule

```js
chepiao.schedule(number, callback);
```

- Query tickets

```js
chepiao.leftTickets(date, startStation, arriveStation, callback);
```

## License

The MIT License
