//ゲームの本体
(function(global){
    /**
     * ゲームの本体オブジェクト
     */
    var Sokoban = global.Sokoban = function(e){
        $(e).append(Sokoban.Field.create());
    };
    Sokoban.level = 0;
})(this);
