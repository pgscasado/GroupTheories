import { Scene } from 'phaser'
import { TGameSettings } from './app'
import background from './assets/images/background.png'
import menuButtonBg from './assets/images/menuButtonMini.png'

type Pair<T, K> = [T, K]

export class MainMenu extends Scene {
	interactives: Pair<Phaser.GameObjects.Image, boolean>[]
	settings: TGameSettings

	constructor(settings: TGameSettings) {
		super({key: 'MainMenu'})
		this.settings = settings
		this.interactives = []
	}

	protected create() {
		const {width, height} = this.sys.game.scale.gameSize
		// background render
		this.add.image(width / 2, height / 2, 'background')
		// title text render
		const titleText = this.add.text(0, 0, 'Group\nTheories', {
			fontFamily: 'Title',
			fontSize: '104px',
			color: '#9911ee',
			align: 'center',
		})
		Phaser.Display.Align.In.Center(titleText, this.add.zone(width * 0.5, height * 0.3, width, height))

		// button render
		const startButton = this.add.image(width / 2, height * 0.6, 'menuButtonBg')
		startButton.setTint(0xffffff, 0xffffff, 0xffffff, 0xffffff)
		const buttonText = this.add.text(0, 0, 'Jogar!', {
			fontFamily: 'RobotoThin',
			fontSize: '48px',
			color: 'black',
		})
		Phaser.Display.Align.In.Center(buttonText, this.add.zone(width * 0.5, height * 0.6 - 8, width, height))

		startButton.setInteractive()
		this.interactives.push([startButton, false])
		startButton.on('pointerover', () => {
			const btn = this.interactives.find((elm) => elm[0] === startButton)
			if (btn) {
				startButton.setTint(0xcccccc, 0xcccccc, 0xcccccc, 0xcccccc)
				btn[1] = true
			}
		})

		startButton.on('pointerout', () => {
			const btn = this.interactives.find((elm) => elm[0] === startButton)
			if (btn) {
				startButton.setTint(0xffffff, 0xffffff, 0xffffff, 0xffffff)
				btn[1] = false
			}
		})

		startButton.on('pointerup', () => {
			this.scene.start('Levels')
		})
	}

	protected preload() {
		this.load.image('background', background)
		this.load.image('menuButtonBg', menuButtonBg)
	}
}
