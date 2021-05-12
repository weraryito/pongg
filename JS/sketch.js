let juego= new Game();
let men=new menu();

function setup(){
	createCanvas(windowWidth - 10, windowHeight - 5);
}

function draw() {
	background('#359988');
	juego.display();	
}