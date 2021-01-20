var gameState;

function setup(){
  createCanvas(windowWidth-20,windowHeight-20);

  gameState="planet2";

  backgroundMusic.play(true);
  
  story = new Story();
  menu = new Menu();
  planet1= new Planet1();
  planet2= new Planet2();
}

function draw(){
  menu.display();
  story.display(); 
  planet1.display();
  planet2.display();
}