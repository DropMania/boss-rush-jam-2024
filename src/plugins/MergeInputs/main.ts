interface MergeInputsConfig {
	[key: string]: [string | number, number]
}
interface MergeInputsKeys {
	[key: string]: Phaser.Input.Keyboard.Key
}

export default class MergeInputs extends Phaser.Plugins.ScenePlugin {
	config: MergeInputsConfig = {}
	keys: MergeInputsKeys = {}
	constructor(scene: Phaser.Scene, pluginManager: Phaser.Plugins.PluginManager) {
		super(scene, pluginManager, 'mergeInputs')
	}

	init(config: MergeInputsConfig) {
		this.config = config
		this.keys = Object.keys(this.config).reduce((acc, key) => {
			const [keyboardKey, _gamepadKey] = this.config[key]
			acc[key] = this.scene.input.keyboard.addKey(keyboardKey)
			return acc
		}, {} as MergeInputsKeys)
	}
	onDown(key: string, callback: Function) {
		if (!this.config[key]) {
			throw new Error(`MergeInputs: key ${key} not found`)
		}
		const [keyboardKey, gamepadKey] = this.config[key]
		const keyObj = this.scene.input.keyboard.addKey(keyboardKey)
		keyObj.on('down', () => {
			callback()
		})
		this.scene.input.gamepad.on(
			'down',
			(_pad: Phaser.Input.Gamepad.Gamepad, button: Phaser.Input.Gamepad.Button) => {
				if (button.index === gamepadKey) {
					callback()
				}
			}
		)
	}
	onUp(key: string, callback: Function) {
		if (!this.config[key]) {
			throw new Error(`MergeInputs: key ${key} not found`)
		}
		const [keyboardKey, gamepadKey] = this.config[key]
		const keyObj = this.scene.input.keyboard.addKey(keyboardKey)
		keyObj.on('up', () => {
			callback()
		})
		this.scene.input.gamepad.on('up', (_pad: Phaser.Input.Gamepad.Gamepad, button: Phaser.Input.Gamepad.Button) => {
			if (button.index === gamepadKey) {
				callback()
			}
		})
	}
	isDown(key: string) {
		if (!this.config[key]) {
			return false
		}
		const [_keyboardKey, gamepadKey] = this.config[key]
		const keyObj = this.keys[key]
		return keyObj.isDown || this.scene.input.gamepad.getAll().some((pad) => pad.buttons[gamepadKey].pressed)
	}
}
