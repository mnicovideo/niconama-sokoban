//ゲーム画面関係
(function(global){
    var Game = global.Sokoban;

    /**
     * ゲーム画面オブジェクト
     */
    Field = Game.Field = {};

    /**
     * レベル毎の画面表示内容
     */
    Field.Map = {};

    /**
     * マップデータを定義ファイルから取得
     **/
    Field.Map.get = function(level) {
        /**
         * 定義ファイルの読み込み
         **/
        $.ajax({
            'url'       : 'map/level'+level+'.json',
            'async'     : false,
            'dataType'  : 'json',
            'success'   : function(json){Field.Map.data = json.data;}
        });
    };

    /**
     * ゲーム画面の作成
     */
    Field.create = function(level){
        var i, ii, mapElement, tr, s;

        //ゲーム画面のhtml要素。骨格。
        mapElement = $('<table>',{'class':'sokoban'}).append('<tbody>');

        //マップデータの取得
        Field.Map.get(level);

        //マップデータを元にゲーム画面要素を生成
        for(i=0; i<Field.Map.data.length; i++){
            tr = $('<tr>');
            s = Field.Map.data[i];
            for(ii=0; ii<s.length; ii++)
                switch(s.substr(ii,1)){
                    case ' ' : tr.append( $('<td>',{'class':'empty'}) ); break;
                    case '#' : tr.append( $('<td>',{'class':'wall'}) ); break;
                    case '*' : tr.append( $('<td>',{'class':'exit'}) ); break;
                }
            mapElement.append(tr);
        }
        return mapElement;
    };

})(this);