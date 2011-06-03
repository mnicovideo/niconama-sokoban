//ゲーム画面関係
(function(global){
    var Sokoban = global.Sokoban;

    /**
     * ゲーム画面オブジェクト
     */
    Sokoban.fn.Field = {

        Map : {
            data: null,
            set : function(level){
                this.data = null;
                $.ajax({
                    'async'     : false,
                    'url'       : 'map/level'+level+'.json',
                    'dataType'  : 'json',
                    'success'   : function(json){Sokoban.fn.Field.Map.data = json.data;},
                    'error'     : function(xhr, status, errorThrown){}
                });
            },
            //TODO ゲームマップを構成しているtableからjsonを構築する
            //     ゲームマップエディタ用
            get : function(){
                console.log('not impliment yat.'+Sokoban.fn.game);
                return {};
            }
        },

        create : function(level){
            var i, ii, mapElement, tr, s, map = this.Map;
            map.set(level);
            mapElement = $('<table>',{'class':'sokoban'}).append('<tbody>');
            for(i=0; i < map.data.length; i++){
                tr = $('<tr>');
                s = map.data[i];
                for(ii=0; ii < s.length; ii++)
                    switch(s.substr(ii,1)){
                        case ' ' : tr.append( $('<td>',{'class':'empty'}) ); break;
                        case '#' : tr.append( $('<td>',{'class':'wall'}) ); break;
                        case '*' : tr.append( $('<td>',{'class':'exit'}) ); break;
                    }
                mapElement.append(tr);
            }
            return mapElement;
        }

    };

})(this);