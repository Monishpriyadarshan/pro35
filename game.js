class Game{
    constructor(){
    }
    getstate(){
        var gamestateref = database.ref('gameState');
        gamestateref.on("value",function(data){
        gameState = data.val();
        })
    }
    update(state){
        database.ref('/')({
         gameState:state
        })
    }
    
    start(){
        if(gameState === 0){
            player = new Player ();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
}