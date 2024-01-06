import DonkeyKong from './DonkeyKong'

export default class JumpMan extends Phaser.Physics.Arcade.Sprite {
	declare scene: DonkeyKong
	constructor(scene: DonkeyKong, x: number, y: number) {
		super(scene, x, y, 'dk_jumpman')
		scene.add.existing(this)
		scene.physics.add.existing(this)
		this.setCollideWorldBounds(true)
		this.setGravityY(500)
		scene.keys.jump.onDown = () => {
			if (this.body.touching.down) this.setVelocityY(-150)
		}
	}
	update() {
		if (this.scene.keys.left.isDown) {
			this.setVelocityX(-50)
			this.setFlipX(true)
			this.play('dk_jumpman_walk', true)
		} else if (this.scene.keys.right.isDown) {
			this.setVelocityX(50)
			this.setFlipX(false)
			this.play('dk_jumpman_walk', true)
		} else {
			this.setVelocityX(0)
			this.play('dk_jumpman_idle', true)
		}
	}
}
