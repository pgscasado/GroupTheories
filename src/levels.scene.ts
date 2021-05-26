import { Scene } from 'phaser'
import background from './assets/images/background.png'

class Levels extends Scene {
	constructor() {
		super({key: 'Levels'})
	}

	preload() {
		this.load.image('background', background)
	}

}
