import { Scene, GameObjects } from 'phaser';
import { TGameSettings } from './app'

export class MainMenu extends Scene {
	settings: TGameSettings;

	constructor(settings: TGameSettings){
		super({key: "MainMenu"})
		this.settings = settings;
	}

	protected preload(){
		//TODO
	}

	protected create(){
		const titleText = this.add.text(0, 0, "Color Theories", {
			fontFamily: 'Title',
			fontSize: '104px',
			color: 'rgb(160, 32, 240)'
		})


		const {width, height} = this.sys.game.scale.gameSize
		Phaser.Display.Align.In.Center(titleText, this.add.zone(width*0.5, height*0.3, width, height))
	}
}