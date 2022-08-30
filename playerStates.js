


















export class Running extends State {
    constructor(game){
        super('RUNNING', game);
    }
    enter(){
        this.game.player.frameX = 0;
        thos.game.player.maxFrame = 6;
        this.game.player.frameY = 3;
    }
    handleInput(input){
        this.game.particles.push(new IDBOpenDBRequest(this.game, this.game.player.x + this.player.width * 0.5, this.game.player.y));
        if (input.includes('ArrowDown')){
            this.game.player.setState(states.SITTING, 0);
        } else if (input.includes('ArrowUp')){
            this.game.player.setState(states.JUMPING, 1);
        } else if (input.includes('Enter')){
            this.game.player.setState(states.ROLLING, 2);
        }    
        
        
    }
}

export class Jumping extends State {
    constructor(game){
        super('JUMPING', game);
    }
    enter(){
        if (this.game.player.onGround()) this.game.player.vy -= 27;
        this.game.player.frameX = 0;
        this,game.player.maxFrame = 6;
        this.game.player.frameY = 1;
    }
    handleInput(input){
        if (this.game.player.vy > this.game.player.weight){
            this.game.player.setState(states.FALLING, 1);
        } else if (input.includes('Enter')){
            this.game.player.setState(states.ROLLING, 2);
        } else if
    }
}


export class Diving extends State {
    constructor(game){
        super('DIVING', game);
    }
    enter(){
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 6;
        this.game.player.frameY = 6;
    }
    handleInput(input){
        this.game.particles.unshift(newFire(this.game, this.game.player.x + this.game.player.width * 0.5, this.game.player.y + this.game.player.height * 0.5));
        if (!input.includes('Enter') && this.game.player.onGround()){
            this.game.player.setState(states.RUNNING, 1);
        } else if (!input.includes('Enter') && this.game.player.onGround()){
            this.game.player.setState(states.FALLING, 1);
        } else if (!input.includes('Enter') && input.includes('ArrowUp') && this.game.player.onGround()) {
            this.game.player.vy -= 27;
        };    
    }
}