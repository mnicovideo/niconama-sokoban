//ゲームの本体
(function(global){

    var Sokoban = global.Sokoban = $.sub();

    Sokoban.fn._level = 0;
    Sokoban.fn.game = null;

    Sokoban.fn.level = function(l){
        if(l!==undefined)
            this._level = l;
        else
            return this._level;
        return this;
    };

    Sokoban.fn.start = function(){
        Sokoban.fn.game = this;
        $(this).empty().append(this.Field.create(this._level));
    };

})(this);
