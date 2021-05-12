    upperLimit = 120;
    lowerLimit = 820;

    let ball = new Ball(innerWidth / 2, innerHeight / 2, 30, 6, upperLimit, lowerLimit);
    let leftPlayer = new player(1, lowerLimit / 2, 500, 1000, upperLimit, lowerLimit);
    let rightPlayer = new player(2, lowerLimit / 2, 300, 1400, upperLimit, lowerLimit);
    
class Game {
    constructor(){

    }

    display() {
        fill('#45B6A2');
        rect(500, upperLimit, 910, lowerLimit - 115);
        fill('black');

        this.displayScore();
        this.displayInstructions();
        ball.display();
		leftPlayer.display();
		rightPlayer.display();
        this.score();
    }

    displayScore() {
        textSize(30);
        text("- SCORE -", 900, 250)
        text(leftPlayer.getScore(), 800, 250);
        text(rightPlayer.getScore(), 1100, 250);
    }

    displayInstructions() {
        textSize(20);
        text('MOVE UP = "W" Key', 250, 300);
        text('MOVE DOWN = "S" Key', 250, 600);

        textSize(20);
        text('MOVE UP = "UP" ARROW', 1450, 300);
        text('MOVE DOWN = "DOWN" ARROW', 1450, 600);
    }

    score() {
        if(ball.getX() < leftPlayer.getX()) {
            rightPlayer.addScore(1);
            this.restart();
        }

       if(ball.getX() > rightPlayer.getX()) {
            leftPlayer.addScore(1);
            this.restart();
        }    
    }

    restart() {
        ball.setX(innerWidth / 2);
        ball.setY(innerHeight / 2);
        leftPlayer.setStartingPosition();
        rightPlayer.setStartingPosition();
    }   
}