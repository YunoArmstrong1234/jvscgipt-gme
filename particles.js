class Particle {
    constructor(game){
        this.game = game;
        this.markedforDeletion = false;
    }
    update(){
        this.x -= this.speed + this.game.speed;
        
    }
}