import BaseScene from './BaseScene'
type Game = {
	pos: { x: number; y: number }
	scene: string
}
export default class World extends BaseScene {
	games: Game[]
	constructor() {
		super({ key: 'World' })
	}
	init() {
		this.games = [
			{
				pos: { x: 100, y: 200 },
				scene: 'Pong',
			},
		]
	}
	preload() {}
	create() {
		super.create()
		console.log('World scene created!')
		const machineBackground = this.add.image(0, 0, 'pong').setOrigin(0).setVisible(false).setDepth(10)
		this.games.forEach((game) => {
			this.add
				.rectangle(game.pos.x, game.pos.y, 30, 30, 0x6666ff)
				.setInteractive()
				.on('pointerdown', () => {
					machineBackground.setTexture(game.scene.toLowerCase()).setVisible(true)
					this.scene.launch(game.scene)
				})
			this.add
				.text(game.pos.x, game.pos.y, game.scene, {
					color: '#ffffff',
				})
				.setOrigin(0.5)
		})
	}
}
