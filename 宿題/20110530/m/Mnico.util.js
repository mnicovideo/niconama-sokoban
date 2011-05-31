/**
 * mのネームスペース
 */
var Mnico = {};

/**
 * ユーティリティ
 */
Mnico.util = {
    isNumber:function(o){
            return typeof(o)==='number';
        },
    isString:function(o){
            return typeof(o)==='string';
        },
    isBoolean:function(o){
            return typeof(o)==='boolean';
        },
    isFunction:function(o){
            return typeof(o)==='function';
        },
    isUndefined:function(o){
            return typeof(o)==='undefined';
        },
    isObject:function(o){
            return typeof(o)==='object';
        },
    isArray:function(o){
            return this.kind(o)==='array';
        },
    isNull:function(o){
            return this.kind(o)==='null';
        },
    kind:function(o){
            if(this.isNumber(o))
                return 'number';
            if(this.isString(o))
                return 'string';
            if(this.isBoolean(o))
                return 'boolean';
            if(this.isFunction(o))
                return 'function';
            if(this.isUndefined(o))
                return 'undefined';
            if(o instanceof Array)
                return 'array';
            if(o===null)
                return 'null';
            if(this.isObject(o))
                return 'object';
            return 'unknown';
        }
};

//テスト
var x = {
    'number'    :"0",
    'string'    :"'a'",
    'boolean'   :"true",
    'function'  :"function(){}",
    'undefined' :"",
    'object'    :"{}",
    'array'     :"[]",
    'null'      :"null"
};
for(var p in x){
    console.log(p);
    for(var m in Mnico.util){
        var f = 'Mnico.util.'+m+'('+x[p]+')';
        console.log(f+':', eval(f));
    }
}






