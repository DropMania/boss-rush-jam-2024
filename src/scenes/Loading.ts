import BaseScene from './BaseScene'
export default class Loading extends BaseScene {
	backgrounds: string[]
	constructor() {
		super({ key: 'Loading' })
	}
	init() {
		this.backgrounds = ['pong']
	}
	preload() {
		this.load.setBaseURL('assets/')
		this.backgrounds.forEach((background) => {
			this.load.image(background, `img/backgrounds/${background}.png`)
		})
	}
	create() {
		super.create()
		this.scene.start('MainMenu')
	}
}
