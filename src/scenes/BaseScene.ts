import AnimatedTiles from '@/plugins/AnimatedTiles/main'
export default class BaseScene extends Phaser.Scene {
	animatedTiles: AnimatedTiles
	raycasterPlugin: PhaserRaycaster
	keys: { [key: string]: Phaser.Input.Keyboard.Key }
	constructor(config: Phaser.Types.Scenes.SettingsConfig) {
		super(config)
	}
	create() {
		this.keys = this.input.keyboard.addKeys({
			up: Phaser.Input.Keyboard.KeyCodes.W,
			down: Phaser.Input.Keyboard.KeyCodes.S,
			left: Phaser.Input.Keyboard.KeyCodes.A,
			right: Phaser.Input.Keyboard.KeyCodes.D,
			jump: Phaser.Input.Keyboard.KeyCodes.SPACE,
			action1: Phaser.Input.Keyboard.KeyCodes.K,
			action2: Phaser.Input.Keyboard.KeyCodes.L,
			menu: Phaser.Input.Keyboard.KeyCodes.ESC,
			debug: Phaser.Input.Keyboard.KeyCodes.P,
		}) as { [key: string]: Phaser.Input.Keyboard.Key }
	}
}
