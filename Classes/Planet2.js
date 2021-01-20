class Planet2{
    constructor(){
        this.group=createGroup();
        this.playerBulletList=[];
        this.enemyBulletList=[];

        this.player=createSprite(width/2,height-100,40,100);
        this.player.health=1;
        this.player.addImage(planet2EnemyImage);
        this.group.add(this.player);

        this.enemy=createSprite(width/2,100,40,100);
        this.enemy.health=150;
        this.group.add(this.enemy);

        this.times=0;
    }

    display(){
        if(gameState=="planet2"){
            // Clearing The screen
            background("black");

            // Instruction
            if(this.times%2==0){
                textSize(20);
                text("Planet: Airmy", 20,20);
                text("Discription: The planet with no ground. this planet is made of only atmosphere.", 20,50);
                text("Instruction: Use space to shoot and left and right to move", 20,80);
                // text("Press down arrow to use gravity shoe.", 20,110);
                text("The gem is protected by a planet gardian.", 20,110);
                text("Press H to Continue.", 20,140);
                // text("Press 'H' to hide this message.", 20,170);
            }else{
                textSize(20);
                text("Press 'H' to show Instruction", 20,20);
            }

            // Reset Velocity
            this.player.velocityX=0;
            this.player.velocityY=0;

            // Movement
            if((keyDown("d")||keyDown("right_arrow"))&&!(keyDown("a")||keyDown("left_arrow"))&&this.times%2!=0){
                this.player.velocityX=3;
            }
            if((keyDown("a")||keyDown("left_arrow"))&&!(keyDown("d")||keyDown("right_arrow"))&&this.times%2!=0){
                this.player.velocityX=-3;
            }

            // Shoot
            if(keyWentDown("space")&&this.times%2!=0){
                this.shoot("player");
            }

            if(frameCount%10==0&&(Math.abs(this.enemy.x-this.player.x)<100)&&this.times%2!=0){
                this.shoot("enemy");
            }

            // Show and Hide Instruction
            if(keyWentDown("h")){
                this.times++;
            }

            // Player Bullet Detect Collition
            if(this.playerBulletList.length>0&&this.times%2!=0){
                for(var x in this.playerBulletList){
                    if(this.enemy.isTouching(this.playerBulletList[x])){
                        this.playerBulletList[x].lifetime=0;
                        this.enemy.health-=this.playerBulletList[x].damage;
                    }
                }
            }

            // Enemy Bullet Detect Collition
            if(this.enemyBulletList.length>0&&this.times%2!=0){
                for(var x in this.enemyBulletList){
                    if(this.player.isTouching(this.enemyBulletList[x])){
                        this.enemyBulletList[x].lifetime=0;
                        this.player.health-=this.enemyBulletList[x].damage;
                    }
                }
            }

            // Pogress to next level
            if(this.enemy.health<0&&this.times%2!=0){
                gameState="planet1";
            }

            // End Game
            if(this.player.health<0&&this.times%2!=0){
                gameState="menu";
            }

            
            // Display Enemy Health
            rectMode(CENTER);
            fill("green");
            rect(this.enemy.x,this.enemy.y-75,this.enemy.health,10);

            // Display Player Health
            rectMode(CENTER);
            fill("green");
            rect(this.player.x,this.player.y+75,this.player.health,10);


            // Make the Enemy follow the player
            if(this.player.x>this.enemy.x&&this.times%2!=0){
                this.enemy.velocityX=1;
            }else if(this.player.x<this.enemy.x&&this.times%2!=0){
                this.enemy.velocityX=-1;
            }else{
                this.enemy.velocityX=0;
            }

            // Drawing the group
            drawSprites(this.group);
        }
    }

    shoot(mode){
        if(mode=="player"&&this.times%2!=0){
            var bullet;
            bullet=createSprite(this.player.x,this.player.y,20,40);
            bullet.velocityY=-20;
            bullet.lifetime=height/bullet.yelocityY;
            bullet.damage=Math.round(random(1,3));
            // bullet.addImage(asteroidImage);
            bullet.scale=0.2;
            this.playerBulletList.push(bullet);
            this.group.add(bullet);
        }else{
            var bullet;
            bullet=createSprite(this.enemy.x,this.enemy.y,20,40);
            bullet.velocityY=20;
            bullet.lifetime=height/bullet.yelocityY;
            bullet.damage=Math.round(random(1,3));
            // bullet.addImage(asteroidImage);
            bullet.scale=0.2;
            this.enemyBulletList.push(bullet);
            this.group.add(bullet);
        }
    }
}