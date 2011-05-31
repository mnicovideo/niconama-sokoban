
// 判定の順序は、処理速度の速い順です（多分
function getType(object) {
    if(object === null) {
        return 'null';
    }
    var type = typeof(object);
    switch(type) {
    case 'undefined':
        return 'undefined';
    case 'boolean':
        return 'boolean';
    case 'string':
        return 'string';
    case 'number':
        return 'number';
    default:
        break;
    }
    // 配列
    if(object instanceof Array) {
        return 'array';
    }
    // 正規表現
    if(object instanceof RegExp) {
        return 'regexp';
    }
    if(object instanceof Date) {
        return 'date';
    }
    switch(type) {
    case 'function':
        return 'function';
    case 'object':
        return 'object';
    default:
        break;    
    }
    return 'unknown';
}

// warning! warning!
// This program don't check chrome.
// すいません、時間ないのでとりあえずやってみたｗ
// test program
var hoge = 3;
console.log(getType(hoge)); // result ... number
hoge = 'test';              
console.log(getType(hoge)); // result ... string
hoge = true;
console.log(getType(hoge)); // result ... boolean



