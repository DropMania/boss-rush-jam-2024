import BaseScene from './BaseScene'
export default class Loading extends BaseScene {
	constructor() {
		super({ key: 'Loading' })
	}
	preload() {
		this.load.setBaseURL('assets/')
	}
	create() {
		super.create()
	}
}
