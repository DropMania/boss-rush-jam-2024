import BaseScene from '../BaseScene'
export default class BaseGame extends BaseScene {
	constructor(config: Phaser.Types.Scenes.SettingsConfig) {
		super(config)
	}
	init() {}
	preload() {}
	create() {
		super.create()

		this.cameras.main.setViewport(112, 64, 416, 287)

		this.add.rectangle(0, 0, this.cameras.main.width, this.cameras.main.height, 0x000000).setOrigin(0)
		this.physics.world.setBounds(0, 0, this.cameras.main.width, this.cameras.main.height)
	}
}
