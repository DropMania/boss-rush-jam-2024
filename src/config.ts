import PhaserRaycaster from 'phaser-raycaster'
import AnimatedTiles from '@/plugins/AnimatedTiles/main'
import MergeInputs from '@/plugins/MergeInputs/main'
export default {
	type: Phaser.AUTO,
	width: window.innerWidth,
	height: window.innerHeight,
	pixelArt: true,
	backgroundColor: '#000',
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
			fps: 60,
			//fixedStep: true,
			//debug: true,
		},
	},

	fps: {
		target: 60,
		deltaHistory: 10,
		smoothStep: false,
		min: 60,
		forceSetTimeOut: true,
	},

	render: {
		preserveDrawingBuffer: true,
	},

	powerPreference: 'high-performance',
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: 1280,
		height: 720,
		autoRound: true,
	},
	input: {
		gamepad: true,
		mouse: true,
		keyboard: true,
	},
	plugins: {
		scene: [
			{
				key: 'PhaserRaycaster',
				plugin: PhaserRaycaster,
				mapping: 'raycasterPlugin',
			},
			{
				key: 'AnimatedTiles',
				plugin: AnimatedTiles,
				mapping: 'animatedTiles',
			},
			{
				key: 'MergeInputs',
				plugin: MergeInputs,
				mapping: 'mInputs',
			},
		],
	},
} satisfies Phaser.Types.Core.GameConfig
