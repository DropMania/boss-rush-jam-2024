import WhacAMole from "./whac-a-mole"

export default class Mole extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: WhacAMole, x: number, y: number){
        super(scene,x,y, 'mole')
        scene.add.existing(this)
    }

    update(){
        
    }
}