import BaseScene from './BaseScene'
export default class Loading extends BaseScene {
	backgrounds: string[]
	static: string[]
	sprites: string[]
	constructor() {
		super({ key: 'Loading' })
	}
	init() {
		this.backgrounds = ['pong', 'donkeykong', 'rhythm']
		this.static = ['dk_girder']
		this.sprites = ['dk_barrel', 'dk_jumpman']
	}
	preload() {
		this.load.setBaseURL('assets/')
		this.backgrounds.forEach((background) => {
			this.load.image(background, `img/backgrounds/${background}.png`)
		})
		this.static.forEach((staticAsset) => {
			this.load.image(staticAsset, `img/static/${staticAsset}.png`)
		})
		this.sprites.forEach((sprite) => {
			this.load.aseprite(sprite, `img/sprites/${sprite}.png`, `img/sprites/${sprite}.json`)
		})
	}
	create() {
		super.create()
		this.sprites.forEach((sprite) => {
			this.anims.createFromAseprite(sprite)
		})
		this.scene.start('MainMenu')
	}
}
