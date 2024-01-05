import AnimatedTiles from '@/plugins/AnimatedTiles/main'
import MergeInputs from '@/plugins/MergeInputs/main'
export default class BaseScene extends Phaser.Scene {
	animatedTiles: AnimatedTiles
	raycasterPlugin: PhaserRaycaster
	mInputs: MergeInputs
	constructor(config: Phaser.Types.Scenes.SettingsConfig) {
		super(config)
	}
	create() {
		this.mInputs.init({
			up: [Phaser.Input.Keyboard.KeyCodes.W, Phaser.Input.Gamepad.Configs.XBOX_360.UP],
			down: [Phaser.Input.Keyboard.KeyCodes.S, Phaser.Input.Gamepad.Configs.XBOX_360.DOWN],
			left: [Phaser.Input.Keyboard.KeyCodes.A, Phaser.Input.Gamepad.Configs.XBOX_360.LEFT],
			right: [Phaser.Input.Keyboard.KeyCodes.D, Phaser.Input.Gamepad.Configs.XBOX_360.RIGHT],
			jump: [Phaser.Input.Keyboard.KeyCodes.SPACE, Phaser.Input.Gamepad.Configs.XBOX_360.A],
			action1: [Phaser.Input.Keyboard.KeyCodes.K, Phaser.Input.Gamepad.Configs.XBOX_360.X],
			action2: [Phaser.Input.Keyboard.KeyCodes.L, Phaser.Input.Gamepad.Configs.XBOX_360.B],
			menu: [Phaser.Input.Keyboard.KeyCodes.ESC, Phaser.Input.Gamepad.Configs.XBOX_360.START],
			debug: [Phaser.Input.Keyboard.KeyCodes.P, Phaser.Input.Gamepad.Configs.XBOX_360.BACK],
		})
	}
}
