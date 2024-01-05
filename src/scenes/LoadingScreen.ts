import { HEADER_STYLE } from '@/util/textStyles'
import Loading from './Loading'

export default class LoadingScreen extends Phaser.Scene {
	constructor() {
		super({ key: 'LoadingScreen' })
	}
	preload() {}
	create() {
		const loadingScene = this.scene.get('Loading') as Loading
		let loadingText = this.add
			.text(+this.game.config.width / 2, +this.game.config.height / 2, '0%', HEADER_STYLE)
			.setOrigin(0.5)
		loadingScene.load.on('progress', (value: number) => {
			loadingText.setText(`${Math.floor(value * 100)}%`)
			if (value === 1) {
				this.scene.stop()
			}
		})
		loadingScene.scene.start()
	}
}
