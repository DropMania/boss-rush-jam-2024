import BaseGame from '../BaseGame'
export default class Pong extends BaseGame {
	constructor() {
		super({ key: 'Pong' })
	}
	init() {}
	preload() {}
	create() {
		super.create()
		console.log(this.cameras.main.width, this.cameras.main.height)
		this.add.rectangle(0, 0, 30, 30, 0x6666ff).setOrigin(0)
	}
}
