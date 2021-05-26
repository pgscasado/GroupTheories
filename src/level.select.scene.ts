import { Scene } from 'phaser'
import { gameSettings } from './app'
import background from './assets/images/background.png'
import levelButton from './assets/images/levelSelectLevelMini.png'

export class LevelSelect extends Scene {
	height: any
	interactives: Phaser.GameObjects.Image[]
	width: any

	constructor() {
		super({key: 'Levels'})
		this.width = gameSettings.width
		this.height = gameSettings.height
		this.interactives = []
	}

	create() {
		const {width, height} = this.sys.game.scale.gameSize
		this.add.image(width / 2, height / 2, 'background')

		const screenTitle = this.add.text(0, 0, 'Níveis', {
			fontFamily: 'Title',
			fontSize: '48px',
			color: '#9911ee',
		})
		Phaser.Display.Align.In.Center(screenTitle, this.add.zone(this.width * 0.5, height * 0.075, this.width, this.height))
		const containers: Phaser.GameObjects.Container[] = []
		for (let i = 0; i < 3; i++) {
			containers.push(this.createRowCentered(height * 0.025 + (height * 0.25) * (i + 1), i * 5))
		}
	}

	preload() {
		this.load.image('background', background)
		this.load.image('levelButton', levelButton)
	}

	private createRow(x: number, y: number, num: number) {
		const btns = this.add.container()
		let offsetX = 0
		let maxWidth = 0
		for (let i = 0; i < 5; i++) {
			const image = this.add.image(offsetX * i, 0, 'levelButton')
			offsetX = image.width + this.width * 0.03
			maxWidth += offsetX
			btns.add(image)
			}
		btns.x = x
		btns.y = y
		return btns
	}

	private createRowCentered(y: number, startingIdx: number) {
		const btns = this.add.container()
		let offsetX = 0
		let maxWidth = 0
		for (let i = 0; i < 5; i++) {
			const image = this.add.image(offsetX * i, 0, 'levelButton')
			this.interactives.push(image)
			offsetX = image.width + this.width * 0.03
			maxWidth += offsetX
			btns.add(image)
			let titleText = this.add.text(0, 0, `${startingIdx + i + 1}`, {
				fontFamily: 'Menu',
				fontSize: '108px',
				color: 'black',
				align: 'center',
			})
			titleText = Phaser.Display.Align.In.Center(titleText, this.add.zone(offsetX * i, -image.height / 4, image.width, image.height))
			btns.add(titleText)
		}
		btns.x = (this.width - maxWidth)
		btns.y = y
		this.interactives.forEach((btn, index) => {
			btn.setInteractive()
			btn.on('pointerover', () => {
				btn.setTint(0xcccccc, 0xcccccc, 0xcccccc, 0xcccccc)
			})
			btn.on('pointerout', () => {
				btn.setTint(0xffffff, 0xffffff, 0xffffff, 0xffffff)
			})
			btn.on('pointerup', () => {
				this.scene.start('LevelExec', { index })
			})
		})
		return btns
	}

}
