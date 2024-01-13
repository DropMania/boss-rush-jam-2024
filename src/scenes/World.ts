import BaseScene from './BaseScene'
type Game = {
	pos: { x: number; y: number }
	scene: string
}
export default class World extends BaseScene {
	games: Game[]
	backButton: Phaser.GameObjects.Sprite
	activeGameScene: Phaser.Scenes.ScenePlugin
	constructor() {
		super({ key: 'World' })
	}
	init() {
		this.games = [
			{
				pos: { x: 100, y: 200 },
				scene: 'Pong',
			},
			{
				pos: { x: 200, y: 200 },
				scene: 'DonkeyKong',
			},
			{
				pos: { x: 300, y: 200 },
				scene: 'Rhythm',
			},
			{
				pos: { x: 400, y: 200 },
				scene: 'WhacAMole',
			},
		]
	}
	preload() {}
	create() {
		super.create()

		

		const machineBackground = this.add.image(0, 0, 'pong').setOrigin(0).setVisible(false).setDepth(10)

		this.backButton = this.add.sprite(50,20, 'back_button',1)
		this.backButton.setDepth(20)
		this.backButton.setVisible(false)
		this.backButton.setInteractive()
		this.backButton.on('pointerover', () => {
            this.backButton.setFrame(0)
        })
        this.backButton.on('pointerout', () => {
            this.backButton.setFrame(1)
        })
		this.backButton.on('pointerdown', () => {
			console.log('click');
			
            this.scene.resume()
			this.activeGameScene.stop()
        })

		this.games.forEach((game) => {
			this.add
				.rectangle(game.pos.x, game.pos.y, 30, 30, 0x6666ff)
				.setInteractive()
				.on('pointerdown', () => {
					machineBackground.setTexture(game.scene.toLowerCase()).setVisible(true)
					this.backButton.setVisible(true)
					this.scene.pause()
					this.activeGameScene = this.scene.launch(game.scene)
				})
			this.add
				.text(game.pos.x, game.pos.y, game.scene, {
					color: '#ffffff',
				})
				.setOrigin(0.5)
		})
	}
}
