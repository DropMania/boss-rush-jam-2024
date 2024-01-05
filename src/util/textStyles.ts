const defaults: Phaser.Types.GameObjects.Text.TextStyle = {
	fontFamily: 'Pixel',
	fontSize: '18px',
	color: '#fff',
	align: 'center',
	stroke: '#10121c',
	strokeThickness: 6,
	resolution: 10,
}

export const HEADER_STYLE: Phaser.Types.GameObjects.Text.TextStyle = {
	...defaults,
	fontSize: '48px',
}

export const HEADER_STYLE_SMALL: Phaser.Types.GameObjects.Text.TextStyle = {
	...defaults,
	fontSize: '24px',
}
export const HEADER_STYLE_SMALL_SELECTED: Phaser.Types.GameObjects.Text.TextStyle = {
	...defaults,
	fontSize: '24px',
	color: '#ff0',
}

export const BODY_STYLE: Phaser.Types.GameObjects.Text.TextStyle = {
	...defaults,
	align: 'left',
}
