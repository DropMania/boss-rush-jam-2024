interface MergeInputsConfig {
	[key: string]: [string | Phaser.Input.Keyboard.Key, number]
}

export default class MergeInputs extends Phaser.Plugins.ScenePlugin {
	init(config: MergeInputsConfig)
}
