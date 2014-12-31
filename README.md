node-chepiao-sdk
---

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

## License

The MIT License
