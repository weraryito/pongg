class Ball {
	constructor(x, y, d, speed, upperLimit, lowerLimit) {
		this.x = x;
		this.y = y;
		this.d = d;
		this.speedY = speed;
		this.speedX = speed;
		this.upperLimit = upperLimit;
		this.lowerLimit = lowerLimit;
	}

	display() {
		fill('white');
		circle(this.x, this.y, this.d);
		this.moveY();
		this.moveX();
		this.hasCollision();
	}

	moveY() {
		this.y += this.speedY;
	}
	
	moveX() {
		this.x += this.speedX;
	}

	hasCollision() {
		this.collisionX();
		if(this.y >= this.lowerLimit - (this.d / 2) || this.y <= this.upperLimit + (this.d / 2)) {
			this.speedY *= -1;
		}
	}

	collisionX() {
		//LEFT PLAYER COLLISION
		if(this.x >= rightPlayer.getX() - (this.d / 2) && this.y >= rightPlayer.getY() && this.y <= (rightPlayer.getY() + rightPlayer.getHeight())) {
			this.bouncePlayer(rightPlayer.getY(), rightPlayer.getHeight());
		}

		//RIGHT PLAYER COLLISION
		if(this.x <= (leftPlayer.getX() + leftPlayer.getWidth()) + (this.d / 2) && this.y >= leftPlayer.getY() && this.y <= (leftPlayer.getY() + leftPlayer.getHeight())){
			this.bouncePlayer(leftPlayer.getY(), leftPlayer.getHeight());
		}
	}
	
	bouncePlayer(playerY, playerHeight) {
		if(this.y >= playerY && this.y <= playerY + (playerHeight / 3)) {
			this.speedY *= -1;
			this.speedX *= -1;
		} else if(this.y >= playerY + (playerHeight / 3) && this.y <= playerY + ((playerHeight / 3) * 2)) {
			this.speedX *= -1;
		} else if(this.y >= playerY + ((playerHeight / 3) * 2) && this.y <= playerY + playerHeight) {
			this.speedY *= -1;
			this.speedX *= -1;
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
}				