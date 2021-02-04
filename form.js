class Form{
    constructor(){   
    }
    display(){
        var titile = createElement('h2');
        titile.html("airballon");
        var input = createInput("Name");
        var button = createButton("play");
        var greeting = createElement('h3');
        input.position(130,160);
        button.position(250,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playercount+=1
            player.update(name);
            player.updateCount(playercount);
            greeting.html("welcome"+name);
            greeting.position(130,160)
        });
    }
}