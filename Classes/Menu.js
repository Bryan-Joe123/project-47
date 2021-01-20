class Menu{
    constructor(){
        this.playButton=createSprite(width/2,height/2);
        this.playButton.addImage("playButton",playButtonImage);
        this.playButton.scale=(1);
    }

    display(){
        if(gameState=="menu"){
            background("black");

            textSize(75);
            fill("black");
            stroke("white");
            strokeWeight(10);
            text("Astrography",width/2-200,height/4);

            if(mouseIsOver(this.playButton)&&mouseWentDown()){
                gameState="story";
            }

            drawSprite(this.playButton);
        }
    }
}