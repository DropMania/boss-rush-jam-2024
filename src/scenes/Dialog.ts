import BaseScene from './BaseScene'

export default class Dialog extends BaseScene {

	constructor() {
		super({ key: 'Dialog' })
	}
	init() {

	}
	preload() {}
	create() {
		super.create()
		console.log('Dialog scene created!')

	}
}
