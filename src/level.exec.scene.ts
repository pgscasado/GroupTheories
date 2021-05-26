import { gameSettings } from './app'

export class LevelExec extends Phaser.Scene {

	height: number
	index: number
	width: number

	constructor() {
		super({key: 'LevelExec'})
		this.width = gameSettings.width
		this.height = gameSettings.height
		this.index = 0
	}

	create() {
		this.add.text(this.width / 2, this.height / 2, `${this.index}`, {
			fontFamily: 'FiraCodeRetina',
			fontSize: '108px',
			align: 'center',
		})
	}

	init(data: any) {
		this.index = data.index
	}
}
