var Milkcocoa = require('milkcocoa');
var milkcocoa = new Milkcocoa('flagiodjdk8y.mlkcca.com');
var ds = milkcocoa.dataStore('messages');

// すでにあるデータを取得
ds.stream().next(function(err, data) {
    console.log(data); // ? data is Array
});

// イベントlisten
ds.on('push', function() {
    console.log(arguments);
});

// push
ds.push({hoge:'fuga'});

