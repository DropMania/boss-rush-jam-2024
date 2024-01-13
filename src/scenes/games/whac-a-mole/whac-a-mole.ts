import BaseGame from '../BaseGame'
import Mole from './Mole'
export default class WhacAMole extends BaseGame {
	moles: Phaser.GameObjects.Group
	mole_hammer: Phaser.GameObjects.Sprite
	constructor() {
		super({ key: 'WhacAMole' })
	}
	init() {}
	preload() {}
	create() {
		super.create()

		

		this.moles = this.add.group();
		this.moles.add(new Mole(this, 100, 100))
		this.moles.add(new Mole(this, 200, 100))
		this.moles.add(new Mole(this, 300, 100))
		this.moles.add(new Mole(this, 100, 200))
		this.moles.add(new Mole(this, 200, 200))
		this.moles.add(new Mole(this, 300, 200))

		this.mole_hammer = this.add.sprite(50,20, 'mole_hammer',0)

		this.input.mouse.disableContextMenu();
		this.input.on('pointerdown', (pointer: any)=>{
			const camersPointer = pointer.positionToCamera(this.cameras.main)
			if(pointer.leftButtonDown()){
				if(
					(camersPointer.x >= 0 && camersPointer.x <= this.cameras.main.width) && 
					(camersPointer.y >= 0 && camersPointer.y <= this.cameras.main.height)
				){
					console.log('Waaaccc');
					let whacEffectSprite = this.add.sprite(camersPointer.x, camersPointer.y, 'Explosions')
					whacEffectSprite.play({
						key: 'Explosion'
					})
					whacEffectSprite.on(Phaser.Animations.Events.ANIMATION_COMPLETE, function () {
						whacEffectSprite.destroy()
					}, this);
				}
			}
		})
	}

	update() {
		const pointer = this.input.activePointer
		const camerasPointer: Phaser.Math.Vector2 | object = pointer.positionToCamera(this.cameras.main)
		
		if(camerasPointer.x >= 0 && camerasPointer.x <= this.cameras.main.width){
			this.mole_hammer.x = camerasPointer.x
		}
		if(camerasPointer.y >= 0 && camerasPointer.y <= this.cameras.main.height){
			this.mole_hammer.y = camerasPointer.y
		}
		this.moles.getChildren().forEach((mole)=>{
			mole.update()
		})
	}
}
