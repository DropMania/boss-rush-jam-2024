export default class AnimatedTiles extends Phaser.Plugins.ScenePlugin {
	/**
	 *
	 * @param map  The tilemap to initialize
	 */
	init(map: Phaser.Tilemaps.Tilemap)
	pause(layerIndex: number = null, mapIndex: number = null)
	resume(layerIndex: number = null, mapIndex: number = null)
	updateAnimatedTiles()
	removeMap(map: Phaser.Tilemaps.Tilemap)
	/**
	 * @param rate  The rate at which the animation should play
	 * @param gid  The gid of the tile to set the rate for
	 * @param map  The index of the map to set the rate for
	 * @returns void
	 * @description  Sets the rate of the animation for a specific tile
	 * @example
	 * this.animatedTiles.setRate(0.5, 449)
	 * this.animatedTiles.setRate(0.5, 449, 0)
	 */
	setRate(rate: number, gid: number = null, map: number = null)
	resetRates(mapIndex: number = null)

	static register(manager: Phaser.Plugins.PluginManager)
}
