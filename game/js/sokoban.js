//ゲームの本体
(function(global){

    /**
     * ゲームの本体オブジェクト
     */
    var Sokoban = global.Sokoban = function(element, level){

        //レベル設定
        this.level = level || this.level || 0;

        //ゲームスタート
        this.start = function(){
            $(element).empty().append(Sokoban.Field.create(this.level));
            return this;
        };

        //メソッドチェーン
        return this;

    };

})(this);
