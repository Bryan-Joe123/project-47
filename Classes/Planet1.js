class Planet1{
    constructor(){
        this.group=createGroup();
        this.obstacleList=createGroup();

        this.ground=createSprite(width/2,height,width,40);
        this.group.add(this.ground);

        this.player=createSprite(width/2,height-100,60,100);
        this.player.addImage("l",playerPlanet1ImageL);
        this.player.addImage("r",playerPlanet1ImageR);
        this.player.scale=0.5;
        this.player.setCollider("rectangle",0,0,200,300)
        // this.player.debug=true;
        this.group.add(this.player);

        this.gem=createSprite(random(0+100,width-100),0,20,20);

        this.times=0;
    }

    display(){
        if(gameState=="planet1"){
            background("black");

            if(this.times%2==0){
                textSize(20);
                text("Planet: Floaty", 20,20);
                text("Discription: The planet with the least gravity every thing floats on ths planet.", 20,50);
                text("Instruction: Use Space to use Space Thrusters and LeftArrow and RightArrow to move", 20,80);
                text("Press down arrow to use gravity shoe.", 20,110);
                text("It usually rains floating astroids on this planet.", 20,140);
                text("Press 'H' to hide this message.", 20,170);
            }else{
                textSize(20);
                text("Press 'H' to show instruction", 20,20);
            }

            if(keyWentDown("h")){
                this.times++;
            }

            //player gravity
            this.player.velocityY=this.player.velocityY+0.02;
            this.player.collide(this.ground);

            //Player Physics
            if(keyDown("space")||keyDown("up_arrow")||keyDown("w")){
                this.player.velocityY=-3;
            }

            if(keyDown("down_arrow")||keyDown("s")){
                this.player.velocityY=3;
            }

            if(keyDown("right_arrow")||keyDown("d")){
                this.player.velocityX=3;
                this.player.changeImage("r")
                this.player.scale=0.05;
                this.player.setCollider("rectangle",0,0,2000,3000)
            }

            if(keyDown("left_arrow")|| keyDown("a")){
                this.player.velocityX=-3;
                this.player.changeImage("l")
                this.player.scale=0.5;
                this.player.setCollider("rectangle",0,0,200,300)
            }

            if(Math.round(random(1,1500))%500==0){
                this.spawnGem();
            }

            if(this.gem){
                if(this.player.isTouching(this.gem)){
                    gameState="planet2";
                }
            }

            if(this.player.velocityX>0){
                this.player.velocityX=this.player.velocityX-0.05;
            }else if(this.player.velocityX<0){
                this.player.velocityX=this.player.velocityX+0.05;
            }

            if(frameCount%30==0){
                this.spawnObstales();
            }

            if(this.player.isTouching(this.obstacleList)){
                gameState="end";
            }

            drawSprites(this.group);
        }
    }

    spawnObstales(){
        var obstacles;
        obstacles=createSprite(random(0+100,width-100),0,20,20);
        obstacles.velocityX=random(-1,1);
        obstacles.velocityY=random(1,5); 
        obstacles.lifetime=300;
        obstacles.addImage(asteroidImage);
        obstacles.scale=0.2;
        obstacles.rotation=random(0,360);
        this.obstacleList.add(obstacles);
        this.group.add(obstacles);
    }

    spawnGem(){
        if(this.gem.y>height){
            this.gem=createSprite(random(0+100,width-100),0,20,20);
        }
        this.gem.velocityX=random(-1,1);
        this.gem.velocityY=random(1,5); 
        // this.gem.lifetime=height/this.gem.yelocityY;
        this.gem.addImage(planet1Gem);
        this.gem.scale=0.1;
        this.gem.rotation=random(0,360);
        this.group.add(this.gem);
    }
}