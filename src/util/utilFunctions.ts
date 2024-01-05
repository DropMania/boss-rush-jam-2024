export const wait = (scene: Phaser.Scene, duration: number): Promise<void> =>
	new Promise((resolve) => {
		scene.time.delayedCall(duration, resolve)
	})
export const map = (value: number, min1: number, max1: number, min2: number, max2: number): number =>
	((value - min1) / (max1 - min1)) * (max2 - min2) + min2
