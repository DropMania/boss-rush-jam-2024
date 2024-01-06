import BaseGame from '../BaseGame'
import { BODY_STYLE } from '../../../util/textStyles'
import Barrel from './Barrel'
import JumpMan from './JumpMan'
export default class DonkeyKong extends BaseGame {
	girders: Phaser.GameObjects.Group
	barrels: Phaser.GameObjects.Group
	raycaster: Raycaster
	jumpman: JumpMan
	constructor() {
		super({ key: 'DonkeyKong' })
	}
	init() {}
	preload() {}
	create() {
		super.create()
		this.raycaster = this.raycasterPlugin.createRaycaster({
			//debug: true,
		})
		let startText = this.add
			.text(this.cameras.main.width / 2, this.cameras.main.height / 2, 'SAVE THE PRINCESS', BODY_STYLE)
			.setOrigin(0.5)
			.setDepth(10)
		this.tweens.add({
			targets: startText,
			alpha: 0,
			duration: 500,
			repeat: -1,
			yoyo: true,
		})
		this.time.delayedCall(3000, () => {
			startText.destroy()
		})
		this.jumpman = new JumpMan(this, 16, this.cameras.main.height - 32)
		this.girders = this.add.group()
		this.barrels = this.add.group()
		this.barrels.add(new Barrel(this, 32, 16))
		this.physics.add.collider(this.barrels, this.girders)
		this.physics.add.collider(this.jumpman, this.girders)
		this.generateLevel()
		this.raycaster.mapGameObjects(this.girders.getChildren())
	}
	generateLevel() {
		this.generateGirderLine(this.cameras.main.height - 16, true, 0, 13)
		this.generateGirderLine(this.cameras.main.height - 96, false, 0, 12)
		this.generateGirderLine(this.cameras.main.height - 160, true, 1, 13)
		this.generateGirderLine(this.cameras.main.height - 240, false, 0, 12)
	}
	generateGirderLine(height: number, left: boolean, start: number, end: number) {
		let girderWidth = 32
		let heightOffset = 0
		for (let i = start; i < end; i++) {
			let girder = this.add.image(i * girderWidth, height - heightOffset, 'dk_girder').setOrigin(0)
			this.physics.add.existing(girder, true)
			this.girders.add(girder)
			if (left) {
				heightOffset += 1
			} else {
				heightOffset -= 1
			}
		}
	}
	update() {
		this.jumpman.update()
		this.barrels.getChildren().forEach((barrel) => {
			barrel.update()
		})
	}
}
