import BaseGame from '../BaseGame'
import map from './map'
export default class Rhythm extends BaseGame {
	tiles: Phaser.GameObjects.Rectangle[]
	constructor() {
		super({ key: 'Rhythm' })
	}
	init() {}
	preload() {}
	create() {
		super.create()
		this.tiles = []
		map.forEach((row, y) => {
			row.forEach((tile, x) => {
				if (tile === 'X') {
					this.tiles.push(
						this.add
							.rectangle(x * 48 + this.cameras.main.width / 2 - 48 * 2, y * -64, 48, 64, 0x6666ff)
							.setOrigin(0)
					)
				}
			})
		})
	}
	update(time: number, delta: number): void {
		super.update(time, delta)
		this.tiles.forEach((tile) => {
			tile.y += 5
		})
	}
}
