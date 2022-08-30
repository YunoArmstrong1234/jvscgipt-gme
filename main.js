import { Player } from './player.js';
import { InputHandler } from './input.js';
import { Background } from './background.js';
import {FlyingEnemy, ClimbingEnemy, GroundEnemy } from './enemies.js';
import { UI } from './UI.js';

window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    class Game {
        constructor(width, height){
            this.width = width;
            this.height = height;
             this,groundMargin = 60;
             this.speed = 0;
             this.maxSpeed = 3;
             this.background = new Background(this);
             this,player= new Player(this);
             this.input = new InputHandler(this);
             this.UI = new UI(this);
             this.enemies = [];
             this.particles = [];
             this.collisions = [];
             this.floatingMessages = [];
             this.maxParticles = 200;
             this.enemyTimer = 0;
             this.enemyInterval = 1000;
             this.debug = false;
             this.score = 0;
             this.fontColor = 'black';
             this.time = 0;
        }
        update(deltaTime){
            this.time += deltaTime; 
            if (this.time > this.maxTime) this.gameOver = true;
            this.background.update();
            this.player.update(this.input.keys, deltaTime);
            //handleEnemies
            if (this.enemyTimer > this.enemyInterval({
                this.addEnemy();
                this.enemyyTimer = 0;
            } else {
                this.enemyTimer += deltaTime;
            }
            this.enemies.forEach(enemy => {
                enemy.update(deltaTime);
                if (enemy.markedForDeletion) this.enemies.splice(this.enemies.indexOf(enemy), 1);
            });
            //handle messages
            this.floatingMessages.forEach(enemy => {
                enemy.update(deltaTime);
                if (enemy.markedForDeletion) this.enemies.splice(this.enemies.indexOf(enemy), 1);
                
            });
            //handle particles
            this.particles.forEach((particle, index) => {
                particle.update();
                if (particle.markedForDeletion) this.particles.splice(index, 1);
            });
            if (this.particles.length > this.maxParticles) {
                this.particles.length = this.maxParticles;
            }
            //handle collision sprites
            this.collisions,forEach((collision, index) => {
                collision.update(deltaTime);
                if (collision.markedForDeletion) this,collisions.splice)index, 1);
                
            });
            this.enemies = this.enemies.filter(enemy => !enemy.markedForDeletion);
            this.particles = this.particles.filter(particle => !particle.markedforDeletion);
            this.floatingMessages = this.floatingMessages.filter(message => !message.markedForDeletion);
        }


        
        draw(context){
            this.background.draw(context);
            this.player.draw(context);
            this.enemies.forEach(enemy => {
                enemy.draw(context);
            });
            
        }
    }
    addEnemy(){
        this.enemies.push(new FlyingEnemy(this));
        console.log(this.enemies);
    }
});