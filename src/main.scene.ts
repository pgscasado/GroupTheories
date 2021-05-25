import { Scene } from 'phaser';
import { TGameSettings } from './app';
import background from './assets/images/background.png'
import menuButtonBg from './assets/images/menuButtonMini.png'

export class MainMenu extends Scene {
	settings: TGameSettings;

	constructor(settings: TGameSettings){
		super({key: "MainMenu"})
		this.settings = settings;
	}

	protected preload(){
		this.load.image('background', background)
		this.load.image('menuButtonBg', menuButtonBg)
	}

	protected create(){
		const {width, height} = this.sys.game.scale.gameSize
		//background render
		this.add.image(width/2,height/2, 'background')
		//title text render
		const titleText = this.add.text(0, 0, "Group Theories", {
			fontFamily: 'Title',
			fontSize: '104px',
			color: 'rgb(160, 32, 240)'
		})
		Phaser.Display.Align.In.Center(titleText, this.add.zone(width*0.5, height*0.3, width, height))

		//button render
		this.add.image(width/2, height*0.75, 'menuButtonBg')
		const buttonText = this.add.text(0, 0, "Jogar!", {
			fontFamily: 'RobotoThin',
			fontSize: '48px',
			color: 'black'
		})
		Phaser.Display.Align.In.Center(buttonText, this.add.zone(width*0.5, height*0.75-8, width, height))
	}
}