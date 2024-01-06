import DonkeyKong from './DonkeyKong'

export default class Barrel extends Phaser.Physics.Arcade.Sprite {
	rays: Raycaster.Ray[]
	constructor(scene: DonkeyKong, x: number, y: number) {
		super(scene, x, y, 'dk_barrel')
		scene.add.existing(this)
		scene.physics.add.existing(this)
		this.setCollideWorldBounds(true)
		this.setCircle(8)
		//this.setBounce(1)
		this.rays = [
			scene.raycaster.createRay({
				origin: new Phaser.Math.Vector2(this.x, this.y),
				angleDeg: 20,
				range: 100,
			}),
			scene.raycaster.createRay({
				origin: new Phaser.Math.Vector2(this.x, this.y),
				angleDeg: 90,
				range: 100,
			}),
			scene.raycaster.createRay({
				origin: new Phaser.Math.Vector2(this.x, this.y),
				angleDeg: 160,
				range: 100,
			}),
		]
		this.setGravityY(100)
	}
	update() {
		this.play('dk_barrel_roll', true)
		let intersects = this.rays.map((ray) => {
			ray.setOrigin(this.x, this.y)
			return ray.cast() as Point
		})

		if (Phaser.Math.Distance.Between(this.x, this.y, intersects[1]?.x, intersects[1]?.y) > 10) {
			//this.setVelocityX(0)
		} else if (intersects[0]?.y < intersects[2]?.y) {
			this.setVelocityX(-50)
		} else if (intersects[0]?.y > intersects[2]?.y) {
			this.setVelocityX(50)
		}
		if (this.body.velocity.x > 0) {
			this.setFlipX(false)
		} else {
			this.setFlipX(true)
		}
	}
}
