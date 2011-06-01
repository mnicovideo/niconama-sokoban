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
    Field.map = [];

    /**
     * ゲーム画面の作成
     */
    Field.create = function(){
        var i, ii, mapElement, tr, s;
        mapElement = $('<table>',{'class':'sokoban'}).append('<tbody>');
        for(i=0; i<Field.map[Game.level].length; i++){
            tr = $('<tr>');
            s = String(Field.map[Game.level][i][0]);
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