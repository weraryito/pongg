class player{
    constructor(player, startingY, x1, x2, upperLimit, lowerLimit){
        this.player = player;
        this.mov = 15;
        this.height = 100;
        this.width = 10;
        this.startingY = startingY;
        this.x1 = x1;
        this.x2 = x2;
        this.setStartingPosition();
        this.score = 0;
        this.upperLimit = upperLimit;
        this.lowerLimit = lowerLimit;
    }
    
    display() {
        fill('white');
		rect(this.x, this.y, 10, 100);
        noStroke();
		this.moveY();
		this.collision();
	}

    setStartingPosition() {
        if(this.player == 1) {
            this.x = this.x1;
            this.y = this.startingY;
        } else {
            if(this.player == 2) {
                this.x = this.x2;
                this.y = this.startingY;
            }
        }
    }

    moveY() {
        if(this.player == 1) {
            if (keyIsDown(87)) {
                this.y += -this.mov;
            } 

            if (keyIsDown(83)) {
                this.y += this.mov;
            }
	    } else {
            if(this.player == 2) {
                if (keyIsDown(UP_ARROW)) {
                    this.y += -this.mov;
                } 

                if (keyIsDown(DOWN_ARROW)) {
                    this.y += this.mov;
                }
            } 
        }
    }

    collision() {
        if(this.y >= this.lowerLimit - this.height){
			this.y = this.lowerLimit - this.height;
		}

        if(this.y <= this.upperLimit){
            this.y = this.upperLimit;
        }
    }

    //GETTERS & SETTERS
    getX() {
		return this.x;
	}

	setX(x) {
		this.x = x;
	}
	
	getY() {
		return this.y;
	}

	setY(y) {
		this.y = y;
	}

    getHeight() {
        return this.height;
    }

    getWidth() {
        return this.width;
    }

    getScore() {
        return this.score;
    }

    addScore(score) {
        this.score += score;
    }

    getPlayer() {
        return this.player;
    }
}