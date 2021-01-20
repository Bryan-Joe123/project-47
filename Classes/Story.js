class Story{
    constructor(){
        this.frame=1;
    }
    display(){
        if(gameState=="story"){
            background("black");
            if(keyWentDown("space")){this.frame++;}
            if(this.frame==8){gameState="planet1";}

            imageMode(CENTER);
            


            switch(this.frame){
                case 1:
                    image(story1,width/2,height/2,width,height);
                    textSize(30);
                    // text("You live in a planet called Earth. [Press Space To Continue]",10,height-20);
                    break;
                case 2:
                    image(story2,width/2,height/2,width,height);
                    textSize(30);
                    // text("It was a vast stretch of oceans and shrubs with more more than 3 billion people living it.",10,height-20);
                    break;
                case 3:
                    image(story3,width/2,height/2,width,height);
                    textSize(30);
                    // text("Your planet is powered by gemstones. Locates in the center of the planet.",10,height-20);
                    break;
                case 4:
                    image(story4,width/2,height/2,width,height);
                    textSize(30);
                    // text("The gemstones started to erode due to heat.",10,height-20);
                    break;
                case 5:
                    image(story5,width/2,height/2,width,height);
                    textSize(30);
                    // text("You are the best astonomer in you planet.",10,height-20);
                    break;
                case 6:
                    image(story6,width/2,height/2,width,height);
                    textSize(30);
                    // text("You gotta go and collect new genstones from different planets and restore your planet.",10,height-20);
                    break; 
                case 7:
                    image(story7,width/2,height/2,width,height);
                    textSize(30);
                    // text("Try get the gemstones and save the planet!!! :)",10,height-20);
                    break;

            }
        }

    }
}